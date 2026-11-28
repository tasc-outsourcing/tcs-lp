"use strict";
// Unit tests for ../assets/page.js. Run from the repo root:
//   node --test "Saudization Webinar 2027/tests/page.test.js"

const test = require("node:test");
const assert = require("node:assert/strict");
const page = require("../assets/page.js");

// The seven Zoho Source Tracker IDs from the build brief, section 5.
const BRIEF_IDS = {
  "linkedin-paid": "5800854000000012141",
  "meta-paid": "5800854000000012150",
  "hubspot-email": "5800854000000012154",
  smartlead: "5800854000000012158",
  "organic-linkedin": "5800854000000012162",
  "organic-x": "5800854000000012166",
  "lp-direct": "5800854000000012170"
};

const VALID = {
  NAME: "Kofi",
  REGISTRATIONCF1: "Osei",
  EMAIL: "name@company.com",
  REGISTRATIONCF8: "Company",
  REGISTRATIONCF14: "5800854000000012115"
};

// ---------- Fakes ----------

function fakeStorage(initial) {
  const data = Object.assign({}, initial);
  return {
    data,
    getItem: (key) => (Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null),
    setItem: (key, value) => { data[key] = String(value); },
    removeItem: (key) => { delete data[key]; }
  };
}

function throwingStorage() {
  const fail = () => { throw new Error("SecurityError"); };
  return { getItem: fail, setItem: fail, removeItem: fail };
}

function makeEvent(type, extra) {
  return Object.assign({
    type,
    defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; }
  }, extra);
}

function makeElement(doc, id, props, attrs, parent) {
  const classes = new Set();
  const listeners = {};
  const el = Object.assign({
    id,
    value: "",
    hidden: false,
    disabled: false,
    textContent: "",
    parent: parent || null,
    attrs: Object.assign({}, attrs),
    getAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attrs, name) ? this.attrs[name] : null; },
    setAttribute(name, value) { this.attrs[name] = String(value); },
    removeAttribute(name) { delete this.attrs[name]; },
    hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attrs, name); },
    classList: {
      add: (name) => classes.add(name),
      remove: (name) => classes.delete(name),
      contains: (name) => classes.has(name)
    },
    addEventListener(type, fn) { (listeners[type] = listeners[type] || []).push(fn); },
    dispatch(type, extra) {
      const event = makeEvent(type, Object.assign({ target: el }, extra));
      (listeners[type] || []).slice().forEach((fn) => fn.call(el, event));
      return event;
    },
    closest(selector) {
      const cls = selector.replace(/^\./, "");
      for (let node = el; node; node = node.parent) if (node.classList.contains(cls)) return node;
      return null;
    },
    focus() { doc.activeElement = el; }
  }, props);
  if (id) doc.elements[id] = el;
  return el;
}

// A minimal stand-in for the Task 2 form contract.
function buildDom(options) {
  const opts = Object.assign({ page: "", sourcetrackingId: "5800854000000012170" }, options);
  const doc = {
    elements: {},
    activeElement: null,
    readyState: "complete",
    body: { dataset: opts.page ? { page: opts.page } : {} },
    getElementById(id) { return this.elements[id] || null; },
    addEventListener() {}
  };
  const form = makeElement(doc, "form");
  form.submitCount = 0;
  form.submit = () => { form.submitCount += 1; };
  form.controls = [];
  const add = (el) => { form.controls.push(el); return el; };

  const hidden = [
    ["", "xnQsjsdp", "cfd0ae986b60384f8a988da83476481fe9a16753bd04d9b73dc9ff6b2e7282ea"],
    ["zc_gad", "zc_gad", ""],
    ["", "actionType", "UmVnaXN0cmF0aW9ucw=="],
    ["zoho-return-url", "returnURL", "https://webinar.zoho.com/postregister"],
    ["", "sysId", "5800854000000012093"],
    ["", "isEmbedForm", "true"],
    ["sourcetrackingId", "sourcetrackingId", opts.sourcetrackingId],
    ["zoho-timezone", "timezone", "Asia/Riyadh"]
  ];
  hidden.forEach(([id, name, value]) => add(makeElement(doc, id, { value }, { name, type: "hidden" })));

  const field = (id, name, required) => {
    const wrap = makeElement(doc, "", {}, {});
    wrap.classList.add("lp-field");
    const control = add(makeElement(doc, id, {}, { name }, wrap));
    if (required) makeElement(doc, id + "-error", { hidden: true }, {}, wrap);
    return control;
  };
  field("f-first", "NAME", true);
  field("f-last", "REGISTRATIONCF1", true);
  field("f-email", "EMAIL", true);
  field("f-company", "REGISTRATIONCF8", true);
  field("f-job", "REGISTRATIONCF9", false);
  field("f-employees", "REGISTRATIONCF13", false);
  field("f-country", "REGISTRATIONCF4", false);
  const fullWrap = makeElement(doc, "country-full-field", { hidden: true }, {});
  fullWrap.classList.add("lp-field");
  add(makeElement(doc, "f-country-full", { disabled: true }, { name: "REGISTRATIONCF4" }, fullWrap));
  field("f-help", "REGISTRATIONCF14", true);
  makeElement(doc, "register-submit", {}, { type: "submit" });
  makeElement(doc, "form-status", {}, { "aria-live": "polite" });
  return { doc, form, el: (id) => doc.elements[id] };
}

