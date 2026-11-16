Blog or resource card with image, date line, title and excerpt.

**Figma source:** Cards (Blog & News, Hover); Market Intelligence section

## Rules

- `.lp-article`: grey card, 8px padding around a 12px-radius image, then meta, title (20/30, two lines max) and excerpt (14/20, two lines max).
- `.lp-article--row`: horizontal version with a 200px image. The standard layout is one large card with three row cards beside it.
- Hover turns the card yellow.
- On thank you pages this is the "keep reading" block. On campaign pages use it only below the fold, after the last CTA.

## Markup

```html
<div class="lp-grid lp-grid--2">
  <a class="lp-article" href="#"><div class="lp-article__img"><div class="lp-slot" style="height:100%">Image 542 × 352</div></div><div class="lp-article__body"><span class="lp-eyebrow">Article | July 4, 2026</span><div><h3 class="lp-article__title">6 Ways AI Copilots Are Changing Recruiter Workflows</h3><p class="lp-article__text">AI copilots are quietly taking over first-pass screening and scheduling — freeing recruiters to focus on judgment calls that still need a human.</p></div></div></a>
  <div style="display:grid;gap:24px;align-content:start">
    <a class="lp-article lp-article--row" href="#"><div class="lp-article__img"><div class="lp-slot" style="height:100%">200 × 136</div></div><div class="lp-article__body"><span class="lp-eyebrow">Article | July 4, 2026</span><div><h3 class="lp-article__title">Call centre recruitment in UAE</h3><p class="lp-article__text">AI copilots are quietly taking over first-pass screening and scheduling.</p></div></div></a>
    <a class="lp-article lp-article--row" href="#" style="background:var(--bg-brand-secondary)"><div class="lp-article__img"><div class="lp-slot" style="height:100%">200 × 136</div></div><div class="lp-article__body"><span class="lp-eyebrow" style="color:var(--input-text-placeholder)">Article | July 4, 2026</span><div><h3 class="lp-article__title">Hover state shown</h3><p class="lp-article__text" style="color:var(--text-on-yellow)">The whole card turns yellow on hover.</p></div></div></a>
  </div>
</div>
```
