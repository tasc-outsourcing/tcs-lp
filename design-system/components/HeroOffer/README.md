Offer hero: headline and two buttons on white, with a framed image and floating stat chips.

**Figma source:** T20 › Hero section (4241:126614); same hero on T04B, T03C-E, T14A-A

## Rules

- Use for gated downloads, service pages and TCS pages (business setup, PRO, GRO) where the form sits lower on the page.
- White background with two glows. Headline in `text-primary`, paragraph in `text-secondary`.
- Two small buttons: yellow for the conversation, teal for the offer.
- Media: a 351 × 490 panel with 32px radius, plus up to three stat chips (yellow, teal, white) with a 32px number and a two-line label. Chips must carry real figures.

## Markup

```html
<section class="lp-hero">
  <span class="lp-glow" style="inset-inline-start:35%;top:71px"></span><span class="lp-glow" style="inset-inline-end:-80px;top:-119px"></span>
  <div>
    <nav aria-label="Breadcrumb"><ol class="lp-breadcrumbs"><li><a href="#">Home</a></li><li><a href="#">Offers</a></li><li aria-current="page">The 2026 GCC Salary &amp; Hiring Guide</li></ol></nav>
    <h1 class="lp-hero__title">The 2026 GCC Salary &amp; Hiring Guide</h1>
    <p class="lp-hero__text">Benchmarked pay ranges for 140 roles across the UAE and Saudi Arabia — with the notice periods, allowances and Emiratisation costs that global salary data leaves out.</p>
    <div class="lp-actions"><a class="lp-btn lp-btn--sm lp-btn--secondary" href="#">Talk to our team</a><a class="lp-btn lp-btn--sm" href="#">Download PDF</a></div>
  </div>
  <div class="lp-hero-media">
    <div class="lp-hero-media__panel"><div class="lp-slot" style="height:100%;background:var(--bg-brand);color:#fff">Cover image 351 × 490</div></div>
    <div class="lp-chip-stat lp-chip-stat--yellow" style="inset-inline-start:0;top:60px"><b>200+</b><span>Team in Saudi Arabia</span></div>
    <div class="lp-chip-stat lp-chip-stat--brand" style="inset-inline-end:0;top:100px"><b>3</b><span>Offices in KSA</span></div>
    <div class="lp-chip-stat" style="inset-inline-end:10px;bottom:40px"><b>150+</b><span>Clients served</span></div>
  </div>
</section>
```
