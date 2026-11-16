Thank you hero: gradient tick, confirmation headline, what happens next, and a summary of what was sent.

**Figma source:** T17 Thank you › Hero section (4807:173327)

## Rules

- The first block of every thank you page. Centred, on white with two glows.
- 64px gradient tick, then `h1.lp-hero__title` (60/66) stating what happened in the visitor's terms: "Your proposal request is with our Corporate Services team", "Your call is booked", "A great big thank you!".
- Paragraph: who has it, what they will do, and that nothing more is needed. Bold the visitor's email or reference with `<b>`.
- `.lp-summary` (optional): three rows echoing the submission. Fill from the form's query parameters or HubSpot tokens. Leave it out if the values are not available rather than showing placeholders.
- `.lp-note`: confirmation email line plus a resend link.

## Markup

```html
<section class="lp-hero lp-hero--thanks">
  <span class="lp-glow" style="inset-inline-start:35%;top:0"></span><span class="lp-glow" style="inset-inline-end:-300px;top:0"></span>
  <div class="lp-hero__inner">
    <span class="lp-icon lp-i-check-circle-fill lp-icon--64 lp-icon--grad" aria-hidden="true"></span>
    <h1 class="lp-hero__title">Your proposal request is with our Corporate Services team</h1>
    <p class="lp-hero__text">Our team has received your request for Business Setup &amp; Corporate Services. They will review it and be in touch with next steps — nothing further is needed from you right now.</p>
    <dl class="lp-summary">
      <div class="lp-summary__row"><dt><span class="lp-icon lp-i-envelope-simple-open lp-icon--brand" aria-hidden="true"></span>Enquiry type</dt><dd>Proposal request — Business Setup &amp; Corporate Services</dd></div>
      <div class="lp-summary__row"><dt><span class="lp-icon lp-i-paper-plane-tilt lp-icon--brand" aria-hidden="true"></span>Sent to</dt><dd>corporateservices@tascoutsourcing.com</dd></div>
      <div class="lp-summary__row"><dt><span class="lp-icon lp-i-envelope-simple lp-icon--brand" aria-hidden="true"></span>Your Email</dt><dd>k.osei@company.com</dd></div>
    </dl>
    <p class="lp-note">A confirmation is on its way. Check your spam if it's not in 10 minutes.<br><a class="lp-link lp-link--dark lp-link--xs" href="#">Resend confirmation</a></p>
  </div>
</section>
```