function buildWin(options) {
  const opts = Object.assign({ search: "", timeZone: "Asia/Riyadh" }, options);
  const timers = [];
  const listeners = {};
  const win = {
    location: { search: opts.search },
    Intl: { DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone: opts.timeZone }) }) },
    timers,
    setTimeout(fn, ms) { timers.push({ fn, ms, cleared: false }); return timers.length; },
    clearTimeout(handle) { if (timers[handle - 1]) timers[handle - 1].cleared = true; },
    addEventListener(type, fn) { (listeners[type] = listeners[type] || []).push(fn); },
    fire(type, extra) { (listeners[type] || []).forEach((fn) => fn(makeEvent(type, extra))); },
    runTimers() { timers.forEach((t) => { if (!t.cleared) { t.cleared = true; t.fn(); } }); }
  };
  if (opts.storage === "throws") {
    Object.defineProperty(win, "sessionStorage", { get() { throw new Error("SecurityError"); } });
  } else {
    win.sessionStorage = opts.storage || fakeStorage();
  }
  if (opts.dataLayer !== "missing") win.dataLayer = [];
  return win;
}

// What the browser would post: named, enabled controls.
function formData(form) {
  return form.controls
    .filter((c) => c.hasAttribute("name") && c.getAttribute("name") && !c.disabled)
    .map((c) => [c.getAttribute("name"), c.value]);
}

function fill(dom, values) {
  const ids = { NAME: "f-first", REGISTRATIONCF1: "f-last", EMAIL: "f-email", REGISTRATIONCF8: "f-company", REGISTRATIONCF14: "f-help" };
  Object.keys(values).forEach((name) => { dom.el(ids[name]).value = values[name]; });
}

function registrationPushes(win) {
  return (win.dataLayer || []).filter((e) => e.event === "webinar_registration");
}

// ---------- normalise ----------

test("normalise trims, lower-cases and maps null or undefined to an empty string", () => {
  assert.equal(page.normalise(" LinkedIn "), "linkedin");
  assert.equal(page.normalise("PAID"), "paid");
  assert.equal(page.normalise(null), "");
  assert.equal(page.normalise(undefined), "");
  assert.equal(page.normalise(""), "");
});

// ---------- Tracker config and resolveTracker ----------

test("tracker config matches the brief: order, names, IDs and default", () => {
  assert.deepEqual(page.TRACKERS.map((t) => t.name),
    ["linkedin-paid", "meta-paid", "hubspot-email", "smartlead", "organic-linkedin", "organic-x"]);
  page.TRACKERS.forEach((t) => assert.equal(t.id, BRIEF_IDS[t.name], t.name));
  assert.deepEqual(page.DEFAULT_TRACKER, { name: "lp-direct", id: "5800854000000012170" });
  assert.deepEqual(page.PAID_MEDIA,
    ["paid", "cpc", "ppc", "cpm", "paid_social", "paid-social", "paidsocial", "social_paid", "paid_search", "display"]);
});

test("every tracker clause names at least one condition", () => {
  page.TRACKERS.forEach((t) => {
    assert.ok(Array.isArray(t.when) && t.when.length > 0, t.name);
    t.when.forEach((clause) => assert.ok(clause.source || clause.medium || clause.notSource, t.name));
  });
});

