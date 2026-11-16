Buttons in four fills, four sizes, plus text links.

**Figma source:** Buttons component set (132 variants)

## Rules

- **Primary** (`.lp-btn`, teal `#005f83`): the form submit and the main action on light backgrounds.
- **Secondary** (`.lp-btn--secondary`, yellow `#ffd100`): the main action on dark sections and image heroes, and the header "Request Proposal". One yellow button per viewport.
- **Tertiary** (`.lp-btn--tertiary`, light blue; Figma calls it "Outline"): the second action beside a primary, "View all", "20+ more industries".
- **Outline on dark** (`.lp-btn--outline-dark`): second action on dark sections only.
- Sizes: `--lg` 60px, default 48px (forms and heroes), `--sm` 40px (inside sections and cards), `--xs` 32px (inside small cards).
- Labels are Montserrat SemiBold, Title Case via `text-transform: capitalize`. Two to four words, starting with a verb.
- Hover values come from the Figma variants: primary `#005673`, secondary `#e6bc00`, tertiary fills teal with white text.

## Markup

```html
<div style="display:grid;gap:24px">
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center">
    <button class="lp-btn">Send enquiry</button>
    <button class="lp-btn lp-btn--secondary">Talk to our team</button>
    <button class="lp-btn lp-btn--tertiary">Reschedule or cancel</button>
    <button class="lp-btn" disabled>Disabled</button>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center">
    <button class="lp-btn lp-btn--lg">Add to calendar</button>
    <button class="lp-btn">Medium 48</button>
    <button class="lp-btn lp-btn--sm">Small 40</button>
    <button class="lp-btn lp-btn--xs">X-small 32</button>
    <button class="lp-btn lp-btn--sm lp-btn--secondary">Request a proposal <span class="lp-icon lp-i-arrow-right lp-icon--16 lp-icon--flip" aria-hidden="true"></span></button>
    <a class="lp-link" href="#">Resend confirmation</a>
    <a class="lp-link lp-link--dark" href="#">Text link dark</a>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;padding:24px;border-radius:16px;background:var(--gradient-dark)">
    <button class="lp-btn lp-btn--sm lp-btn--secondary">Estimate my setup</button>
    <button class="lp-btn lp-btn--sm lp-btn--outline-dark">Talk to us about PEO</button>
    <a class="lp-link lp-link--white" href="#">See our sector reports <span class="lp-icon lp-i-caret-right lp-icon--16 lp-icon--flip" aria-hidden="true"></span></a>
  </div>
</div>
```
