Dark section with a centred title, a wrapped row of five benefit cards and one yellow CTA.

**Figma source:** T19 › card dark bg with one KPI and CTA (4675:171764); card-dark-background (4675:171915)

## Rules

- `.lp-flexgrid` centres the last row, so five cards sit three over two as in the Figma file. Cards are 364px wide with 24px column and 16px row gaps.
- CTA is the yellow secondary button, centred, 20px under the cards.
- A second version puts a title, lead and yellow button on the left and a 558 × 452 image on the right, above the same card row (T19 "card-dark-background"). Build it with `.lp-split--even` above the `.lp-flexgrid`.

## Markup

```html
<section class="lp-section lp-section--dark">
  <span class="lp-glow lp-glow--dark"></span>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">Built on Rock Solid <span class="lp-hl">Foundations</span></h2><p class="lp-lead">The benefits of outsourcing your workforce to a partner built for speed, quality and compliance.</p></div>
    <div class="lp-flexgrid lp-body"><div class="lp-card lp-card--dark"><span class="lp-icon lp-i-currency-circle-dollar lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Reduced cost</h3><p class="lp-card__text">Lower the total cost of hiring and workforce management.</p></div><div class="lp-card lp-card--dark"><span class="lp-icon lp-i-lightning lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Fast hiring process</h3><p class="lp-card__text">The right candidate resumes in as little as 48 hours.</p></div><div class="lp-card lp-card--dark"><span class="lp-icon lp-i-user-circle lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Better talent quality</h3><p class="lp-card__text">Vetted candidates from a database of 900,000+.</p></div><div class="lp-card lp-card--dark"><span class="lp-icon lp-i-chart-line lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Analytics &amp; reporting</h3><p class="lp-card__text">Data-driven insight at every stage of the funnel.</p></div><div class="lp-card lp-card--dark"><span class="lp-icon lp-i-shield-check lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">100% compliance</h3><p class="lp-card__text">Fully compliant hiring across every market we operate in.</p></div></div>
    <div class="lp-actions lp-actions--center" style="margin-top:20px"><a class="lp-btn lp-btn--secondary" href="#form">Talk to our team</a></div>
  </div>
</section>
```
