Booked-call band: who and what on the left, the appointment and calendar actions on the right.

**Figma source:** T17B Booking confirmed › Section (4807:174199)

## Rules

- Left column: "Details", the call type and duration in a sentence, then two bordered summary cards ("Sent to", "Call details") with teal icons, muted labels and SemiBold values.
- Right column: "Your call", an appointment row with a light-blue calendar tile, a large primary "Add to calendar" button, the invite line, and a tertiary "Reschedule or cancel".
- Fill every value from the booking confirmation. Do not show this band if the booking data is missing; show the BookingPanel instead.

## Markup

```html
<section class="lp-band">
  <div class="lp-container"><div class="lp-split lp-split--even" style="align-items:start;gap:40px">
    <div><h2 class="lp-band__title">Details</h2><p class="lp-band__text">You're booked for a <b>Discovery Call</b></p><p style="margin-top:8px">Duration: <b>30 minutes · Phone / MS Teams</b></p><p class="lp-band__hint">A free consultation with a Senior Business Setup Advisor to walk through your UAE entity setup options.</p>
      <dl class="lp-summary lp-summary--card" style="margin-top:24px"><p class="lp-summary__title">Sent to</p><div class="lp-summary__row"><dt><span class="lp-icon lp-i-user-circle lp-icon--brand" aria-hidden="true"></span>Consultant</dt><dd>Layla Haddad</dd></div><div class="lp-summary__row"><dt><span class="lp-icon lp-i-suitcase lp-icon--brand" aria-hidden="true"></span>Role</dt><dd>Senior Business Setup Advisor</dd></div></dl>
      <dl class="lp-summary lp-summary--card" style="margin-top:16px"><p class="lp-summary__title">Call details</p><div class="lp-summary__row"><dt><span class="lp-icon lp-i-calendar-dots lp-icon--brand" aria-hidden="true"></span>Date &amp; time</dt><dd>Tue 9 June 2026, 11:00</dd></div><div class="lp-summary__row"><dt><span class="lp-icon lp-i-clock-countdown lp-icon--brand" aria-hidden="true"></span>Timezone</dt><dd>GST (UTC+4)</dd></div><div class="lp-summary__row"><dt><span class="lp-icon lp-i-hash lp-icon--brand" aria-hidden="true"></span>Reference</dt><dd>TASC-BK-561203</dd></div></dl></div>
    <div><h2 class="lp-band__title">Your call</h2>
      <div class="lp-file" style="margin-top:20px"><div class="lp-file__icon"><span class="lp-icon lp-i-calendar lp-icon--32" aria-hidden="true"></span></div><div><p class="lp-file__title">Tuesday 9 June, 11:00</p><p class="lp-file__meta">GST (UTC+4) · 30 min · Phone / MS Teams</p></div></div>
      <a class="lp-btn lp-btn--lg lp-btn--block" href="#">Add to calendar</a>
      <p class="lp-band__hint" style="margin-top:14px;font-weight:600;font-size:14px;line-height:20px">Invite sent to m.chen@company.com. Need to change something?</p>
      <a class="lp-btn lp-btn--tertiary lp-btn--block" href="#" style="margin-top:14px">Reschedule or cancel</a></div>
  </div></div>
</section>
```
