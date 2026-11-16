A large number with a label: solid teal, glass over a photo, or dark KPI tiles.

**Figma source:** Cards (Outcomes, Hover); KPI card with BG image; card dark bg with one KPI

## Rules

- **Outcome card** (`.lp-stat`): teal, 320px tall, number 48/58 Bold at the top, label 24/32 SemiBold at the bottom, optional 16/24 line. `.lp-stat--hover` turns it yellow on hover.
- **Glass stat** (`.lp-stat--glass`): the same card over a photo band, 32px padding, dark text. See KpiImageBand.
- **KPI tile** (`.lp-kpi`): on dark sections, number 30/40 with a gradient label. See KpiCluster.
- Numbers must be sourced and current. Use the figures in the README's proof points, and write them as the site does: "5,500+", "74.7%", "3x".

## Markup

```html
<div class="lp-grid lp-grid--4">
  <div class="lp-stat lp-stat--hover"><span class="lp-stat__num">15+</span><span class="lp-stat__label">Years of Experience</span></div>
  <div class="lp-stat lp-stat--hover"><span class="lp-stat__num">5,500+</span><span class="lp-stat__label">Outsourced Associates</span></div>
  <div style="padding:16px;border-radius:16px;background:linear-gradient(160deg,#c9b8d4,#e7b089)"><div class="lp-stat lp-stat--glass" style="min-height:288px"><span class="lp-stat__num">3x</span><div><p class="lp-stat__label">Faster Hiring</p><p class="lp-stat__text">Cut sourcing and screening time dramatically.</p></div></div></div>
  <div style="display:grid;gap:16px;padding:16px;border-radius:16px;background:var(--gradient-dark)"><div class="lp-kpi"><span class="lp-kpi__num">78</span><span class="lp-kpi__label lp-hl">Net Promoter Score</span></div><div class="lp-kpi"><span class="lp-kpi__num">500+</span><span class="lp-kpi__label lp-hl">Clients Served</span></div></div>
</div>
```