const TRACKER_CASES = [
  ["linkedin", "paid", "linkedin-paid"],
  ["linkedin", "cpc", "linkedin-paid"],
  ["linkedin", "paid_social", "linkedin-paid"],
  ["meta", "paid", "meta-paid"],
  ["facebook", "cpc", "meta-paid"],
  ["ig", "paid_social", "meta-paid"],
  ["instagram", "display", "meta-paid"],
  ["fb", "ppc", "meta-paid"],
  ["hubspot", "", "hubspot-email"],
  ["newsletter", "email", "hubspot-email"],
  ["linkedin", "email", "hubspot-email"],
  ["smartlead", "email", "smartlead"],
  ["smartlead", "", "smartlead"],
  ["linkedin", "organic", "organic-linkedin"],
  ["linkedin", "", "organic-linkedin"],
  ["linkedin", "social", "organic-linkedin"],
  ["x", "organic", "organic-x"],
  ["twitter", "", "organic-x"],
  ["", "", "lp-direct"],
  ["google", "cpc", "lp-direct"],
  ["meta", "organic", "lp-direct"],
  [" LinkedIn ", "PAID", "linkedin-paid"]
];

TRACKER_CASES.forEach(([source, medium, name]) => {
  test(`resolveTracker {source: "${source}", medium: "${medium}"} -> ${name}`, () => {
    const tracker = page.resolveTracker({ source, medium });
    assert.equal(tracker.name, name);
    assert.equal(tracker.id, BRIEF_IDS[name]);
  });
});

test("resolveTracker returns plain {name, id} objects", () => {
  assert.deepEqual(page.resolveTracker({ source: "linkedin", medium: "paid" }), { name: "linkedin-paid", id: "5800854000000012141" });
  assert.deepEqual(page.resolveTracker(null), { name: "lp-direct", id: "5800854000000012170" });
  assert.deepEqual(page.resolveTracker(undefined), { name: "lp-direct", id: "5800854000000012170" });
});

test("every tracker id is one of the seven brief IDs and resolveTracker never returns an empty id", () => {
  const allowed = new Set(Object.values(BRIEF_IDS));
  page.TRACKERS.concat([page.DEFAULT_TRACKER]).forEach((t) => assert.ok(allowed.has(t.id), t.name));
  const sources = ["", "linkedin", "meta", "facebook", "instagram", "fb", "ig", "hubspot", "smartlead", "x", "twitter", "google", "bing", "LINKEDIN", "  ", null, undefined];
  const media = ["", "paid", "cpc", "email", "organic", "social", "display", "referral", "PAID", null, undefined].concat(page.PAID_MEDIA);
  sources.forEach((source) => media.forEach((medium) => {
    const tracker = page.resolveTracker({ source, medium });
    assert.ok(tracker.id, `${source}/${medium}`);
    assert.ok(allowed.has(tracker.id), `${source}/${medium}`);
  }));
});

// ---------- captureUtms ----------

test("captureUtms stores UTMs from the URL", () => {
  const storage = fakeStorage();
  const utm = page.captureUtms("?utm_source=LinkedIn&utm_medium=Paid&utm_campaign=saudization-webinar-2027", storage);
  assert.deepEqual(utm, { source: "linkedin", medium: "paid" });
  assert.deepEqual(JSON.parse(storage.data.tcsWebinarUtm), { source: "linkedin", medium: "paid" });
});

test("captureUtms keeps stored UTMs when the URL has none", () => {
  const storage = fakeStorage();
  page.captureUtms("?utm_source=linkedin&utm_medium=paid", storage);
  // Reload without the query string, or an in-page "Register Free" link (#form).
  assert.deepEqual(page.captureUtms("", storage), { source: "linkedin", medium: "paid" });
  assert.deepEqual(page.captureUtms("?foo=bar", storage), { source: "linkedin", medium: "paid" });
  assert.equal(page.resolveTracker(page.captureUtms("", storage)).name, "linkedin-paid");
});

test("captureUtms lets new UTMs in the URL replace stored ones", () => {
  const storage = fakeStorage({ tcsWebinarUtm: JSON.stringify({ source: "linkedin", medium: "paid" }) });
  assert.deepEqual(page.captureUtms("?utm_source=hubspot&utm_medium=email", storage), { source: "hubspot", medium: "email" });
  assert.deepEqual(page.captureUtms("", storage), { source: "hubspot", medium: "email" });
});

test("captureUtms survives a throwing storage", () => {
  assert.deepEqual(page.captureUtms("?utm_source=x&utm_medium=organic", throwingStorage()), { source: "x", medium: "organic" });
  assert.deepEqual(page.captureUtms("", throwingStorage()), { source: "", medium: "" });
  assert.deepEqual(page.captureUtms("?utm_source=x", null), { source: "x", medium: "" });
  assert.deepEqual(page.captureUtms("", null), { source: "", medium: "" });
});

