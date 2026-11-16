Small label-over-value card for key facts and contact details.

**Figma source:** T20 › CTA card for key information; KPI box smaller

## Rules

- `.lp-info`: glass card, 20px padding, centred. Label in Inter Medium 12/16 teal, value in Montserrat SemiBold 14/20.
- `.lp-info--dark`: for dark sections; the label turns `text-brand-secondary` (gold) and the value white. Used for the contact strip on thank you pages and above the footer form.
- Three or four in a row. Values are facts, not sentences.

## Markup

```html
<div class="lp-grid lp-grid--2">
  <div style="padding:24px;border-radius:16px;background:linear-gradient(160deg,#dfe9ee,#f5e6cf)"><div class="lp-grid lp-grid--2"><div class="lp-info"><span class="lp-info__label">Format</span><span class="lp-info__value">PDF guide</span></div><div class="lp-info"><span class="lp-info__label">Length</span><span class="lp-info__value">48 pages</span></div></div></div>
  <div style="position:relative;overflow:hidden;padding:24px;border-radius:16px;background:var(--gradient-dark)"><div class="lp-grid lp-grid--2" style="position:relative"><div class="lp-info lp-info--dark"><span class="lp-info__label">Phone</span><span class="lp-info__value">+971 4 358 8500</span></div><div class="lp-info lp-info--dark"><span class="lp-info__label">Response Time</span><span class="lp-info__value">Within 24 hours</span></div></div></div>
</div>
```
