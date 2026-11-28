# Saudization webinar 2027 landing page

Registration page and thank-you page for the TASC Corporate Services webinar "Saudization changes you need to know for 2027" (Tuesday 15 December 2026, 11:00 KSA, Zoho Webinar ID 1027584812).

The form posts straight to Zoho Webinar. There is no HubSpot form on this page: Zoho sends the joining link and reminders and syncs registrants to HubSpot. Every registration carries a Zoho source tracker, chosen from the UTM tags in the page address.

## Routes

| Route | Source |
|---|---|
| `https://lp.tasccorporateservices.com/saudization-webinar-2027/` | `index.html` |
| `https://lp.tasccorporateservices.com/saudization-webinar-2027/thank-you/` | `thank-you/index.html` |
| `/saudization-webinar-2027/assets/<file>` | `assets/` |

The no-slash paths redirect to the slash versions (`vercel.json`). Both pages are `noindex, nofollow` and load GTM container `GTM-55QZ8ZJ`.

## Files

| File | What it is |
|---|---|
| `index.html` | Landing page with the registration form in the hero |
| `thank-you/index.html` | Thank-you page (`<body data-page="thank-you">`) |
| `assets/page.js` | Tracker config, UTM capture, time zone, validation and the conversion push for both pages. Exports its pure functions for the Node tests |
| `assets/page.css` | The few layout rules the approved design needs, using design system tokens only |
| `assets/tokens.css`, `assets/bundle.css` | Copies of the repo's design system, frozen for this page |
| `assets/hero-presenter.jpg`, `assets/agenda-tablet.jpg`, `assets/riyadh-skyline.jpg` | Section photos |
| `assets/tcs-logo.png`, `assets/tcs-logo-white.png` | Supplied TCS logos (never redraw them) |
| `assets/share-1200x630.jpg` | Open Graph and Twitter share image, 1200x630 |
| `assets/saudization-webinar-2027.ics` | "Add to calendar" file: 15 Dec 2026, 08:00 to 09:00 UTC |
| `tests/page.test.js` | Unit tests for `page.js` |
| `README.md` | This file |

`scripts/build-multi-lp.sh` copies this folder to `dist/saudization-webinar-2027/` and then deletes `README.md` and `tests/` from the copy, so neither is served.

All asset URLs in the HTML are absolute (`/saudization-webinar-2027/assets/...`), so the pages only display properly when served from that path (see "Preview locally").

## The form

