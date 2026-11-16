Two call-to-action blocks: a slim dark strip and a large rounded banner.

**Figma source:** T19 › Tabbing › Container (strip); T20 › CTA (4241:128162)

## Rules

- **Strip** (`.lp-cta-strip`): dark gradient, 16px radius, 24px padding; title 20/30 white, one line of 14/20 text, and one small yellow button on the right. Use at the end of a section to catch people who did not find their case.
- **Banner** (`.lp-cta-banner`): dark gradient, 32px radius, 80px padding; 48/58 white title, one sentence, yellow and teal small buttons; a blurred pattern of A marks on the right (`.lp-pattern`).
- Both always sit on white or grey, never inside a dark section.
- Repeat the page's one goal. Button labels match the hero and form.

## Markup

```html
<div class="lp-cta-strip"><span class="lp-glow" style="width:323px;height:280px;filter:blur(40px);inset-inline-end:-30px;top:-99px"></span><div><p class="lp-cta-strip__title">Ahead of expiry - every renewal flagged before it lapses, not after.</p><p class="lp-cta-strip__text">The calendar runs on the deadline that matters to MoHRE and GDRFA.</p></div><a class="lp-btn lp-btn--sm lp-btn--secondary" href="#form">Talk to our team</a></div>
<div class="lp-cta-banner" style="margin-top:32px">
  <div class="lp-pattern"><i style="left:52%;top:8%;width:120px;height:104px;background:var(--bg-brand-secondary)"></i><i style="left:20%;top:34%;width:150px;height:130px;background:var(--bg-brand);transform:rotate(180deg)"></i><i style="left:58%;top:50%;width:220px;height:190px;background:var(--bg-brand-secondary);transform:rotate(180deg)"></i><i style="left:8%;top:70%;width:90px;height:78px;background:var(--gradient-brand)"></i></div>
  <div><h2 class="lp-title">Two Channel, One Goal.</h2><p class="lp-cta-banner__text">A single goal, reachable by two channels — repeated at every decision point on this page.</p><div class="lp-cta-banner__actions"><a class="lp-btn lp-btn--sm lp-btn--secondary" href="#">Talk to setup expert</a><a class="lp-btn lp-btn--sm" href="#">Book meeting</a></div></div>
</div>
```
