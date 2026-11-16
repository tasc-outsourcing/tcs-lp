Dark two-option comparison with a highlighted column and a CTA under each.

**Figma source:** T04B Business Setup KSA › Table Own vs TASC (3093:26357)

## Rules

- Three columns in a 267 : 364 : 364 ratio: row labels, the highlighted option (2px gradient border, 24px radius, taller than its neighbours), and the alternative.
- Column header: Montserrat SemiBold 20/30 with a 14/20 muted line. Rows are 56px, Inter 16/24, centred. Five or six rows.
- The highlighted column gets the yellow button; the other gets outline-on-dark.
- Each value row carries `data-label` so the label shows above the value when the columns stack on phones.
- Mostly a TCS pattern (own entity vs PEO, mainland vs free zone).

## Markup

```html
<section class="lp-section lp-section--dark">
  <span class="lp-glow lp-glow--dark"></span>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">Own entity <span class="lp-hl">VS</span> TASC PEO / EOR</h2><p class="lp-lead">Hire and operate in Saudi Arabia in days — without setting up a legal entity — then convert to your own when the time is right.</p></div>
    <div class="lp-compare">
      <div class="lp-compare__col lp-compare__col--labels"><div class="lp-compare__row">Setup time</div><div class="lp-compare__row">Time to first hire</div><div class="lp-compare__row">Upfront cost</div><div class="lp-compare__row">Compliance</div><div class="lp-compare__row">Best for</div></div>
      <div class="lp-compare__col lp-compare__col--featured"><div class="lp-compare__head"><b>Set up your own entity</b><span>Full control, higher upfront investment</span></div><div class="lp-compare__rows"><div class="lp-compare__row" data-label="Setup time">4–6 months</div><div class="lp-compare__row" data-label="Time to first hire">4–6 weeks</div><div class="lp-compare__row" data-label="Upfront cost">High</div><div class="lp-compare__row" data-label="Compliance">You manage</div><div class="lp-compare__row" data-label="Best for">Long-term, at-scale presence</div></div><div class="lp-compare__cta"><a class="lp-btn lp-btn--sm lp-btn--secondary lp-btn--block" href="#">Estimate my setup</a></div></div>
      <div class="lp-compare__col lp-compare__col--last"><div class="lp-compare__head"><b>TASC PEO / EOR</b><span>Hire now, no local entity needed</span></div><div class="lp-compare__rows"><div class="lp-compare__row" data-label="Setup time">Days</div><div class="lp-compare__row" data-label="Time to first hire">~48 hours</div><div class="lp-compare__row" data-label="Upfront cost">Low, per-employee</div><div class="lp-compare__row" data-label="Compliance">TASC manages</div><div class="lp-compare__row" data-label="Best for">Fast market entry &amp; testing</div></div><div class="lp-compare__cta"><a class="lp-btn lp-btn--sm lp-btn--outline-dark lp-btn--block" href="#">Talk to us about PEO</a></div></div>
    </div>
    <p style="margin-top:24px;text-align:center;font-family:var(--font-heading);font-weight:600;font-size:14px;line-height:20px;color:var(--text-placeholder)">Not sure which fits your sector? <a class="lp-link lp-link--white" href="#" style="margin-inline-start:12px">See our sector reports <span class="lp-icon lp-i-caret-right lp-icon--16 lp-icon--flip" aria-hidden="true"></span></a></p>
  </div>
</section>
```
