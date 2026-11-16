Centred title and lead above a row of step cards, with an optional CTA.

**Figma source:** T19 › Case study and outcomes / steps (4675:171817); T17 › Steps

## Rules

- Four steps on campaign pages (`.lp-grid--4`), three on thank you pages (`.lp-grid--3`).
- White background; the step cards carry their own tint and glows.
- The CTA under the steps is the teal primary on white.

## Markup

```html
<section class="lp-section">
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">How <span class="lp-hl">TASC</span> Helps</h2><p class="lp-lead">TASC provides customized support for businesses in Saudi Arabia, making workforce management easier.</p></div>
    <div class="lp-grid lp-grid--4 lp-body">
      <div class="lp-step"><span class="lp-step__label">Step 1</span><span class="lp-icon-tile"><span class="lp-icon lp-i-buildings" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Understand needs</h3><p class="lp-step__text">We understand your business goals, workforce needs, and local requirements.</p></div></div>
      <div class="lp-step"><span class="lp-step__label">Step 2</span><span class="lp-icon-tile"><span class="lp-icon lp-i-user-check" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Recommend the right solution</h3><p class="lp-step__text">We recommend the right staffing, HR, or business solution.</p></div></div>
      <div class="lp-step"><span class="lp-step__label">Step 3</span><span class="lp-icon-tile"><span class="lp-icon lp-i-shield-check" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Handle the setup</h3><p class="lp-step__text">We manage hiring, documentation, licensing and compliance.</p></div></div>
      <div class="lp-step"><span class="lp-step__label">Step 4</span><span class="lp-icon-tile"><span class="lp-icon lp-i-chart-line-up" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Manage &amp; scale</h3><p class="lp-step__text">We provide ongoing support as your business grows.</p></div></div>
    </div>
    <div class="lp-actions lp-actions--center" style="margin-top:20px"><a class="lp-btn" href="#form">Talk to our team</a></div>
  </div>
</section>
```