test("captureUtms ignores corrupt stored data", () => {
  assert.deepEqual(page.captureUtms("", fakeStorage({ tcsWebinarUtm: "{not json" })), { source: "", medium: "" });
  assert.deepEqual(page.captureUtms("", fakeStorage({ tcsWebinarUtm: "null" })), { source: "", medium: "" });
});

// ---------- resolveTimezone ----------

test("resolveTimezone keeps zones in Zoho's list", () => {
  assert.equal(page.resolveTimezone("Asia/Dubai"), "Asia/Dubai");
  assert.equal(page.resolveTimezone("Asia/Riyadh"), "Asia/Riyadh");
  assert.equal(page.resolveTimezone("Europe/London"), "Europe/London");
});

test("resolveTimezone maps legacy aliases", () => {
  assert.equal(page.resolveTimezone("Asia/Calcutta"), "Asia/Kolkata");
  assert.equal(page.resolveTimezone("Asia/Katmandu"), "Asia/Kathmandu");
  assert.equal(page.resolveTimezone("Asia/Saigon"), "Asia/Ho_Chi_Minh");
  assert.equal(page.resolveTimezone("Asia/Rangoon"), "Asia/Yangon");
  assert.equal(page.resolveTimezone("Europe/Kiev"), "Europe/Kyiv");
  assert.equal(page.resolveTimezone("America/Buenos_Aires"), "America/Argentina/Buenos_Aires");
  assert.equal(page.resolveTimezone("Atlantic/Faeroe"), "Atlantic/Faroe");
});

test("resolveTimezone maps GCC zones missing from Zoho's list to a zone on the same clock", () => {
  assert.equal(page.resolveTimezone("Asia/Muscat"), "Asia/Dubai");
  assert.equal(page.resolveTimezone("Asia/Kuwait"), "Asia/Riyadh");
  assert.equal(page.resolveTimezone("Asia/Bahrain"), "Asia/Qatar");
  assert.equal(page.resolveTimezone("UTC"), "GMT");
});

test("resolveTimezone falls back to Asia/Riyadh", () => {
  assert.equal(page.resolveTimezone("Mars/Base"), "Asia/Riyadh");
  assert.equal(page.resolveTimezone(undefined), "Asia/Riyadh");
  assert.equal(page.resolveTimezone(""), "Asia/Riyadh");
  assert.equal(page.resolveTimezone("Antarctica/Vostok"), "Asia/Riyadh"); // real zone, not in Zoho's list, no alias
  assert.equal(page.resolveTimezone("toString"), "Asia/Riyadh");
});

test("resolveTimezone sends Pacific/Truk to Pacific/Port_Moresby, as Pacific/Chuuk is not in Zoho's list", () => {
  assert.ok(!page.ZOHO_TIMEZONES.includes("Pacific/Chuuk"));
  assert.equal(page.resolveTimezone("Pacific/Truk"), "Pacific/Port_Moresby");
});

test("ZOHO_TIMEZONES holds Zoho's 314 unique zones", () => {
  assert.equal(page.ZOHO_TIMEZONES.length, 314);
  assert.equal(new Set(page.ZOHO_TIMEZONES).size, 314);
  ["Asia/Riyadh", "Asia/Dubai", "Asia/Kolkata", "GMT"].forEach((tz) => assert.ok(page.ZOHO_TIMEZONES.includes(tz), tz));
});

test("TZ_ALIASES only maps zones outside Zoho's list to zones inside it, on the same clock", () => {
  const zoho = new Set(page.ZOHO_TIMEZONES);
  const offset = (timeZone, date) => new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "longOffset" })
    .formatToParts(date).find((p) => p.type === "timeZoneName").value;
  const dates = [new Date("2026-12-15T08:00:00Z"), new Date("2027-07-01T12:00:00Z")];
  Object.keys(page.TZ_ALIASES).forEach((alias) => {
    const target = page.TZ_ALIASES[alias];
    assert.ok(!zoho.has(alias), `${alias} is already in Zoho's list`);
    assert.ok(zoho.has(target), `${alias} -> ${target} is not in Zoho's list`);
    dates.forEach((date) => assert.equal(offset(alias, date), offset(target, date), `${alias} -> ${target} on ${date.toISOString()}`));
  });
});

// ---------- validateForm ----------

test("MESSAGES carry the agreed wording", () => {
  assert.deepEqual(page.MESSAGES, {
    NAME: "Enter your first name",
    REGISTRATIONCF1: "Enter your last name",
    EMAIL: "Enter your work email",
    EMAIL_INVALID: "Enter a valid email address, like name@company.com",
    REGISTRATIONCF8: "Enter your company name",
    REGISTRATIONCF14: "Choose what would help you most"
  });
});

