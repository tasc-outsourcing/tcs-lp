One hero metric beside a 2 × 2 grid of supporting metrics, on dark.

**Figma source:** T19 › card dark bg with one KPI (4675:171976)

## Rules

- Feature tile (364 wide, 300 tall, solid `#121d21`) with a blurred pattern of A marks behind a 48/58 number; four `.lp-kpi` tiles in a 2 × 2 grid with 20px gaps.
- Labels use the gradient text (`.lp-hl`). Number first, label second in every tile.
- A closing proof block: place it last before the footer form.

## Markup

```html
<section class="lp-section lp-section--dark">
  <span class="lp-glow lp-glow--dark"></span>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">Client <span class="lp-hl">Satisfaction,</span> at a glance</h2><p class="lp-lead">Measured across active client accounts in the UAE and Saudi Arabia.</p></div>
    <div class="lp-kpi-cluster lp-body">
      <div class="lp-kpi lp-kpi--feature"><div class="lp-pattern" style="width:100%;opacity:.3;filter:blur(20px)"><i style="left:55%;top:53%;width:162px;height:140px;background:var(--bg-brand-secondary);transform:rotate(180deg)"></i><i style="left:16%;top:18%;width:82px;height:71px;background:var(--bg-brand-secondary)"></i><i style="left:55%;top:22%;width:68px;height:59px;background:var(--bg-brand)"></i><i style="left:0;top:65%;width:80px;height:69px;background:var(--bg-brand);transform:rotate(180deg)"></i></div><span class="lp-kpi__num" style="position:relative">74.7%</span><span class="lp-kpi__label lp-hl" style="position:relative">Client Success</span></div>
      <div class="lp-kpi-cluster__grid"><div class="lp-kpi"><span class="lp-kpi__num">78</span><span class="lp-kpi__label lp-hl">Net Promoter Score</span></div><div class="lp-kpi"><span class="lp-kpi__num">500+</span><span class="lp-kpi__label lp-hl">Clients Served</span></div><div class="lp-kpi"><span class="lp-kpi__num">5500+</span><span class="lp-kpi__label lp-hl">Associates outsourced</span></div><div class="lp-kpi"><span class="lp-kpi__num">68+</span><span class="lp-kpi__label lp-hl">Countries</span></div></div>
    </div>
  </div>
</section>
```
