Dark footer: a compact version for landing pages and the full site footer.

**Figma source:** Footer component

## Rules

- **Compact footer (default for landing pages):** white logo, social buttons, copyright and the four legal links. Nothing that leads away from the conversion.
- **Full footer:** the 72/86 "Transform Your Business with TASC" headline, intro line, office grid (the highlighted office uses `text-brand-secondary`) and, on the main site, five link columns. Use it on thank you pages, where sending people onward is the point.
- Background is `bg-surface-dark` `#121d21`; dividers are `border-dark` `#1f2c31`. Social buttons are 40px tiles that turn yellow on hover.
- Legal links must point at the live tascoutsourcing.com policies.

## Markup

```html
<footer class="lp-footer lp-footer--compact">
  <div class="lp-container">
    <div class="lp-footer__top">
      <img class="lp-footer__logo" src="assets/Logos/tasc-logo-white.svg" alt="TASC" width="130" height="36">
      <div class="lp-footer__social"><a class="lp-social" href="#" aria-label="Facebook"><span class="lp-icon lp-i-facebook-logo-fill lp-icon--16" aria-hidden="true"></span></a><a class="lp-social" href="#" aria-label="X"><span class="lp-icon lp-i-x-logo-fill lp-icon--16" aria-hidden="true"></span></a><a class="lp-social" href="#" aria-label="YouTube"><span class="lp-icon lp-i-youtube-logo-fill lp-icon--16" aria-hidden="true"></span></a><a class="lp-social" href="#" aria-label="Instagram"><span class="lp-icon lp-i-instagram-logo-fill lp-icon--16" aria-hidden="true"></span></a><a class="lp-social" href="#" aria-label="LinkedIn"><span class="lp-icon lp-i-linkedin-logo-fill lp-icon--16" aria-hidden="true"></span></a></div>
    </div>
    <div class="lp-footer__bar lp-footer__legal"><span>© Copyright 2026 TASC Outsourcing. All rights reserved.</span><nav><a href="#">Terms of Use</a><a href="#">Privacy Policy</a><a href="#">Disclaimer</a><a href="#">Fraud &amp; Scam Alert</a></nav></div>
  </div>
</footer>
<footer class="lp-footer" style="margin-top:24px">
  <div class="lp-container">
    <p class="lp-footer__headline">Transform Your Business with <img class="lp-footer__logo" src="assets/Logos/tasc-logo-white.svg" alt="TASC" width="130" height="36"></p>
    <p class="lp-footer__intro">The UAE and Saudi Arabia's leading workforce, talent, and market entry solutions provider.</p>
    <div class="lp-footer__offices">
      <div class="lp-office"><p class="lp-office__name">Riyadh</p><p class="lp-office__addr">Top Talent Consulting Ltd., Building 1, Office No. 4, 1st Floor Salahuddin Al Ayoubi Street, Riyadh, Saudi Arabia</p><a class="lp-office__link" href="#"><span class="lp-icon lp-i-phone-fill" aria-hidden="true"></span> +966 55 397 0703</a></div>
      <div class="lp-office lp-office--hq"><p class="lp-office__name">Kafd</p><p class="lp-office__addr">Level 7, Building 407, Zone 4, King Abdullah Financial District, Riyadh, 13511, Saudi Arabia</p><a class="lp-office__link" href="#"><span class="lp-icon lp-i-envelope-simple-fill" aria-hidden="true"></span> info@tascoutsourcing.com</a></div>
      <div class="lp-office"><p class="lp-office__name">Dubai HQ</p><p class="lp-office__addr">2403, Nassima Tower, Sheikh Zayed Road, Dubai, UAE, P.O. Box: 117495</p><a class="lp-office__link" href="#"><span class="lp-icon lp-i-phone-fill" aria-hidden="true"></span> +971 4 358 8500</a></div>
    </div>
    <div class="lp-footer__bar lp-footer__legal"><span>© Copyright 2026 TASC Outsourcing. All rights reserved.</span><nav><a href="#">Terms of Use</a><a href="#">Privacy Policy</a></nav></div>
  </div>
</footer>
```
