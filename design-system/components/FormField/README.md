Label, input, select, phone and checkbox fields with their states.

**Figma source:** Input_field (10 variants), Checkbox

## Rules

- Labels: Montserrat Medium 12/16 above the field, required marker in `input-text-critical`.
- Inputs are 48px tall, 12px radius, 1px `border-primary`. Text is Montserrat SemiBold 14/20; placeholder is `#5e7078`.
- States from the Figma `Input_field` set: Default, Active (teal border), Valued, Error (red border plus a 12px message under the field), Disabled.
- Phone is a country-code select beside the number input, 8px apart. On HubSpot forms, use the phone field with the country dropdown enabled.
- Every field needs a visible label. Placeholders are examples, never the label.

## Markup

```html
<div class="lp-grid lp-grid--3" style="max-width:1000px">
  <div class="lp-field"><label class="lp-label" for="f1">Full name<span class="lp-req">*</span></label><input class="lp-input" id="f1" placeholder="Full Name"></div>
  <div class="lp-field"><label class="lp-label" for="f2">Your Email<span class="lp-req">*</span></label><input class="lp-input" id="f2" value="k.osei@company.com"></div>
  <div class="lp-field lp-field--error"><label class="lp-label" for="f3">Work Email<span class="lp-req">*</span></label><input class="lp-input" id="f3" value="k.osei@" aria-invalid="true" aria-describedby="f3e"><span class="lp-error" id="f3e">Enter a valid work email</span></div>
  <div class="lp-field"><label class="lp-label" for="f4">Phone Number<span class="lp-req">*</span></label><div class="lp-phone"><select class="lp-select" aria-label="Country code"><option>+971</option><option>+966</option></select><input class="lp-input" id="f4" type="tel" placeholder="50 123 4567"></div></div>
  <div class="lp-field"><label class="lp-label" for="f5">What do you need?<span class="lp-req">*</span></label><select class="lp-select" id="f5" required><option value="">Select what do you need?</option><option>Contract staffing</option><option>Permanent recruitment</option></select></div>
  <div class="lp-field"><label class="lp-label" for="f6">Company Name</label><input class="lp-input" id="f6" value="Disabled" disabled></div>
  <label class="lp-check" style="grid-column:1/-1"><input type="checkbox"><span>I have read and agree to the <a href="#">Privacy Policy</a></span></label>
</div>
```
