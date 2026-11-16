The soft blue-green glow behind sections, made from the TASC A mark.

**Figma source:** Blurred gradient Vector layers on every section

## Rules

- Add one or two `span.lp-glow` elements as the first children of a section. The section must be `position: relative; overflow: hidden` (`.lp-section` already is).
- Light sections: default glow (20% opacity, 150px blur) or `.lp-glow--soft` (15%, 135px), placed off the right edge or behind the cards.
- Dark sections: one `.lp-glow--dark`, centred near the top. Every dark section in the Figma file has it.
- Decorative only. Never put text contrast at risk: the glow sits under content at `z-index: 0`.

## Markup

```html
<div class="lp-grid lp-grid--2">
  <div style="position:relative;overflow:hidden;height:260px;border-radius:16px;background:#fff;border:1px solid var(--border-primary)"><span class="lp-glow" style="inset-inline-end:-80px;top:-60px"></span><span class="lp-glow" style="inset-inline-start:20%;top:40px"></span></div>
  <div style="position:relative;overflow:hidden;height:260px;border-radius:16px;background:var(--gradient-dark)"><span class="lp-glow lp-glow--dark"></span></div>
</div>
```