- `POST` to `https://webinar.zoho.com/meeting/WebForm`, `accept-charset="UTF-8"`, a normal full-page post.
- Hidden fields: `xnQsjsdp`, `zc_gad`, `xmIwtLD`, `actionType`, `returnURL`, `sysId`, `isEmbedForm`, `sourcetrackingId`, `timezone`. The two long tokens (`xnQsjsdp`, `xmIwtLD`) come as a pair from a Zoho form snippet. If you ever replace them, replace both from the same snippet.
- Select values are Zoho option IDs, not label text.
- Country shows a short list plus "Other country", which reveals Zoho's full list. Only one `REGISTRATIONCF4` select is enabled when the form posts.
- `timezone` is the visitor's IANA zone when it is in Zoho's list (legacy names such as `Asia/Calcutta` are mapped to Zoho's `Asia/Kolkata`), otherwise `Asia/Riyadh`.
- Required fields and the email format are checked in the page, with inline messages. The message text sits in `MESSAGES` in `page.js`, so the Arabic page can swap it.

## UTM scheme and ad URLs

Add `utm_campaign=saudization-webinar-2027` to every link. Only `utm_source` and `utm_medium` decide the tracker; `utm_campaign`, `utm_content` and `utm_term` can be anything.

| Channel | Use this URL | Tracker |
|---|---|---|
| LinkedIn ads | `https://lp.tasccorporateservices.com/saudization-webinar-2027/?utm_source=linkedin&utm_medium=paid&utm_campaign=saudization-webinar-2027` | linkedin-paid |
| Meta ads (Facebook and Instagram) | `https://lp.tasccorporateservices.com/saudization-webinar-2027/?utm_source=meta&utm_medium=paid&utm_campaign=saudization-webinar-2027` | meta-paid |
| HubSpot emails | `https://lp.tasccorporateservices.com/saudization-webinar-2027/?utm_source=hubspot&utm_medium=email&utm_campaign=saudization-webinar-2027` | hubspot-email |
| Smartlead emails | `https://lp.tasccorporateservices.com/saudization-webinar-2027/?utm_source=smartlead&utm_medium=email&utm_campaign=saudization-webinar-2027` | smartlead |
| Organic LinkedIn posts | `https://lp.tasccorporateservices.com/saudization-webinar-2027/?utm_source=linkedin&utm_medium=organic&utm_campaign=saudization-webinar-2027` | organic-linkedin |
| X posts | `https://lp.tasccorporateservices.com/saudization-webinar-2027/?utm_source=x&utm_medium=organic&utm_campaign=saudization-webinar-2027` | organic-x |
| Anything else, or no UTMs | `https://lp.tasccorporateservices.com/saudization-webinar-2027/` | lp-direct |

Watch for:

- Meta needs a paid medium. `utm_source=meta&utm_medium=organic` (an organic Facebook or Instagram post) falls through to lp-direct, because there is no organic Meta tracker.
- Any link with `utm_medium=email` counts as hubspot-email unless the source is `smartlead`.
- Use the trailing slash in every ad URL. The no-slash path redirects, and an extra redirect is one more place for an ad platform to drop parameters.

## Trackers

Defined once, in `TRACKERS` at the top of `assets/page.js`. Values are trimmed and lower-cased, then matched in this order; the first match wins.

| Tracker | `sourcetrackingId` | Matches when |
|---|---|---|
| linkedin-paid | 5800854000000012141 | source `linkedin` and medium `paid`, `cpc` or `paid_social` |
| meta-paid | 5800854000000012150 | source `facebook`, `instagram`, `fb`, `ig` or `meta`, and medium in `PAID_MEDIA` |
| hubspot-email | 5800854000000012154 | source `hubspot`; or medium `email` with any source except `smartlead` |
| smartlead | 5800854000000012158 | source `smartlead` |
| organic-linkedin | 5800854000000012162 | source `linkedin` with any other medium (organic, social or none) |
| organic-x | 5800854000000012166 | source `x` or `twitter` |
| lp-direct (default) | 5800854000000012170 | no UTMs, or anything not listed above |

`PAID_MEDIA` is `paid`, `cpc`, `ppc`, `cpm`, `paid_social`, `paid-social`, `paidsocial`, `social_paid`, `paid_search`, `display`.

How the tracker is kept:

- On the first page load with UTMs, `utm_source` and `utm_medium` are saved in `sessionStorage` (key `tcsWebinarUtm`). A reload or an in-page "Register Free" link without UTMs keeps the saved tracker. A new address with UTMs replaces it.
- `sourcetrackingId` is set again just before the form posts.
- The HTML default is lp-direct (`5800854000000012170`), so a tracker is sent even if the script does not run. An empty `sourcetrackingId` is never sent.

Zoho stores the ID as the registrant's "Source Tracker" (Webinar Info > Registrants). The tracker names above are the values copied into HubSpot after the event, so keep them exactly as they are.

## Adding a tracker

1. Create the source tracker in Zoho Webinar for webinar 1027584812 and copy its ID.
2. Add an entry to `TRACKERS` in `assets/page.js`: `{ name, id, when: [ { source: [...], medium: [...] } ] }`. A clause matches when every condition it names matches (`source`, `medium`, `notSource`); the tracker matches when any of its clauses does. Put it above any broader entry that would otherwise catch it first (for example, a new LinkedIn medium goes above organic-linkedin).
3. Add test cases for it in `tests/page.test.js`, including its ID in the list of allowed IDs.
4. Run the tests (below).
5. Add the channel and its URL to the "UTM scheme and ad URLs" table above, and tell whoever copies Zoho sources into HubSpot about the new name.

Do not change or reuse an existing tracker's ID once registrations have started.

## Conversion events and the `CONVERSION_ON` switch

The pages push events to `window.dataLayer`; GTM decides which tags fire. No tag or pixel code is hard-coded in the pages.

| Event | Pushed when | Fields |
|---|---|---|
| `webinar_registration` | A valid registration (where depends on `CONVERSION_ON`) | `webinar_tracker` (tracker name), `page_language: 'en'` |
| `webinar_thank_you_view` | Every thank-you page view | `page_language: 'en'` |

`CONVERSION_ON` in `assets/page.js` has two settings:

- `'submit'` (the default until Zoho's redirect is tested). `returnURL` stays `https://webinar.zoho.com/postregister`, so Zoho shows its own confirmation page. On a valid submit the page disables the button, pushes `webinar_registration` with an `eventCallback` and `eventTimeout: 2000`, then posts the form once, either when GTM reports its tags have fired or after 2 seconds, whichever comes first. If GTM is blocked, the form still posts after 2 seconds.
- `'thank-you'`. `returnURL` is set to `https://lp.tasccorporateservices.com/saudization-webinar-2027/thank-you/` and the form posts straight away. The thank-you page pushes `webinar_registration` with the tracker saved in `sessionStorage`, once per session (key `tcsWebinarConverted`).

Switch to `'thank-you'` only after a live test registration shows Zoho redirecting to the thank-you page. The GTM trigger is the same custom event in both modes, so no GTM change is needed when you switch.

The GTM setup steps (LinkedIn conversion, Meta `Lead`, GA4) and the test registration log are kept with the campaign files, not in this public repo.

## Run the tests

From the repo root (Node 18 or later; no dependencies):

```bash
node --test "Saudization Webinar 2027/tests/page.test.js"
```

## Preview locally

Because asset URLs are absolute, serve the built site rather than opening the HTML file directly:

```bash
npm run build
python3 -m http.server --directory dist 8080
```

Then open `http://localhost:8080/saudization-webinar-2027/`. Do not submit the form from a local preview unless you mean to create a real Zoho registration.

## Share image

`assets/share-1200x630.jpg` is the share board from the approved design, rebuilt as static HTML (Google Fonts Montserrat and Inter, the local hero photo and white logo) and captured with headless Chrome at exactly 1200x630, then saved as JPG at about quality 85. To change it, edit the board, capture it again with `--headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=8000 --screenshot=<file>.png`, convert to JPG and keep the same file name and size. LinkedIn and Meta cache share images, so re-scrape the URL in their post inspector tools after a change.

## Copy still to confirm

Text in square brackets in the pages (host surnames, titles and bios, the 23 May date) is a deliberate placeholder. Leave it visible as normal text until it is confirmed.
