Centred heading with a single row of award or client logos that fades at the edges.

**Figma source:** T19 › Awards (4675:171730)

## Rules

- Logo slots are 130 × 88 with logos up to 110px wide and 80px tall, 20px apart, centred. The row is full-bleed and masked at both edges.
- Use greyscale or single-colour logo files so the row reads as one band. Awards first on recruitment pages; client logos (`.lp-logos--clients`, 40px tall, 56px apart) on trust bands.
- Only show logos TASC has permission to use.

## Markup

```html
<section class="lp-section lp-section--soft">
  <div class="lp-container"><div class="lp-head"><h2 class="lp-title"><span class="lp-hl">Recognition</span> That Backs up the Claim</h2><p class="lp-lead">Recognised by leading industry bodies for excellence in staffing, compliance, and service quality across the Gulf.</p></div></div>
  <div class="lp-logos"><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:110px;min-height:56px;border-radius:8px">Logo</div></div></div>
</section>
```