test("validateForm({}) returns exactly the five required fields", () => {
  assert.deepEqual(page.validateForm({}), {
    NAME: page.MESSAGES.NAME,
    REGISTRATIONCF1: page.MESSAGES.REGISTRATIONCF1,
    EMAIL: page.MESSAGES.EMAIL,
    REGISTRATIONCF8: page.MESSAGES.REGISTRATIONCF8,
    REGISTRATIONCF14: page.MESSAGES.REGISTRATIONCF14
  });
});

test("validateForm flags a malformed email under EMAIL", () => {
  const errors = page.validateForm(Object.assign({}, VALID, { EMAIL: "k.osei@" }));
  assert.deepEqual(errors, { EMAIL: page.MESSAGES.EMAIL_INVALID });
  assert.deepEqual(page.validateForm(Object.assign({}, VALID, { EMAIL: "name@company.c" })), { EMAIL: page.MESSAGES.EMAIL_INVALID });
  assert.deepEqual(page.validateForm(Object.assign({}, VALID, { EMAIL: "name @company.com" })), { EMAIL: page.MESSAGES.EMAIL_INVALID });
});

test("validateForm rejects angle brackets in the email, as Zoho's own check does", () => {
  ["<name@company.com>", "name@company.com>", "<name@company.com", "name<x>@company.com"].forEach((email) => {
    assert.deepEqual(page.validateForm(Object.assign({}, VALID, { EMAIL: email })), { EMAIL: page.MESSAGES.EMAIL_INVALID }, email);
  });
});

test("validateForm accepts a full valid set", () => {
  assert.deepEqual(page.validateForm(VALID), {});
  assert.deepEqual(page.validateForm(Object.assign({}, VALID, { EMAIL: "  name@company.com  " })), {});
});

test("validateForm treats whitespace-only values as empty", () => {
  const blank = { NAME: "  ", REGISTRATIONCF1: "\t", EMAIL: " ", REGISTRATIONCF8: "\n", REGISTRATIONCF14: " " };
  assert.deepEqual(Object.keys(page.validateForm(blank)).sort(), Object.keys(page.MESSAGES).filter((k) => k !== "EMAIL_INVALID").sort());
  assert.equal(page.validateForm(blank).EMAIL, page.MESSAGES.EMAIL);
});

// ---------- Settings ----------

test("conversion settings start in submit mode with Zoho's returnURL", () => {
  assert.equal(page.CONVERSION_ON, "submit");
  assert.equal(page.ZOHO_RETURN_URL, "https://webinar.zoho.com/postregister");
  assert.equal(page.THANK_YOU_URL, "https://lp.tasccorporateservices.com/saudization-webinar-2027/thank-you/");
});

// ---------- initForm ----------

test("initForm sets the tracker and time zone on load", () => {
  const dom = buildDom();
  const win = buildWin({ search: "?utm_source=meta&utm_medium=paid", timeZone: "Asia/Calcutta" });
  page.initForm(dom.doc, win);
  assert.equal(dom.el("sourcetrackingId").value, BRIEF_IDS["meta-paid"]);
  assert.equal(dom.el("zoho-timezone").value, "Asia/Kolkata");
  assert.deepEqual(JSON.parse(win.sessionStorage.data.tcsWebinarUtm), { source: "meta", medium: "paid" });
});

test("initForm uses the stored tracker after a reload without UTMs", () => {
  const storage = fakeStorage({ tcsWebinarUtm: JSON.stringify({ source: "linkedin", medium: "paid" }) });
  const dom = buildDom();
  page.initForm(dom.doc, buildWin({ search: "", storage }));
  assert.equal(dom.el("sourcetrackingId").value, BRIEF_IDS["linkedin-paid"]);
});

test("initForm keeps lp-direct and Asia/Riyadh when storage and Intl fail", () => {
  const dom = buildDom();
  const win = buildWin({ storage: "throws", timeZone: "Mars/Base" });
  win.Intl = { DateTimeFormat: () => { throw new Error("no Intl"); } };
  page.initForm(dom.doc, win);
  assert.equal(dom.el("sourcetrackingId").value, BRIEF_IDS["lp-direct"]);
  assert.equal(dom.el("zoho-timezone").value, "Asia/Riyadh");
});

