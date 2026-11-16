Dark band with a headline and four outcome cards.

**Figma source:** T19 › Case study and outcomes (4675:171665)

## Rules

- Sits directly under the hero as the first proof block.
- Dark gradient section with the centred dark glow; title centred in white with one highlighted word; four `.lp-stat` cards.
- Exactly four cards at desktop. They become 2 × 2 on tablets and stack on phones.

## Markup

```html
<section class="lp-section lp-section--dark">
  <span class="lp-glow lp-glow--dark"></span>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">World Class <span class="lp-hl">Staffing,</span> Delivered at Scale</h2></div>
    <div class="lp-grid lp-grid--4 lp-body">
      <div class="lp-stat lp-stat--hover"><span class="lp-stat__num">15+</span><span class="lp-stat__label">Years of Experience</span></div>
      <div class="lp-stat lp-stat--hover"><span class="lp-stat__num">5,500+</span><span class="lp-stat__label">Outsourced Associates</span></div>
      <div class="lp-stat lp-stat--hover"><span class="lp-stat__num">68+</span><span class="lp-stat__label">Countries of Operation</span></div>
      <div class="lp-stat lp-stat--hover"><span class="lp-stat__num">78+</span><span class="lp-stat__label">Nationalities Hired</span></div>
    </div>
  </div>
</section>
```
