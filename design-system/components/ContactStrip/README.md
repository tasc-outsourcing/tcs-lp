Slim dark band with three ways to reach TASC straight away.

**Figma source:** T17 › KPI box smaller (4807:173409)

## Rules

- 64px vertical padding, three dark info cards. Gold question as the label, white answer as the value.
- Always: phone (UAE and KSA numbers), the right mailbox for the enquiry type, and a link back to the form.
- Sits after the "what happens next" steps on enquiry and application thank you pages.

## Markup

```html
<section class="lp-contact-strip">
  <span class="lp-glow lp-glow--soft" style="inset-inline-start:46%;top:-179px;filter:blur(100px)"></span>
  <div class="lp-container"><div class="lp-info-row">
    <div class="lp-info lp-info--dark"><span class="lp-info__label">Need to speak to someone now?</span><span class="lp-info__value">+971 4 214 9600 &nbsp; +966 11 469 4444</span></div>
    <div class="lp-info lp-info--dark"><span class="lp-info__label">Prefer email?</span><span class="lp-info__value">careers@tascoutsourcing.com</span></div>
    <div class="lp-info lp-info--dark"><span class="lp-info__label">Something wrong in what you sent?</span><a class="lp-info__value" href="#">Go back to the form</a></div>
  </div></div>
</section>
```
