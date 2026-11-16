The white form card that sits in the hero or above the footer, wrapping a HubSpot form.

**Figma source:** Form component (hero 517px, footer 680px)

## Rules

- Card: white, 16px radius, shadow `0 12px 30px rgba(0,0,0,.08)`. 517px wide in a hero, 680px (`.lp-form--wide`, two-column fields) above the footer.
- Header: title in Montserrat SemiBold 24/32, optional one-line description. State the outcome ("Get your free consultation"), not "Contact us".
- **HubSpot:** forms are HubSpot forms, embedded as raw HTML (not the iframe) with HubSpot's default styling switched off. Put the embed target inside `.lp-form__body`. `bundle.css` restyles `.hs-form`, `.hs-input`, `.hs-button` and `.hs-error-msgs` inside `.lp-form` to match these fields.
- Hero forms keep to four fields. The longer eight-field version belongs above the footer.
- Submit is one full-width primary button. On submit, redirect to the matching thank you page (see Thank you pages).

## Markup

```html
<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-start;padding:32px;border-radius:16px;background:var(--bg-surface-secondary)">
<form class="lp-form">
  <div class="lp-form__head"><h2 class="lp-form__title">Work with the top recruitment agency in the UAE</h2></div>
  <div class="lp-form__body">
    <div class="lp-field"><label class="lp-label" for="a1">Full name<span class="lp-req">*</span></label><input class="lp-input" id="a1" placeholder="Full Name"></div>
    <div class="lp-field"><label class="lp-label" for="a2">Your Email<span class="lp-req">*</span></label><input class="lp-input" id="a2" type="email" placeholder="you@company.com"></div>
    <div class="lp-field"><label class="lp-label" for="a3">Phone Number<span class="lp-req">*</span></label><div class="lp-phone"><select class="lp-select" aria-label="Country code"><option>+971</option><option>+966</option></select><input class="lp-input" id="a3" type="tel" placeholder="50 123 4567"></div></div>
    <div class="lp-field"><label class="lp-label" for="a4">What do you need?<span class="lp-req">*</span></label><select class="lp-select" id="a4" required><option value="">Select what do you need?</option><option>Contract staffing</option></select></div>
  </div>
  <div class="lp-form__foot"><button class="lp-btn lp-btn--block" type="submit">Send enquiry</button></div>
</form>
<div class="lp-form" style="flex:1;min-width:280px">
  <div class="lp-form__head"><h2 class="lp-form__title">Get Your Free Consultation</h2><p class="lp-form__desc">Tell us about your staffing needs and we will get back to you within 24 hours.</p></div>
  <div class="lp-form__body"><div class="lp-slot" style="min-height:260px;border-radius:12px">HubSpot form embed renders here</div></div>
</div>
</div>
```
