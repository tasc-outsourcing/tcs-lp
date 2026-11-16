Page header: a reduced campaign header for landing pages and the full site header for reference.

**Figma source:** Header component (Type=Primary)

## Rules

- **Campaign header (use this on landing pages):** logo left; phone, one yellow CTA that scrolls to the form, and the language switch on the right. No site navigation, so paid traffic has one path. This reduced version is a landing page adaptation; the Figma file only draws the full header.
- **Full header:** 80px tall, 20/40 padding, logo 36px high, Montserrat SemiBold 14/20 links in `text-secondary`. Use only when a campaign page lives inside the main site.
- The logo links to the main site home in a new tab on campaign pages, or not at all.
- TCS pages use the same TASC logo and header; TCS is named in the copy, not the logo.

## Markup

```html
<header class="lp-header" style="border-bottom:1px solid var(--border-primary)">
  <a class="lp-header__logo" href="#" aria-label="TASC"><img src="assets/Logos/tasc-logo.svg" alt="TASC" width="130" height="36"></a>
  <div class="lp-header__actions">
    <a class="lp-header__phone" href="tel:+97143588500"><span class="lp-icon lp-i-phone-fill lp-icon--brand" aria-hidden="true"></span><span>+971 4 358 8500</span></a>
    <a class="lp-btn lp-btn--sm lp-btn--secondary" href="#form">Request proposal</a>
    <a class="lp-lang" href="#" lang="ar">العربية</a>
  </div>
</header>
<header class="lp-header" style="margin-top:24px;border-bottom:1px solid var(--border-primary)">
  <div class="lp-header__start">
    <a class="lp-header__logo" href="#" aria-label="TASC"><img src="assets/Logos/tasc-logo.svg" alt="TASC" width="130" height="36"></a>
    <nav class="lp-header__nav"><a class="lp-header__link" href="#">What we do <span class="lp-icon lp-i-caret-down lp-icon--16" aria-hidden="true"></span></a><a class="lp-header__link" href="#">Who We Serve <span class="lp-icon lp-i-caret-down lp-icon--16" aria-hidden="true"></span></a><a class="lp-header__link" href="#">What We Think <span class="lp-icon lp-i-caret-down lp-icon--16" aria-hidden="true"></span></a><a class="lp-header__link" href="#">Who We Are <span class="lp-icon lp-i-caret-down lp-icon--16" aria-hidden="true"></span></a></nav>
  </div>
  <div class="lp-header__actions"><a class="lp-btn lp-btn--sm lp-btn--secondary" href="#">Request proposal</a><a class="lp-lang" href="#">UAE / AR <span class="lp-icon lp-i-caret-down-fill lp-icon--16" aria-hidden="true"></span></a></div>
</header>
```