test("syncCountry posts exactly one REGISTRATIONCF4 as the country choice changes", () => {
  const dom = buildDom();
  page.initForm(dom.doc, buildWin());
  const country = dom.el("f-country");
  const full = dom.el("f-country-full");
  const wrap = dom.el("country-full-field");
  const countryValues = () => formData(dom.form).filter(([name]) => name === "REGISTRATIONCF4").map(([, v]) => v);

  assert.equal(wrap.hidden, true);
  assert.equal(full.disabled, true);
  assert.deepEqual(countryValues(), [""]);

  country.value = "other";
  country.dispatch("change");
  assert.equal(wrap.hidden, false);
  assert.equal(full.disabled, false);
  full.value = "5800854000000008108";
  assert.deepEqual(countryValues(), ["5800854000000008108"]);

  country.value = "5800854000000008320";
  country.dispatch("change");
  assert.equal(wrap.hidden, true);
  assert.equal(full.disabled, true);
  assert.deepEqual(countryValues(), ["5800854000000008320"]);
});

test("syncCountry runs again before submit", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, VALID);
  dom.el("f-country").value = "other"; // changed without a change event (for example, restored by the browser)
  dom.el("f-country-full").value = "5800854000000008108";
  dom.form.dispatch("submit");
  const countries = formData(dom.form).filter(([name]) => name === "REGISTRATIONCF4");
  assert.deepEqual(countries, [["REGISTRATIONCF4", "5800854000000008108"]]);
});

test("an invalid submit shows inline errors, focuses the first invalid field and does not post", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  const event = dom.form.dispatch("submit");

  assert.equal(event.defaultPrevented, true);
  [["f-first", "NAME"], ["f-last", "REGISTRATIONCF1"], ["f-email", "EMAIL"], ["f-company", "REGISTRATIONCF8"], ["f-help", "REGISTRATIONCF14"]]
    .forEach(([id, name]) => {
      const control = dom.el(id);
      assert.ok(control.parent.classList.contains("lp-field--error"), id);
      assert.equal(control.getAttribute("aria-invalid"), "true", id);
      assert.equal(dom.el(id + "-error").textContent, page.MESSAGES[name], id);
      assert.equal(dom.el(id + "-error").hidden, false, id);
    });
  assert.equal(dom.doc.activeElement, dom.el("f-first"));
  assert.equal(dom.form.submitCount, 0);
  assert.equal(registrationPushes(win).length, 0);
  assert.equal(dom.el("register-submit").disabled, false);
  assert.equal(win.timers.length, 0);
});

test("a malformed email focuses the email field with the format message", () => {
  const dom = buildDom();
  page.initForm(dom.doc, buildWin());
  fill(dom, Object.assign({}, VALID, { EMAIL: "k.osei@" }));
  dom.form.dispatch("submit");
  assert.equal(dom.doc.activeElement, dom.el("f-email"));
  assert.equal(dom.el("f-email-error").textContent, page.MESSAGES.EMAIL_INVALID);
  assert.ok(!dom.el("f-first").parent.classList.contains("lp-field--error"));
  assert.equal(dom.el("f-first").getAttribute("aria-invalid"), null);
});

test("when focus moves to the first invalid field, the live region stays quiet", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, Object.assign({}, VALID, { EMAIL: "name@company" }));
  dom.form.dispatch("submit");
  assert.equal(dom.doc.activeElement, dom.el("f-email"));
  assert.equal(dom.el("form-status").textContent, "");
  assert.equal(win.timers.length, 0);
});

test("Enter in a field that is still invalid reads its error out through the live region", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, Object.assign({}, VALID, { EMAIL: "name@company" }));
  dom.el("f-email").focus(); // the visitor is typing in the email field and presses Enter
  dom.form.dispatch("submit");
  assert.equal(dom.doc.activeElement, dom.el("f-email"));
  assert.equal(dom.el("form-status").textContent, "", "emptied first");
  assert.deepEqual(win.timers.map((t) => t.ms), [50]);
  win.runTimers();
  assert.equal(dom.el("form-status").textContent, page.MESSAGES.EMAIL_INVALID);
  assert.equal(dom.form.submitCount, 0);

  // A second Enter with the same error empties the region again, so it is read again.
  dom.form.dispatch("submit");
  assert.equal(dom.el("form-status").textContent, "");
  win.runTimers();
  assert.equal(dom.el("form-status").textContent, page.MESSAGES.EMAIL_INVALID);
});

