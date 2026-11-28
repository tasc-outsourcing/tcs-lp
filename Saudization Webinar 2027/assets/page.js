/*
 * Saudization webinar 2027 landing page and thank-you page.
 * Channel tracker, UTM capture, time zone, inline validation and the GTM conversion push.
 * Plain browser script (no build step, loaded with defer). Under Node it exports its
 * functions for the tests, run from the repo root: node --test "Saudization Webinar 2027/tests/page.test.js"
 */
(function () {
  "use strict";

  // ---------- Tracker config ----------
  // Every registration posts one Zoho Source Tracker ID in the hidden sourcetrackingId field.
  // Trackers are checked top to bottom and the first match wins. A tracker matches when any one
  // of its "when" clauses matches, and a clause matches when every condition it names matches:
  //   source: utm_source is one of these      medium: utm_medium is one of these
  //   notSource: utm_source is none of these
  // UTM values are compared trimmed and lower-cased. No match means DEFAULT_TRACKER.
  //
  // To add a tracker: create the Source Tracker in Zoho Webinar and copy its ID, then add
  //   { name: "my-channel", id: "<Zoho tracker ID>", when: [{ source: ["..."], medium: ["..."] }] },
  // above any tracker that would otherwise catch the same UTMs. Add a case for it to
  // tests/page.test.js and a row to the tracker table in README.md.
  var PAID_MEDIA = ["paid", "cpc", "ppc", "cpm", "paid_social", "paid-social", "paidsocial", "social_paid", "paid_search", "display"];

  var TRACKERS = [
    { name: "linkedin-paid", id: "5800854000000012141", when: [{ source: ["linkedin"], medium: ["paid", "cpc", "paid_social"] }] },
    { name: "meta-paid", id: "5800854000000012150", when: [{ source: ["facebook", "instagram", "fb", "ig", "meta"], medium: PAID_MEDIA }] },
    { name: "hubspot-email", id: "5800854000000012154", when: [{ source: ["hubspot"] }, { medium: ["email"], notSource: ["smartlead"] }] },
    { name: "smartlead", id: "5800854000000012158", when: [{ source: ["smartlead"] }] },
    { name: "organic-linkedin", id: "5800854000000012162", when: [{ source: ["linkedin"] }] },
    { name: "organic-x", id: "5800854000000012166", when: [{ source: ["x", "twitter"] }] }
  ];

  var DEFAULT_TRACKER = { name: "lp-direct", id: "5800854000000012170" }; // also the HTML default

  // ---------- Conversion setting ----------
  // "submit": on a valid submit, push webinar_registration to the dataLayer, then post to Zoho
  //   once GTM calls back (or after 2 seconds). Zoho shows its own confirmation page.
  // "thank-you": post with returnURL = THANK_YOU_URL and push webinar_registration on the
  //   thank-you page instead. Not usable as things stand: a live test on 28 Nov 2026 showed Zoho
  //   ignores a custom returnURL and shows its own confirmation page. Zoho's own setting
  //   "Redirect registrants to a custom page after registration" can send people to the
  //   thank-you page without changing anything here.
  var CONVERSION_ON = "submit";
  var ZOHO_RETURN_URL = "https://webinar.zoho.com/postregister";
  var THANK_YOU_URL = "https://lp.tasccorporateservices.com/saudization-webinar-2027/thank-you/";

  // ---------- Page wording (swap for the Arabic page) ----------
  var PAGE_LANGUAGE = "en";
  var MESSAGES = {
    NAME: "Enter your first name",
    REGISTRATIONCF1: "Enter your last name",
    EMAIL: "Enter your work email",
    EMAIL_INVALID: "Enter a valid email address, like name@company.com",
    REGISTRATIONCF8: "Enter your company name",
    REGISTRATIONCF14: "Choose what would help you most"
  };

  // ---------- Form contract (ids in index.html) ----------
  var REQUIRED_FIELDS = ["NAME", "REGISTRATIONCF1", "EMAIL", "REGISTRATIONCF8", "REGISTRATIONCF14"]; // page order
  var FIELD_IDS = { NAME: "f-first", REGISTRATIONCF1: "f-last", EMAIL: "f-email", REGISTRATIONCF8: "f-company", REGISTRATIONCF14: "f-help" };
  var TEXT_FIELD_IDS = ["f-first", "f-last", "f-email", "f-company", "f-job"];
  // No spaces and no angle brackets, so a pasted "<name@company.com>" is caught here (Zoho's own check rejects it too).
  var EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
  var UTM_STORAGE_KEY = "tcsWebinarUtm";
  var CONVERTED_STORAGE_KEY = "tcsWebinarConverted";
  var SUBMIT_FALLBACK_MS = 2000;
  var ANNOUNCE_DELAY_MS = 50; // live region: empty it, then write, so a repeated message is read again
  var FALLBACK_TIMEZONE = "Asia/Riyadh";

  // ---------- Zoho time zones ----------
  // The 314 values in the timezone list of Zoho's own form for this webinar, in Zoho's order.
  var ZOHO_TIMEZONES = [
    "America/Cuiaba", "Asia/Aqtobe", "America/Sitka", "Asia/Vladivostok", "Africa/Nairobi", "Africa/Maputo",
    "Asia/Aqtau", "Pacific/Kwajalein", "America/El_Salvador", "America/Kentucky/Monticello",
    "Pacific/Marquesas", "Africa/El_Aaiun", "Asia/Pontianak", "Africa/Cairo", "Pacific/Pago_Pago",
    "Pacific/Honolulu", "Pacific/Rarotonga", "Asia/Kuching", "America/North_Dakota/Center",
    "America/Guatemala", "Australia/Hobart", "Europe/London", "Asia/Ulaanbaatar", "America/Belize",
    "America/Panama", "Asia/Baghdad", "America/Indiana/Tell_City", "America/Tijuana", "America/Managua",
    "America/Indiana/Petersburg", "Europe/Brussels", "Asia/Yerevan", "America/Chihuahua", "America/Ojinaga",
    "Asia/Hovd", "GMT", "America/Anchorage", "Europe/Warsaw", "America/Chicago", "America/Halifax",
    "Antarctica/Rothera", "America/Indiana/Indianapolis", "America/Tegucigalpa", "Asia/Damascus",
    "Europe/Istanbul", "America/Eirunepe", "America/Argentina/San_Luis", "America/Miquelon",
    "America/Argentina/Catamarca", "America/Santiago", "Asia/Baku", "America/Argentina/Ushuaia",
    "America/La_Paz", "Asia/Taipei", "Asia/Manila", "Asia/Bangkok", "Atlantic/Madeira", "Antarctica/Palmer",
    "America/Grand_Turk", "Asia/Samarkand", "Asia/Yangon", "America/Argentina/Cordoba",
    "America/Indiana/Marengo", "Asia/Almaty", "America/Punta_Arenas", "Asia/Dubai", "America/Araguaina",
    "America/Mexico_City", "Asia/Novosibirsk", "America/Argentina/Salta", "Africa/Tunis", "Asia/Jerusalem",
    "Europe/Andorra", "Pacific/Fakaofo", "Africa/Tripoli", "America/Coyhaique", "Pacific/Port_Moresby",
    "Pacific/Kiritimati", "America/Matamoros", "Pacific/Palau", "Europe/Kaliningrad", "Asia/Riyadh",
    "America/Montevideo", "Africa/Windhoek", "Atlantic/South_Georgia", "Europe/Lisbon", "Asia/Karachi",
    "Asia/Novokuznetsk", "Australia/Perth", "Asia/Chita", "Pacific/Easter", "Atlantic/Canary",
    "Antarctica/Davis", "Pacific/Efate", "America/Menominee", "America/Bogota", "America/Manaus",
    "America/Adak", "Europe/Bucharest", "Pacific/Norfolk", "Asia/Tomsk", "America/Argentina/Mendoza",
    "Europe/Malta", "Asia/Macau", "Pacific/Tahiti", "Europe/Kirov", "America/Resolute", "Pacific/Tarawa",
    "Pacific/Kanton", "Asia/Krasnoyarsk", "America/Argentina/Rio_Gallegos", "America/Edmonton",
    "America/Santo_Domingo", "Europe/Minsk", "Pacific/Auckland", "America/Glace_Bay", "Africa/Casablanca",
    "Africa/Lagos", "Asia/Qatar", "Europe/Rome", "Indian/Mauritius", "Asia/Magadan",
    "America/Port-au-Prince", "Asia/Ashgabat", "America/Regina", "America/Dawson_Creek", "Africa/Algiers",
    "America/St_Johns", "Europe/Zurich", "Europe/Vilnius", "America/Fortaleza", "Asia/Dili",
    "America/Denver", "America/Hermosillo", "Europe/Saratov", "America/Cancun", "Pacific/Kosrae",
    "Europe/Gibraltar", "Asia/Kathmandu", "Asia/Seoul", "Australia/Sydney", "America/Lima", "Europe/Madrid",
    "America/Bahia_Banderas", "America/Havana", "America/Cambridge_Bay", "Asia/Colombo", "Asia/Omsk",
    "Asia/Dhaka", "Australia/Brisbane", "America/Barbados", "Asia/Urumqi", "Atlantic/Cape_Verde",
    "Europe/Volgograd", "Asia/Yekaterinburg", "America/Vancouver", "America/Rio_Branco", "America/Detroit",
    "America/Danmarkshavn", "Pacific/Chatham", "America/Thule", "America/Sao_Paulo", "Asia/Jayapura",
    "Asia/Dushanbe", "Asia/Hong_Kong", "America/Guyana", "America/Guayaquil", "America/Martinique",
    "Europe/Berlin", "Europe/Moscow", "Europe/Chisinau", "America/Rankin_Inlet", "America/Puerto_Rico",
    "America/Argentina/La_Rioja", "Europe/Budapest", "America/Argentina/Jujuy", "America/Porto_Velho",
    "Australia/Eucla", "Asia/Sakhalin", "Asia/Shanghai", "America/Scoresbysund", "Europe/Helsinki",
    "Asia/Beirut", "Asia/Kamchatka", "Etc/GMT+12", "Pacific/Bougainville", "America/Nome", "Africa/Sao_Tome",
    "Indian/Chagos", "America/Cayenne", "Europe/Tallinn", "Asia/Yakutsk", "Pacific/Galapagos",
    "Africa/Khartoum", "Africa/Johannesburg", "Europe/Paris", "Africa/Ndjamena", "Pacific/Fiji",
    "Indian/Maldives", "Europe/Belgrade", "Africa/Bissau", "Asia/Tehran", "Asia/Oral", "America/Juneau",
    "Europe/Astrakhan", "America/Indiana/Vevay", "Asia/Tashkent", "America/Campo_Grande", "Africa/Juba",
    "Asia/Jakarta", "America/Belem", "Africa/Ceuta", "Asia/Barnaul", "America/Recife", "America/Goose_Bay",
    "America/Bahia", "America/Noronha", "America/Swift_Current", "Australia/Adelaide", "America/Metlakatla",
    "America/Paramaribo", "Asia/Qostanay", "Europe/Simferopol", "America/Phoenix", "Europe/Sofia",
    "Europe/Prague", "America/Whitehorse", "America/Indiana/Vincennes", "Antarctica/Mawson",
    "Pacific/Noumea", "Antarctica/Troll", "Asia/Tbilisi", "Europe/Kyiv", "Europe/Samara", "Asia/Makassar",
    "Pacific/Gambier", "America/Argentina/San_Juan", "America/Inuvik", "America/Iqaluit",
    "Antarctica/Macquarie", "Asia/Nicosia", "America/Moncton", "America/Indiana/Winamac", "Asia/Pyongyang",
    "America/Boa_Vista", "Asia/Gaza", "Asia/Atyrau", "Australia/Darwin", "Asia/Khandyga", "Asia/Famagusta",
    "Asia/Qyzylorda", "Asia/Thimphu", "America/Yakutat", "America/Kentucky/Louisville",
    "America/Ciudad_Juarez", "America/Argentina/Tucuman", "Asia/Kabul", "Asia/Ho_Chi_Minh",
    "Antarctica/Casey", "Pacific/Tongatapu", "America/New_York", "Atlantic/Azores", "Europe/Vienna",
    "America/Nuuk", "Europe/Ulyanovsk", "America/Merida", "Pacific/Pitcairn", "America/Mazatlan",
    "Pacific/Nauru", "Europe/Tirane", "Asia/Kolkata", "America/Fort_Nelson", "Australia/Broken_Hill",
    "Europe/Riga", "America/Caracas", "Asia/Hebron", "Africa/Abidjan", "Africa/Monrovia", "Asia/Ust-Nera",
    "America/Santarem", "America/Asuncion", "Asia/Srednekolymsk", "America/Boise",
    "America/North_Dakota/New_Salem", "Asia/Anadyr", "Pacific/Guam", "Australia/Melbourne", "Asia/Irkutsk",
    "Atlantic/Bermuda", "America/Dawson", "America/Costa_Rica", "America/Winnipeg", "America/Indiana/Knox",
    "America/North_Dakota/Beulah", "Atlantic/Faroe", "Asia/Amman", "SystemV/AST4ADT", "America/Maceio",
    "Asia/Tokyo", "Pacific/Apia", "Pacific/Niue", "Australia/Lord_Howe", "Europe/Dublin", "America/Toronto",
    "Asia/Singapore", "Australia/Lindeman", "America/Los_Angeles", "America/Monterrey",
    "America/Argentina/Buenos_Aires", "America/Jamaica", "Pacific/Guadalcanal", "Europe/Athens",
    "Asia/Bishkek", "Atlantic/Stanley"
  ];

  // Zone IDs a browser can report that are not in Zoho's list, mapped to the zone Zoho lists
  // for the same clock (IANA tzdata links). Every target must be in ZOHO_TIMEZONES.
  var TZ_ALIASES = {
    // Renamed zones (browsers still report the old names)
    "Asia/Calcutta": "Asia/Kolkata",
    "Asia/Katmandu": "Asia/Kathmandu",
    "Asia/Saigon": "Asia/Ho_Chi_Minh",
    "Asia/Rangoon": "Asia/Yangon",
    "Europe/Kiev": "Europe/Kyiv",
    "Atlantic/Faeroe": "Atlantic/Faroe",
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
    "America/Catamarca": "America/Argentina/Catamarca",
    "America/Cordoba": "America/Argentina/Cordoba",
    "America/Jujuy": "America/Argentina/Jujuy",
    "America/Mendoza": "America/Argentina/Mendoza",
    "America/Godthab": "America/Nuuk",
    "America/Indianapolis": "America/Indiana/Indianapolis",
    "America/Louisville": "America/Kentucky/Louisville",
    "Pacific/Enderbury": "Pacific/Kanton",
    // GCC and Middle East
    "Asia/Muscat": "Asia/Dubai",
    "Asia/Bahrain": "Asia/Qatar",
    "Asia/Kuwait": "Asia/Riyadh",
    "Asia/Aden": "Asia/Riyadh",
    "Antarctica/Syowa": "Asia/Riyadh",
    // UTC
    "UTC": "GMT",
    "Etc/UTC": "GMT",
    "Etc/GMT": "GMT",
    "Etc/UCT": "GMT",
    "Etc/Universal": "GMT",
    "Etc/Zulu": "GMT",
    "Etc/Greenwich": "GMT",
    // Africa
    "Africa/Accra": "Africa/Abidjan",
    "Africa/Bamako": "Africa/Abidjan",
    "Africa/Banjul": "Africa/Abidjan",
    "Africa/Conakry": "Africa/Abidjan",
    "Africa/Dakar": "Africa/Abidjan",
    "Africa/Freetown": "Africa/Abidjan",
    "Africa/Lome": "Africa/Abidjan",
    "Africa/Nouakchott": "Africa/Abidjan",
    "Africa/Ouagadougou": "Africa/Abidjan",
    "Atlantic/Reykjavik": "Africa/Abidjan",
    "Atlantic/St_Helena": "Africa/Abidjan",
    "Africa/Bangui": "Africa/Lagos",
    "Africa/Brazzaville": "Africa/Lagos",
    "Africa/Douala": "Africa/Lagos",
    "Africa/Kinshasa": "Africa/Lagos",
    "Africa/Libreville": "Africa/Lagos",
    "Africa/Luanda": "Africa/Lagos",
    "Africa/Malabo": "Africa/Lagos",
    "Africa/Niamey": "Africa/Lagos",
    "Africa/Porto-Novo": "Africa/Lagos",
    "Africa/Blantyre": "Africa/Maputo",
    "Africa/Bujumbura": "Africa/Maputo",
    "Africa/Gaborone": "Africa/Maputo",
    "Africa/Harare": "Africa/Maputo",
    "Africa/Kigali": "Africa/Maputo",
    "Africa/Lubumbashi": "Africa/Maputo",
    "Africa/Lusaka": "Africa/Maputo",
    "Africa/Maseru": "Africa/Johannesburg",
    "Africa/Mbabane": "Africa/Johannesburg",
    "Africa/Addis_Ababa": "Africa/Nairobi",
    "Africa/Asmera": "Africa/Nairobi",
    "Africa/Dar_es_Salaam": "Africa/Nairobi",
    "Africa/Djibouti": "Africa/Nairobi",
    "Africa/Kampala": "Africa/Nairobi",
    "Africa/Mogadishu": "Africa/Nairobi",
    "Indian/Antananarivo": "Africa/Nairobi",
    "Indian/Comoro": "Africa/Nairobi",
    "Indian/Mayotte": "Africa/Nairobi",
    "Indian/Mahe": "Asia/Dubai",
    "Indian/Reunion": "Asia/Dubai",
    // Europe
    "Arctic/Longyearbyen": "Europe/Berlin",
    "Europe/Copenhagen": "Europe/Berlin",
    "Europe/Oslo": "Europe/Berlin",
    "Europe/Stockholm": "Europe/Berlin",
    "Europe/Amsterdam": "Europe/Brussels",
    "Europe/Luxembourg": "Europe/Brussels",
    "Europe/Bratislava": "Europe/Prague",
    "Europe/Busingen": "Europe/Zurich",
    "Europe/Vaduz": "Europe/Zurich",
    "Europe/Guernsey": "Europe/London",
    "Europe/Isle_of_Man": "Europe/London",
    "Europe/Jersey": "Europe/London",
    "Europe/Ljubljana": "Europe/Belgrade",
    "Europe/Podgorica": "Europe/Belgrade",
    "Europe/Sarajevo": "Europe/Belgrade",
    "Europe/Skopje": "Europe/Belgrade",
    "Europe/Zagreb": "Europe/Belgrade",
    "Europe/Mariehamn": "Europe/Helsinki",
    "Europe/Monaco": "Europe/Paris",
    "Europe/San_Marino": "Europe/Rome",
    "Europe/Vatican": "Europe/Rome",
    // Asia and Indian Ocean
    "Asia/Brunei": "Asia/Kuching",
    "Asia/Kuala_Lumpur": "Asia/Singapore",
    "Asia/Phnom_Penh": "Asia/Bangkok",
    "Asia/Vientiane": "Asia/Bangkok",
    "Indian/Christmas": "Asia/Bangkok",
    "Indian/Cocos": "Asia/Yangon",
    "Indian/Kerguelen": "Indian/Maldives",
    // Americas
    "America/Anguilla": "America/Puerto_Rico",
    "America/Antigua": "America/Puerto_Rico",
    "America/Aruba": "America/Puerto_Rico",
    "America/Blanc-Sablon": "America/Puerto_Rico",
    "America/Curacao": "America/Puerto_Rico",
    "America/Dominica": "America/Puerto_Rico",
    "America/Grenada": "America/Puerto_Rico",
    "America/Guadeloupe": "America/Puerto_Rico",
    "America/Kralendijk": "America/Puerto_Rico",
    "America/Lower_Princes": "America/Puerto_Rico",
    "America/Marigot": "America/Puerto_Rico",
    "America/Montserrat": "America/Puerto_Rico",
    "America/Port_of_Spain": "America/Puerto_Rico",
    "America/St_Barthelemy": "America/Puerto_Rico",
    "America/St_Kitts": "America/Puerto_Rico",
    "America/St_Lucia": "America/Puerto_Rico",
    "America/St_Thomas": "America/Puerto_Rico",
    "America/St_Vincent": "America/Puerto_Rico",
    "America/Tortola": "America/Puerto_Rico",
    "America/Cayman": "America/Panama",
    "America/Coral_Harbour": "America/Panama",
    "America/Creston": "America/Phoenix",
    "America/Nassau": "America/Toronto",
    // Pacific and Antarctica
    "Antarctica/McMurdo": "Pacific/Auckland",
    "Antarctica/DumontDUrville": "Pacific/Port_Moresby",
    "Pacific/Truk": "Pacific/Port_Moresby",
    "Pacific/Ponape": "Pacific/Guadalcanal",
    "Pacific/Saipan": "Pacific/Guam",
    "Pacific/Midway": "Pacific/Pago_Pago",
    "Pacific/Funafuti": "Pacific/Tarawa",
    "Pacific/Majuro": "Pacific/Tarawa",
    "Pacific/Wake": "Pacific/Tarawa",
    "Pacific/Wallis": "Pacific/Tarawa"
  };

  var ZOHO_TIMEZONE_SET = {};
  ZOHO_TIMEZONES.forEach(function (tz) { ZOHO_TIMEZONE_SET[tz] = true; });

  function hasOwn(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  }

  // ---------- Pure functions ----------

  function normalise(v) {
    return v === null || v === undefined ? "" : String(v).trim().toLowerCase();
  }

  function inList(value, list) {
    for (var i = 0; i < list.length; i++) if (normalise(list[i]) === value) return true;
    return false;
  }

  function clauseMatches(clause, utm) {
    if (clause.source && !inList(utm.source, clause.source)) return false;
    if (clause.medium && !inList(utm.medium, clause.medium)) return false;
    if (clause.notSource && inList(utm.source, clause.notSource)) return false;
    return true;
  }

  function resolveTracker(utm) {
    var u = { source: normalise(utm && utm.source), medium: normalise(utm && utm.medium) };
    for (var i = 0; i < TRACKERS.length; i++) {
      var tracker = TRACKERS[i];
      if (!tracker.id) continue; // never send an empty sourcetrackingId
      for (var j = 0; j < tracker.when.length; j++) {
        if (clauseMatches(tracker.when[j], u)) return { name: tracker.name, id: tracker.id };
      }
    }
    return { name: DEFAULT_TRACKER.name, id: DEFAULT_TRACKER.id };
  }

  function storageGet(storage, key) {
    if (!storage) return null;
    try { return storage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(storage, key, value) {
    if (!storage) return;
    try { storage.setItem(key, value); } catch (e) { /* private mode or storage blocked */ }
  }

  function readUrlUtms(search) {
    var params = new URLSearchParams(search || "");
    return { source: normalise(params.get("utm_source")), medium: normalise(params.get("utm_medium")) };
  }

  function readStoredUtms(storage) {
    var raw = storageGet(storage, UTM_STORAGE_KEY);
    if (raw) {
      try {
        var data = JSON.parse(raw);
        if (data && typeof data === "object") return { source: normalise(data.source), medium: normalise(data.medium) };
      } catch (e) { /* corrupt value: ignore it */ }
    }
    return { source: "", medium: "" };
  }

  // UTMs in the address win and are kept for the session; without them, the stored ones apply,
  // so the tracker survives a reload or an in-page "Register Free" link.
  function captureUtms(search, storage) {
    var fromUrl = readUrlUtms(search);
    if (fromUrl.source || fromUrl.medium) {
      storageSet(storage, UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return readStoredUtms(storage);
  }

  function resolveTimezone(tz) {
    if (typeof tz !== "string") return FALLBACK_TIMEZONE;
    var zone = tz.trim();
    if (hasOwn(ZOHO_TIMEZONE_SET, zone)) return zone;
    if (hasOwn(TZ_ALIASES, zone)) return TZ_ALIASES[zone];
    return FALLBACK_TIMEZONE;
  }

  function validateForm(values) {
    var v = values || {};
    var errors = {};
    REQUIRED_FIELDS.forEach(function (name) {
      var value = v[name] === null || v[name] === undefined ? "" : String(v[name]).trim();
      if (!value) errors[name] = MESSAGES[name];
      else if (name === "EMAIL" && !EMAIL_PATTERN.test(value)) errors[name] = MESSAGES.EMAIL_INVALID;
    });
    return errors;
  }

  // ---------- Browser helpers ----------

  function getStorage(win) {
    try { return win.sessionStorage || null; } catch (e) { return null; }
  }

  function browserTimezone(win) {
    try {
      var intl = win.Intl || (typeof Intl !== "undefined" ? Intl : null);
      return intl ? intl.DateTimeFormat().resolvedOptions().timeZone : undefined;
    } catch (e) {
      return undefined;
    }
  }

  function pushToDataLayer(win, data) {
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(data);
  }

  function conversionMode(options) {
    return options && options.conversionOn ? options.conversionOn : CONVERSION_ON;
  }

  // ---------- Landing page ----------

  function initForm(doc, win, options) {
    var form = doc.getElementById("form");
    if (!form) return;
    var mode = conversionMode(options);
    var storage = getStorage(win);
    var trackerInput = doc.getElementById("sourcetrackingId");
    var timezoneInput = doc.getElementById("zoho-timezone");
    var returnInput = doc.getElementById("zoho-return-url");
    var button = doc.getElementById("register-submit");
    var country = doc.getElementById("f-country");
    var countryFull = doc.getElementById("f-country-full");
    var countryFullField = doc.getElementById("country-full-field");
    var countryName = (country && country.getAttribute("name")) || "REGISTRATIONCF4";
    var status = doc.getElementById("form-status"); // visually hidden aria-live region
    var announceTimer = null;
    var tracker = DEFAULT_TRACKER;
    var submitting = false;

    function setHiddenFields() {
      tracker = resolveTracker(captureUtms(win.location ? win.location.search : "", storage));
      if (trackerInput) trackerInput.value = tracker.id;
      if (timezoneInput) timezoneInput.value = resolveTimezone(browserTimezone(win));
    }

    // Only one REGISTRATIONCF4 is posted: the short list, or the full list when "Other country"
    // is picked (the short list then drops its name so "other" is never sent).
    function syncCountry() {
      if (!country || !countryFull) return;
      var other = country.value === "other";
      if (countryFullField) countryFullField.hidden = !other;
      countryFull.disabled = !other;
      if (other) country.removeAttribute("name");
      else country.setAttribute("name", countryName);
    }

    function controlFor(name) {
      return doc.getElementById(FIELD_IDS[name]);
    }

    function fieldOf(control) {
      return control.closest ? control.closest(".lp-field") : null;
    }

    function showError(control, message) {
      var field = fieldOf(control);
      if (field) field.classList.add("lp-field--error");
      control.setAttribute("aria-invalid", "true");
      var note = doc.getElementById(control.id + "-error");
      if (note) {
        note.textContent = message;
        note.hidden = false;
      }
    }

    function clearError(control) {
      var field = fieldOf(control);
      if (field) field.classList.remove("lp-field--error");
      control.removeAttribute("aria-invalid");
      var note = doc.getElementById(control.id + "-error");
      if (note) {
        note.textContent = "";
        note.hidden = true;
      }
    }

    // Screen readers do not re-read identical text, so the region is emptied first and the
    // message written a moment later. Only used when focus cannot move (see onSubmit).
    function announce(message) {
      if (!status) return;
      if (announceTimer !== null) win.clearTimeout(announceTimer);
      status.textContent = "";
      announceTimer = win.setTimeout(function () {
        announceTimer = null;
        status.textContent = message;
      }, ANNOUNCE_DELAY_MS);
    }

    function clearAnnouncement() {
      if (!status) return;
      if (announceTimer !== null) win.clearTimeout(announceTimer);
      announceTimer = null;
      status.textContent = "";
    }

    function trimTextFields() {
      TEXT_FIELD_IDS.forEach(function (id) {
        var control = doc.getElementById(id);
        if (control && typeof control.value === "string") control.value = control.value.trim();
      });
    }

    function postOnce() {
      var posted = false;
      var timer;
      function post() {
        if (posted) return;
        posted = true;
        win.clearTimeout(timer);
        // The prototype method still works if a control named "submit" ever shadows form.submit.
        var nativeSubmit = win.HTMLFormElement && win.HTMLFormElement.prototype && win.HTMLFormElement.prototype.submit;
        (nativeSubmit || form.submit).call(form);
      }
      timer = win.setTimeout(post, SUBMIT_FALLBACK_MS); // GTM blocked or slow: post anyway
      return post;
    }

    function onSubmit(event) {
      if (submitting) {
        event.preventDefault();
        return;
      }
      syncCountry();

      var values = {};
      REQUIRED_FIELDS.forEach(function (name) {
        var control = controlFor(name);
        if (control) values[name] = control.value;
      });
      var errors = validateForm(values);
      var firstInvalid = null;
      var firstMessage = "";
      REQUIRED_FIELDS.forEach(function (name) {
        var control = controlFor(name);
        if (!control) return; // never block on a field the page does not show
        if (hasOwn(errors, name)) {
          showError(control, errors[name]);
          if (!firstInvalid) {
            firstInvalid = control;
            firstMessage = errors[name];
          }
        } else {
          clearError(control);
        }
      });
      if (firstInvalid) {
        event.preventDefault();
        // Moving focus makes a screen reader read the field and its error (aria-describedby).
        // When focus is already there (Enter pressed in that field), focus() does nothing, so the
        // error goes to the live region instead. Never both, so the message is not read twice.
        if (doc.activeElement === firstInvalid) announce(firstMessage);
        else clearAnnouncement();
        firstInvalid.focus();
        return;
      }

      clearAnnouncement();
      trimTextFields();
      setHiddenFields();
      if (returnInput) returnInput.value = mode === "thank-you" ? THANK_YOU_URL : ZOHO_RETURN_URL;
      submitting = true;
      if (button) button.disabled = true;
      if (mode !== "submit") return; // native post; the thank-you page records the conversion

      event.preventDefault();
      var post = postOnce();
      pushToDataLayer(win, {
        event: "webinar_registration",
        webinar_tracker: tracker.name,
        page_language: PAGE_LANGUAGE,
        eventCallback: post,
        eventTimeout: SUBMIT_FALLBACK_MS
      });
    }

    setHiddenFields();
    syncCountry();
    if (country) country.addEventListener("change", syncCountry);
    REQUIRED_FIELDS.forEach(function (name) {
      var control = controlFor(name);
      if (!control) return;
      var clear = function () {
        clearError(control);
        clearAnnouncement();
      };
      control.addEventListener("input", clear);
      control.addEventListener("change", clear);
    });
    form.addEventListener("submit", onSubmit);

    // Back button after posting: the browser may restore this page with the button disabled.
    win.addEventListener("pageshow", function (event) {
      if (!event.persisted) return;
      submitting = false;
      if (button) button.disabled = false;
      setHiddenFields();
      syncCountry();
    });
  }

  // ---------- Thank-you page ----------

  function initThankYou(doc, win, options) {
    var storage = getStorage(win);
    pushToDataLayer(win, { event: "webinar_thank_you_view", page_language: PAGE_LANGUAGE });
    if (conversionMode(options) !== "thank-you") return;
    if (storageGet(storage, CONVERTED_STORAGE_KEY)) return; // already counted this session
    var tracker = resolveTracker(readStoredUtms(storage));
    pushToDataLayer(win, { event: "webinar_registration", webinar_tracker: tracker.name, page_language: PAGE_LANGUAGE });
    storageSet(storage, CONVERTED_STORAGE_KEY, "1");
  }

  // ---------- Exports and boot ----------

  var api = {
    TRACKERS: TRACKERS,
    DEFAULT_TRACKER: DEFAULT_TRACKER,
    PAID_MEDIA: PAID_MEDIA,
    CONVERSION_ON: CONVERSION_ON,
    ZOHO_RETURN_URL: ZOHO_RETURN_URL,
    THANK_YOU_URL: THANK_YOU_URL,
    MESSAGES: MESSAGES,
    ZOHO_TIMEZONES: ZOHO_TIMEZONES,
    TZ_ALIASES: TZ_ALIASES,
    normalise: normalise,
    resolveTracker: resolveTracker,
    captureUtms: captureUtms,
    resolveTimezone: resolveTimezone,
    validateForm: validateForm,
    initForm: initForm,
    initThankYou: initThankYou
  };

  function boot(doc, win) {
    if (win.TcsWebinarLP) return; // script included twice: run once
    win.TcsWebinarLP = api;
    function start() {
      if (doc.body && doc.body.dataset && doc.body.dataset.page === "thank-you") initThankYou(doc, win);
      else initForm(doc, win);
    }
    if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", start);
    else start();
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else if (typeof window !== "undefined" && typeof document !== "undefined") {
    boot(document, window);
  }
})();
