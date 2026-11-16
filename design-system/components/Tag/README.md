Small labels: glass tags on imagery, light tags on white, and the uppercase eyebrow.

**Figma source:** Industries panel tags; Blog card meta

## Rules

- `.lp-tag` is the glass tag for use over photos and dark panels (white text, 30% white fill, 10px backdrop blur).
- `.lp-tag--light` is for white and grey backgrounds.
- `.lp-eyebrow` is Inter Medium 12/16 uppercase in `text-tertiary`, used for article meta and category labels.

## Markup

```html
<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:center">
  <div class="lp-tags" style="padding:24px;border-radius:16px;background:var(--gradient-dark)"><span class="lp-tag">Oil &amp; Gas</span><span class="lp-tag">Nuclear</span><span class="lp-tag">Grid Infrastructure</span></div>
  <div class="lp-tags"><span class="lp-tag lp-tag--light">Free Zone</span><span class="lp-tag lp-tag--light">Mainland</span></div>
  <span class="lp-eyebrow">Article | July 4, 2026</span>
</div>
```
