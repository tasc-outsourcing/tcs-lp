/* GRO Arabic page: HubSpot form embed, Arabic wording on the form, and scroll-to-form links. */
(function () {
  "use strict";

  // HubSpot form "TCS KSA GRO Health Check (Arabic) - LP".
  // See GRO-AR_HubSpot-Form-AsBuilt_2026-11-16_v1.0.md in the campaign folder.
  var HUBSPOT = { region: "na1", portalId: "20309062", formId: "a9420447-abf9-41be-97fc-6e8566984ab3" };
  var SUBMIT_EVENT = "tcs_gro_ar_form_submit"; // pushed on a successful submit only; mapped in Tag Manager
  var TARGET_ID = "hubspot-form-gro";

  // Labels follow the live HubSpot form wording, which is what the visitor sees.
  var LABELS = {
    firstname: "الاسم الأول",
    lastname: "الاسم الأخير",
    email: "البريد الإلكتروني للعمل",
    phone: "رقم الجوال",
    company: "اسم الشركة",
    numemployees: "عدد الموظفين في السعودية"
  };
  var PLACEHOLDERS = { email: "name@company.com" };
  var COPY = {
    required: "هذا الحقل مطلوب.",
    email: "يرجى إدخال بريد إلكتروني صحيح للعمل.",
    phone: "يرجى إدخال رقم جوال صحيح.",
    select: "يرجى اختيار أحد الخيارات.",
    failure: "تعذر إرسال الطلب. يرجى المحاولة مرة أخرى.",
    success: "شكراً لك. استلمنا طلبك وسيتواصل معك أحد مختصينا قريباً لتحديد موعد المكالمة.",
    submit: "أرسل الطلب",
    choose: "اختر",
    countryCode: "رمز الدولة"
  };

  function setText(el, value) { if (el && el.textContent !== value) el.textContent = value; }
  function setAttr(el, name, value) { if (el && el.getAttribute(name) !== value) el.setAttribute(name, value); }

  // ---------- Scroll to the form ----------
  function scrollToForm(event) {
    var form = document.getElementById("form");
    if (!form) return;
    event.preventDefault();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", "#form");
    window.setTimeout(function () {
      var first = form.querySelector("input:not([type=hidden])");
      if (first) first.focus({ preventScroll: true });
    }, 600);
  }
  Array.prototype.forEach.call(document.querySelectorAll("[data-form-link]"), function (link) {
    link.addEventListener("click", scrollToForm);
  });

  // ---------- Arabic wording on the HubSpot form ----------
  function fieldWrapper(form, name) {
    return form.querySelector(".hs_" + name);
  }

  function setLabel(form, name) {
    var wrap = fieldWrapper(form, name);
    if (!wrap) return;
    var label = wrap.querySelector(":scope > label");
    if (!label) return;
    var span = label.querySelector("span:not(.hs-form-required)");
    if (!span) { span = document.createElement("span"); label.insertBefore(span, label.firstChild); }
    setText(span, LABELS[name]);
    if (!label.querySelector(".hs-form-required")) {
      var req = document.createElement("span");
      req.className = "hs-form-required";
      req.textContent = "*";
      label.appendChild(req);
    }
    label.style.display = "";
  }

  function localiseForm(form) {
    setAttr(form, "lang", "ar");
    setAttr(form, "dir", "rtl");

    Object.keys(LABELS).forEach(function (name) {
      setLabel(form, name);
      var input = form.querySelector('input[name="' + name + '"]:not([type=hidden])');
      if (input) setAttr(input, "placeholder", PLACEHOLDERS[name] || "");
    });

    // Visible phone input: HubSpot adds an English "Phone number" placeholder.
    var tel = form.querySelector('input[type="tel"]');
    if (tel) { setAttr(tel, "placeholder", ""); setAttr(tel, "dir", "ltr"); }
    var email = form.querySelector('input[name="email"]');
    if (email) setAttr(email, "dir", "ltr");

    // Country code list in Arabic, +966 by default (set once so a visitor's choice is kept).
    var country = form.querySelector('select[id^="phone_ext"]');
    if (country) {
      setAttr(country, "aria-label", COPY.countryCode);
      var names = typeof Intl !== "undefined" && Intl.DisplayNames ? new Intl.DisplayNames(["ar"], { type: "region" }) : null;
      Array.prototype.forEach.call(country.options, function (option) {
        if (!option.value) { setText(option, COPY.countryCode); return; }
        var name = option.textContent;
        try { if (names) name = names.of(option.value) || name; } catch (e) { /* keep HubSpot's label */ }
        setText(option, option.value === "SA" ? name + " (⁦+966⁩)" : name);
      });
      if (!country.dataset.defaulted) {
        country.dataset.defaulted = "true";
        if (country.value !== "SA") {
          country.value = "SA";
          country.dispatchEvent(new Event("input", { bubbles: true }));
          country.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }

    // Employee bands: the empty first option reads "اختر".
    var employees = form.querySelector('select[name="numemployees"]');
    if (employees) {
      Array.prototype.forEach.call(employees.options, function (option) {
        if (!option.value) setText(option, COPY.choose);
      });
    }

    var submit = form.querySelector('input[type="submit"]');
    if (submit && submit.value !== COPY.submit) submit.value = COPY.submit;

    Array.prototype.forEach.call(form.querySelectorAll(".hs-error-msg"), function (message) {
      var field = message.closest(".hs-form-field");
      var text = COPY.required;
      if (field && field.querySelector('[name="email"]')) text = COPY.email;
      if (field && field.querySelector('input[type="tel"]')) text = COPY.phone;
      if (field && field.querySelector('select[name="numemployees"]')) text = COPY.select;
      setText(message, text);
    });
    Array.prototype.forEach.call(form.querySelectorAll(".hs_error_rollup .hs-main-font-element"), function (message) {
      setText(message, COPY.failure);
    });
  }

  // ---------- Embed ----------
  function showLoadError() {
    var error = document.querySelector(".gro-form-error");
    if (error) error.hidden = false;
  }

  function createForm() {
    var target = document.getElementById(TARGET_ID);
    if (!target || !window.hbspt) { showLoadError(); return; }

    new MutationObserver(function () {
      var form = target.querySelector("form");
      if (form) localiseForm(form);
      var done = target.querySelector(".submitted-message");
      if (done) setText(done, COPY.success);
    }).observe(target, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    window.hbspt.forms.create({
      region: HUBSPOT.region,
      portalId: HUBSPOT.portalId,
      formId: HUBSPOT.formId,
      target: "#" + TARGET_ID,
      locale: "ar",
      css: "", // HubSpot styling off; bundle.css styles the fields
      translations: {
        ar: {
          required: COPY.required,
          invalidEmail: COPY.email,
          invalidEmailFormat: COPY.email,
          forbiddenEmailDomain: COPY.email,
          manuallyBlockedEmailDomain: COPY.email,
          invalidNumber: COPY.phone,
          phoneInvalidCharacters: COPY.phone,
          submitText: COPY.submit
        }
      },
      onFormSubmitted: function () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: SUBMIT_EVENT });
        window.setTimeout(function () { window.location.href = "/ar/gro-ksa/thank-you/"; }, 400);
      }
    });
  }

  var script = document.createElement("script");
  script.src = "https://js.hsforms.net/forms/embed/v2.js";
  script.charset = "utf-8";
  script.async = true;
  script.onload = createForm;
  script.onerror = showLoadError;
  document.body.appendChild(script);
})();
