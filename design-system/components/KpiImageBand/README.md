Four glass stat cards over a softly blurred photo.

**Figma source:** T19 › KPI card with BG image (4675:171782)

## Rules

- Background photo fills the section; `.lp-section__bg` lays a white-to-clear wash and a 10px blur over it so the dark title stays readable at the top.
- Cards are `.lp-stat--glass`: 32px padding, number 48/58, label 24/32, one 16/24 line.
- Choose a photo that is light in its top third (sky, haze). If the title fails contrast against your photo, switch to the StatsBand pattern.

## Markup

```html
<section class="lp-section lp-section--image">
  <div class="lp-section__bg"><div class="lp-slot" style="height:100%;background:linear-gradient(180deg,#b9b0c8,#d9a98c 60%,#7a4a3e)"></div></div>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">What you get with TASC</h2><p class="lp-lead">Empowering industries with intelligent workforce solutions that drive tomorrow's innovations.</p></div>
    <div class="lp-grid lp-grid--4 lp-body">
      <div class="lp-stat lp-stat--glass"><span class="lp-stat__num">3x</span><div><p class="lp-stat__label">Faster Hiring</p><p class="lp-stat__text">Cut sourcing and screening time dramatically.</p></div></div>
      <div class="lp-stat lp-stat--glass"><span class="lp-stat__num">100%</span><div><p class="lp-stat__label">Compliance</p><p class="lp-stat__text">Aligned with UAE labour regulations, always.</p></div></div>
      <div class="lp-stat lp-stat--glass"><span class="lp-stat__num">22%</span><div><p class="lp-stat__label">Lower Costs</p><p class="lp-stat__text">Reduced recruitment overhead vs. in-house.</p></div></div>
      <div class="lp-stat lp-stat--glass"><span class="lp-stat__num">78+</span><div><p class="lp-stat__label">Talent Pool</p><p class="lp-stat__text">Nationalities in the active candidate database.</p></div></div>
    </div>
  </div>
</section>
```
