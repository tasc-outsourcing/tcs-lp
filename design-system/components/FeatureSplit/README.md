Title, text and CTA on the left with a 2 × 2 grid of solution cards on the right, optionally under a wide image.

**Figma source:** T19 › Title and Cards - side by side with image (4675:171678) and white bg (4675:171945)

## Rules

- Two columns in a 461 : 655 ratio (`.lp-split`), 24px apart. Left: title, lead, one primary button. Right: two columns of light solution cards.
- Optional wide image above (1140 × 490, 32px radius). Drop it for the "Why TASC?" version and add a `.lp-checklist` under the lead instead.
- Background `bg-surface-secondary` with one soft glow behind the cards, which is what makes the glass cards visible.

## Markup

```html
<section class="lp-section lp-section--soft">
  <span class="lp-glow lp-glow--soft" style="inset-inline-end:-150px;top:10px;width:1145px;height:991px"></span>
  <div class="lp-container">
    <div class="lp-media lp-media--hero" style="height:300px;margin-bottom:40px"><div class="lp-slot" style="height:100%">Wide image 1140 × 490</div></div>
    <div class="lp-split">
      <div><h2 class="lp-title">Recruitment <span class="lp-hl">Solutions</span> Built Around You</h2><p class="lp-lead">Hire, deploy and manage talent across the UAE — with world-class staffing, payroll and HR outsourcing services.</p><div class="lp-actions"><a class="lp-btn" href="#">Learn more about staffing solution</a></div></div>
      <div class="lp-grid lp-grid--2"><div class="lp-card"><span class="lp-icon lp-i-users-four lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Contract Staffing</h3><p class="lp-card__text">Comprehensive staffing solutions tailored for both immediate and future needs.</p></div><div class="lp-card"><span class="lp-icon lp-i-user-check lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">Permanent Recruitment</h3><p class="lp-card__text">Effectively recruit top-tier talent from local and international markets.</p></div><div class="lp-card"><span class="lp-icon lp-i-credit-card lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">PEO &amp; Payroll</h3><p class="lp-card__text">Employ and pay your workforce compliantly, without setting up a local entity.</p></div><div class="lp-card"><span class="lp-icon lp-i-user-gear lp-icon--32 lp-icon--grad lp-card__icon" aria-hidden="true"></span><h3 class="lp-card__title">HR Outsourcing &amp; Management</h3><p class="lp-card__text">Entrust your HR policies, onboarding and payroll to our specialists.</p></div></div>
    </div>
  </div>
</section>
```