test("the live region clears on input and on a valid submit", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, Object.assign({}, VALID, { EMAIL: "name@company" }));
  dom.el("f-email").focus();
  dom.form.dispatch("submit");
  win.runTimers();
  assert.equal(dom.el("form-status").textContent, page.MESSAGES.EMAIL_INVALID);
  dom.el("f-email").value = "name@company.com";
  dom.el("f-email").dispatch("input");
  assert.equal(dom.el("form-status").textContent, "");

  dom.el("f-email").value = "name@company";
  dom.form.dispatch("submit"); // message pending on its timer
  dom.el("f-email").value = "name@company.com";
  dom.form.dispatch("submit");
  assert.equal(dom.el("form-status").textContent, "");
  assert.ok(win.timers[win.timers.length - 2].cleared, "pending message cancelled");
  assert.equal(registrationPushes(win).length, 1);
});

test("the form works without the live region element", () => {
  const dom = buildDom();
  delete dom.doc.elements["form-status"];
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, Object.assign({}, VALID, { EMAIL: "name@company" }));
  dom.el("f-email").focus();
  dom.form.dispatch("submit");
  assert.equal(win.timers.length, 0);
  assert.equal(dom.el("f-email-error").textContent, page.MESSAGES.EMAIL_INVALID);
});

test("a field's error clears on input or change", () => {
  const dom = buildDom();
  page.initForm(dom.doc, buildWin());
  dom.form.dispatch("submit");

  dom.el("f-first").value = "K";
  dom.el("f-first").dispatch("input");
  assert.ok(!dom.el("f-first").parent.classList.contains("lp-field--error"));
  assert.equal(dom.el("f-first").getAttribute("aria-invalid"), null);
  assert.equal(dom.el("f-first-error").hidden, true);
  assert.equal(dom.el("f-first-error").textContent, "");

  dom.el("f-help").value = "5800854000000012117";
  dom.el("f-help").dispatch("change");
  assert.ok(!dom.el("f-help").parent.classList.contains("lp-field--error"));
  assert.equal(dom.el("f-help-error").hidden, true);

  // Others stay flagged until fixed.
  assert.ok(dom.el("f-last").parent.classList.contains("lp-field--error"));
});

test("errors from an earlier attempt clear when the field is valid on the next submit", () => {
  const dom = buildDom();
  page.initForm(dom.doc, buildWin());
  dom.form.dispatch("submit");
  fill(dom, Object.assign({}, VALID, { REGISTRATIONCF8: "" }));
  dom.form.dispatch("submit");
  assert.ok(!dom.el("f-first").parent.classList.contains("lp-field--error"));
  assert.equal(dom.el("f-first-error").hidden, true);
  assert.ok(dom.el("f-company").parent.classList.contains("lp-field--error"));
  assert.equal(dom.doc.activeElement, dom.el("f-company"));
});

test("a valid submit pushes webinar_registration and posts once when GTM calls back", () => {
  const dom = buildDom();
  const win = buildWin({ search: "?utm_source=linkedin&utm_medium=paid", timeZone: "Asia/Dubai" });
  page.initForm(dom.doc, win);
  fill(dom, VALID);
  const event = dom.form.dispatch("submit");

  assert.equal(event.defaultPrevented, true);
  assert.equal(dom.el("register-submit").disabled, true);
  assert.equal(dom.el("zoho-return-url").value, page.ZOHO_RETURN_URL);
  const pushes = registrationPushes(win);
  assert.equal(pushes.length, 1);
  assert.equal(pushes[0].webinar_tracker, "linkedin-paid");
  assert.equal(pushes[0].page_language, "en");
  assert.equal(pushes[0].eventTimeout, 2000);
  assert.equal(typeof pushes[0].eventCallback, "function");
  assert.equal(dom.form.submitCount, 0, "waits for GTM");

  pushes[0].eventCallback();
  assert.equal(dom.form.submitCount, 1);
  pushes[0].eventCallback(); // GTM may call back more than once
  win.runTimers();
  assert.equal(dom.form.submitCount, 1);
});

test("the form still posts after 2000 ms when GTM never calls eventCallback", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, VALID);
  dom.form.dispatch("submit");
  assert.equal(dom.form.submitCount, 0);
  assert.deepEqual(win.timers.map((t) => t.ms), [2000]);
  win.runTimers();
  assert.equal(dom.form.submitCount, 1);
  registrationPushes(win)[0].eventCallback(); // a late callback does not post again
  assert.equal(dom.form.submitCount, 1);
});

test("a double click on Register Free posts exactly once", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, VALID);
  dom.form.dispatch("submit");
  const second = dom.form.dispatch("submit");
  assert.equal(second.defaultPrevented, true);
  assert.equal(registrationPushes(win).length, 1);
  assert.equal(win.timers.length, 1);
  win.runTimers();
  registrationPushes(win)[0].eventCallback();
  assert.equal(dom.form.submitCount, 1);
});

