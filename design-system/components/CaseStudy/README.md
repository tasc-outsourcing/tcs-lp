Result headline, challenge-approach-result steps and a CTA beside a tall image.

**Figma source:** T03C-E GRO/PRO › Success Story (3290:163346)

## Rules

- Headline is the result as a number pair ("50 hires / 6 weeks") with the first half highlighted.
- Sub-heading in Montserrat SemiBold 20/30, one paragraph of context, then three steps in a bordered 16px-radius box: 32px yellow icon tile, 12/16 muted label, 16/24 value.
- One small primary button to the full story. Image is 558 × 600 with 24px radius.

## Markup

```html
<section class="lp-section">
  <div class="lp-container"><div class="lp-split lp-split--even">
    <div><h2 class="lp-title"><span class="lp-hl">50 hires</span> / 6 weeks</h2><p class="lp-case__sub">How we built a 50-strong maintenance team for a leading MRO</p><p class="lp-lead">When a regional maintenance provider needed to scale fast for a new contract, they needed vetted, licensed technicians — quickly, and to an exact nationality mix.</p>
      <div class="lp-case__steps"><div class="lp-case__step"><div class="lp-case__rail"><span class="lp-icon-tile lp-icon-tile--yellow"><span class="lp-icon lp-i-mountains" aria-hidden="true"></span></span></div><div><small>Challenge</small><p>50 licensed technicians in 6 weeks</p></div></div><div class="lp-case__step"><div class="lp-case__rail"><span class="lp-icon-tile lp-icon-tile--yellow"><span class="lp-icon lp-i-users-four" aria-hidden="true"></span></span></div><div><small>Approach</small><p>AI screening + regional network</p></div></div><div class="lp-case__step"><div class="lp-case__rail"><span class="lp-icon-tile lp-icon-tile--yellow"><span class="lp-icon lp-i-check" aria-hidden="true"></span></span></div><div><small>Result</small><p>50 placed, 100% retained</p></div></div></div>
      <div class="lp-actions" style="margin-top:32px"><a class="lp-btn lp-btn--sm" href="#">Read the case study</a></div></div>
    <div class="lp-media" style="aspect-ratio:558/600"><div class="lp-slot" style="height:100%">Image 558 × 600</div></div>
  </div></div>
</section>
```
