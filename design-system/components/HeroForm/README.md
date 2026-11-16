Campaign hero: headline and proof on a darkened photo, with the lead form on the right.

**Figma source:** T19 › Hero section with form (4675:171643)

## Rules

- The default hero for lead-generation pages. 720px tall at desktop, copy column 673px, form 517px, 80px side padding.
- Background: one photo covered by the dark gradient at 60% (`.lp-hero__bg` adds it). Pick a photo with a calm left half, since the headline sits there.
- `h1.lp-hero__title` is 60/66 Montserrat Bold, white, no gradient highlight. Up to three lines.
- Support paragraph: one or two sentences with a number in it (NPS, years, associates).
- Below 1100px the form drops under the copy and the headline steps down to 48px, then 36px on phones.

## Markup

```html
<section class="lp-hero lp-hero--image">
  <div class="lp-hero__bg"><div class="lp-slot" style="height:100%;align-items:flex-end;justify-content:flex-start;padding:16px">Background photo 1440 × 720</div></div>
  <span class="lp-glow" style="inset-inline-start:35%;top:71px"></span>
  <div>
    <nav aria-label="Breadcrumb"><ol class="lp-breadcrumbs"><li><a href="#">Home</a></li><li aria-current="page">The Best recruitment agency in the UAE</li></ol></nav>
    <h1 class="lp-hero__title">The Best recruitment agency in the UAE</h1>
    <p class="lp-hero__text">TASC is one of the region's most preferred staffing and HR partners — hiring and managing associates with world-class service, backed by an industry-leading 74.7% NPS.</p>
  </div>
  <form class="lp-form lp-hero__aside" id="form">
    <div class="lp-form__head"><h2 class="lp-form__title">Work with the top recruitment agency in the UAE</h2></div>
    <div class="lp-form__body">
      <div class="lp-field"><label class="lp-label" for="h1">Full name<span class="lp-req">*</span></label><input class="lp-input" id="h1" placeholder="Full Name"></div>
      <div class="lp-field"><label class="lp-label" for="h2">Your Email<span class="lp-req">*</span></label><input class="lp-input" id="h2" placeholder="you@company.com"></div>
      <div class="lp-field"><label class="lp-label" for="h3">Phone Number<span class="lp-req">*</span></label><div class="lp-phone"><select class="lp-select" aria-label="Country code"><option>+971</option></select><input class="lp-input" id="h3" placeholder="50 123 4567"></div></div>
      <div class="lp-field"><label class="lp-label" for="h4">What do you need?<span class="lp-req">*</span></label><select class="lp-select" id="h4" required><option value="">Select what do you need?</option></select></div>
    </div>
    <div class="lp-form__foot"><button class="lp-btn lp-btn--block">Send enquiry</button></div>
  </form>
</section>
```