test("a valid submit creates window.dataLayer when it is missing", () => {
  const dom = buildDom();
  const win = buildWin({ dataLayer: "missing" });
  page.initForm(dom.doc, win);
  fill(dom, VALID);
  dom.form.dispatch("submit");
  assert.ok(Array.isArray(win.dataLayer));
  assert.equal(registrationPushes(win).length, 1);
});

test("a valid submit re-sets the tracker and time zone and trims text fields", () => {
  const dom = buildDom();
  const win = buildWin({ search: "?utm_source=smartlead&utm_medium=email", timeZone: "Europe/London" });
  page.initForm(dom.doc, win);
  dom.el("sourcetrackingId").value = ""; // for example, cleared by the browser's form restore
  dom.el("zoho-timezone").value = "";
  fill(dom, Object.assign({}, VALID, { NAME: "  Kofi ", EMAIL: " name@company.com " }));
  dom.el("f-job").value = " HR Director ";
  dom.form.dispatch("submit");
  assert.equal(dom.el("sourcetrackingId").value, BRIEF_IDS.smartlead);
  assert.equal(dom.el("zoho-timezone").value, "Europe/London");
  assert.equal(dom.el("f-first").value, "Kofi");
  assert.equal(dom.el("f-email").value, "name@company.com");
  assert.equal(dom.el("f-job").value, "HR Director");
  assert.equal(registrationPushes(win)[0].webinar_tracker, "smartlead");
});

test("returning to the page from the back-forward cache re-enables the form", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win);
  fill(dom, VALID);
  dom.form.dispatch("submit");
  win.runTimers();
  assert.equal(dom.el("register-submit").disabled, true);
  win.fire("pageshow", { persisted: true });
  assert.equal(dom.el("register-submit").disabled, false);
  const again = dom.form.dispatch("submit");
  assert.equal(again.defaultPrevented, true);
  assert.equal(registrationPushes(win).length, 2);
  win.runTimers();
  assert.equal(dom.form.submitCount, 2);
});

test("thank-you mode posts natively with the thank-you returnURL and no submit-time conversion", () => {
  const dom = buildDom();
  const win = buildWin();
  page.initForm(dom.doc, win, { conversionOn: "thank-you" });
  fill(dom, VALID);
  const event = dom.form.dispatch("submit");
  assert.equal(event.defaultPrevented, false);
  assert.equal(dom.el("zoho-return-url").value, page.THANK_YOU_URL);
  assert.equal(registrationPushes(win).length, 0);
  assert.equal(dom.el("register-submit").disabled, true);
  assert.equal(dom.form.dispatch("submit").defaultPrevented, true, "second submit blocked");
});

// ---------- initThankYou ----------

test("initThankYou pushes one thank-you view and no conversion in submit mode", () => {
  const dom = buildDom({ page: "thank-you" });
  const win = buildWin({ storage: fakeStorage({ tcsWebinarUtm: JSON.stringify({ source: "linkedin", medium: "paid" }) }) });
  page.initThankYou(dom.doc, win);
  assert.deepEqual(win.dataLayer, [{ event: "webinar_thank_you_view", page_language: "en" }]);
});

test("initThankYou in thank-you mode pushes the stored tracker once per session", () => {
  const storage = fakeStorage({ tcsWebinarUtm: JSON.stringify({ source: "linkedin", medium: "paid" }) });
  const first = buildWin({ storage });
  page.initThankYou(buildDom({ page: "thank-you" }).doc, first, { conversionOn: "thank-you" });
  assert.deepEqual(first.dataLayer.map((e) => e.event), ["webinar_thank_you_view", "webinar_registration"]);
  assert.deepEqual(registrationPushes(first)[0], { event: "webinar_registration", webinar_tracker: "linkedin-paid", page_language: "en" });
  assert.ok(storage.data.tcsWebinarConverted);

  const reload = buildWin({ storage });
  page.initThankYou(buildDom({ page: "thank-you" }).doc, reload, { conversionOn: "thank-you" });
  assert.deepEqual(reload.dataLayer.map((e) => e.event), ["webinar_thank_you_view"]);
});

test("initThankYou survives a throwing storage and creates dataLayer", () => {
  const win = buildWin({ storage: "throws", dataLayer: "missing" });
  page.initThankYou(buildDom({ page: "thank-you" }).doc, win, { conversionOn: "thank-you" });
  assert.deepEqual(win.dataLayer.map((e) => e.event), ["webinar_thank_you_view", "webinar_registration"]);
  assert.equal(registrationPushes(win)[0].webinar_tracker, "lp-direct");
});
