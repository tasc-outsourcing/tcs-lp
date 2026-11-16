Full-bleed half image with a title over it, beside a numbered list or an accordion.

**Figma source:** T20 › Container:margin / What's inside (4241:128037); GRO › Image and accordion (4661:145660)

## Rules

- Edge to edge, two halves, 640px minimum height. The image half has 32px radius on its inner corners and a teal fade from the top so the white 48/58 title reads. Add the photo as an `<img>` first child of `.lp-panel-split__media`.
- Right half: 64/48 padding with either `.lp-numlist` (Inter 16/24 rows, 14px vertical padding, hairline dividers, two-digit numbers) or a stack of `.lp-accordion--filled` items (see Accordion).
- Good for "what's inside" on gated content and "what's included" on service pages.

## Markup

```html
<section class="lp-panel-split">
  <div class="lp-panel-split__media"><div class="lp-slot" style="position:absolute;inset:0;z-index:0;align-items:flex-end;padding:24px">Photo 720 × 640</div><h2 class="lp-title">What's inside</h2><p>Six chapters, built for the hiring decisions you're about to make.</p></div>
  <div class="lp-panel-split__body">
    <p class="lp-numlist__title">Six Chapters</p>
    <ol class="lp-numlist"><li><span>01</span><span>Salary bands for 140 roles, UAE and KSA</span></li><li><span>02</span><span>What moved in the last 12 months, and why</span></li><li><span>03</span><span>Allowances, gratuity and total cost of employment</span></li><li><span>04</span><span>Emiratisation and Saudisation quotas, costed</span></li><li><span>05</span><span>Notice periods and counter-offer patterns</span></li><li><span>06</span><span>How to build an offer that gets accepted</span></li></ol>
  </div>
</section>
```
