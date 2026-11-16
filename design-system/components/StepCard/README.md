Numbered step with a gradient icon tile, title and text.

**Figma source:** Step Card component

## Rules

- `.lp-step`: 60% grey glass card with its own two soft glows, 24px padding, 32px between label, tile and text.
- "Step 1" label in Montserrat Medium 12/16, a 44px gradient tile with a white 24px icon, title 20/30, text 14/20.
- Three or four steps in a row. Titles start with a verb or name the actor ("We confirm receipt by email").
- Thank you pages use three steps to say what happens next.

## Markup

```html
<div class="lp-grid lp-grid--4">
  <div class="lp-step"><span class="lp-step__label">Step 1</span><span class="lp-icon-tile"><span class="lp-icon lp-i-buildings" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Understand needs</h3><p class="lp-step__text">We understand your business goals, workforce needs, and local requirements to identify the right approach.</p></div></div>
  <div class="lp-step"><span class="lp-step__label">Step 2</span><span class="lp-icon-tile"><span class="lp-icon lp-i-user-check" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Recommend the right solution</h3><p class="lp-step__text">We recommend the right staffing, HR, or business solution.</p></div></div>
  <div class="lp-step"><span class="lp-step__label">Step 3</span><span class="lp-icon-tile"><span class="lp-icon lp-i-shield-check" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Handle the setup</h3><p class="lp-step__text">We manage the hiring, documentation, licensing, and compliance requirements.</p></div></div>
  <div class="lp-step"><span class="lp-step__label">Step 4</span><span class="lp-icon-tile"><span class="lp-icon lp-i-chart-line-up" aria-hidden="true"></span></span><div><h3 class="lp-step__title">Manage &amp; scale</h3><p class="lp-step__text">We provide ongoing support and help you adapt as your business grows.</p></div></div>
</div>
```
