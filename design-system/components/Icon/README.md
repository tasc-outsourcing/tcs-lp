Phosphor icons as CSS masks, in solid, gradient and tile treatments.

**Figma source:** Phosphor icon components (UsersFour, CheckCircle, ...)

## Rules

- The site uses the Phosphor icon set, Regular weight for content icons and Fill for check marks, phone, mail and social logos.
- Markup: `<span class="lp-icon lp-i-users-four" aria-hidden="true"></span>`. The icon takes `currentColor`. Add `lp-icon--grad` for the brand gradient or `lp-icon--brand` for teal.
- Sizes: 16 (checklists), 20 (inline, default), 24 (inside tiles), 32 (card icons), 64 (thank you tick).
- Card icons are always 32px with the gradient. Step cards use the 44px gradient tile with a white 24px icon. Case study steps use the 32px yellow tile.
- `bundle.css` ships the icons used in the Figma landing page and thank you templates. To add one, copy the SVG from phosphoricons.com into a new `.lp-i-<name>` rule.

## Markup

```html
<div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center">
  <span class="lp-icon lp-i-users-four lp-icon--32 lp-icon--grad" aria-hidden="true"></span><span class="lp-icon lp-i-user-check lp-icon--32 lp-icon--grad" aria-hidden="true"></span><span class="lp-icon lp-i-credit-card lp-icon--32 lp-icon--grad" aria-hidden="true"></span><span class="lp-icon lp-i-currency-circle-dollar lp-icon--32 lp-icon--grad" aria-hidden="true"></span><span class="lp-icon lp-i-lightning lp-icon--32 lp-icon--grad" aria-hidden="true"></span><span class="lp-icon lp-i-shield-check lp-icon--32 lp-icon--grad" aria-hidden="true"></span><span class="lp-icon lp-i-chart-line-up lp-icon--32 lp-icon--grad" aria-hidden="true"></span>
  <span class="lp-icon-tile"><span class="lp-icon lp-i-buildings" aria-hidden="true"></span></span>
  <span class="lp-icon-tile lp-icon-tile--yellow"><span class="lp-icon lp-i-mountains" aria-hidden="true"></span></span>
  <span class="lp-icon lp-i-check-circle-fill lp-icon--16 lp-icon--grad" aria-hidden="true"></span>
  <span class="lp-icon lp-i-envelope-simple lp-icon--brand" aria-hidden="true"></span><span class="lp-icon lp-i-paper-plane-tilt lp-icon--brand" aria-hidden="true"></span><span class="lp-icon lp-i-calendar-dots lp-icon--brand" aria-hidden="true"></span>
  <span class="lp-icon lp-i-check-circle-fill lp-icon--64 lp-icon--grad" aria-hidden="true"></span>
</div>
```
