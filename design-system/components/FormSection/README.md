Closing dark section: headline, contact facts and the wide lead form.

**Figma source:** T20 › Section / Form above footer (4241:128245)

## Rules

- The last section before the footer on every campaign page, with `id="form"` so header and in-page CTAs can scroll to it.
- Dark gradient, 48/58 white title with a highlight, white lead, a row of `.lp-info--dark` contact cards, then the 680px `.lp-form--wide` centred.
- Fields in two columns; consent checkbox and submit span both.
- If the hero already holds the form (HeroForm), this section can repeat it for long pages, or be replaced by a CtaBanner on short ones.

## Markup

```html
<section class="lp-section lp-section--dark lp-form-section" id="form">
  <span class="lp-glow lp-glow--soft" style="inset-inline-end:-400px;top:45px;width:1015px;height:879px;filter:blur(100px)"></span>
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">Ready to Build Your <span class="lp-hl">Dream Team?</span></h2><p class="lp-lead">TASC works with organisations that hold themselves to a high standard — where workforce performance directly shapes business outcomes.</p></div>
    <div class="lp-info-row"><div class="lp-info lp-info--dark"><span class="lp-info__label">Phone</span><span class="lp-info__value">+971 4 358 8500</span></div><div class="lp-info lp-info--dark"><span class="lp-info__label">Email</span><span class="lp-info__value">info@tascoutsourcing.com</span></div><div class="lp-info lp-info--dark"><span class="lp-info__label">Location</span><span class="lp-info__value">Dubai, UAE</span></div><div class="lp-info lp-info--dark"><span class="lp-info__label">Response Time</span><span class="lp-info__value">Within 24 hours</span></div></div>
    <form class="lp-form lp-form--wide">
      <div class="lp-form__head"><h3 class="lp-form__title">Get Your Free Consultation</h3><p class="lp-form__desc">Tell us about your staffing needs and we'll get back to you within 24 hours with a tailored solution.</p></div>
      <div class="lp-form__body">
        <div class="lp-field"><label class="lp-label" for="s1">First Name</label><input class="lp-input" id="s1" placeholder="John"></div>
        <div class="lp-field"><label class="lp-label" for="s2">Last Name</label><input class="lp-input" id="s2" placeholder="Doe"></div>
        <div class="lp-field"><label class="lp-label" for="s3">Work Email</label><input class="lp-input" id="s3" placeholder="johndoe@mail.com"></div>
        <div class="lp-field"><label class="lp-label" for="s4">Phone</label><div class="lp-phone"><select class="lp-select" aria-label="Country code"><option>+971</option></select><input class="lp-input" id="s4" placeholder="50 123 4567"></div></div>
        <div class="lp-field"><label class="lp-label" for="s5">Company Name</label><input class="lp-input" id="s5" placeholder="XYZ Private Limited"></div>
        <div class="lp-field"><label class="lp-label" for="s6">Industry</label><select class="lp-select" id="s6" required><option value="">Select Industry Type</option></select></div>
        <label class="lp-check lp-form__full"><input type="checkbox"><span>I have read and agree to the <a href="#">Privacy Policy</a></span></label>
      </div>
      <div class="lp-form__foot"><button class="lp-btn lp-btn--block">Submit</button></div>
    </form>
  </div>
</section>
```
