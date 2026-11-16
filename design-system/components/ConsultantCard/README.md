Named consultant with a short personal message and direct contact buttons.

**Figma source:** T17 Calculator form submitted › Section (4807:174330)

## Rules

- White card, 16px radius: 80px round photo, name 20/30, role 14/20, a light-blue message bubble, and two x-small buttons (call, WhatsApp).
- Used on the calculator thank you page beside a compact calendar, to put a person behind the estimate.
- `.lp-inline-cta` below it offers the way out for people who will not book now.
- Use a real consultant and a real direct number. The message is written in first person and names what the visitor asked for.

## Markup

```html
<div style="max-width:655px;padding:24px;border-radius:16px;background:var(--bg-surface-secondary)">
  <div class="lp-consultant"><span class="lp-consultant__photo"></span><div><p class="lp-consultant__name">Paul Bryson</p><p class="lp-consultant__role">Group Commercial Director</p><p class="lp-consultant__msg">I've reviewed your requirements for a Consulting setup with 1 visa. I have some great options for you — let's connect and I'll walk you through everything.</p><div class="lp-consultant__actions"><a class="lp-btn lp-btn--xs" href="tel:+97143588500">+971 4 358 8500</a><a class="lp-btn lp-btn--xs lp-btn--tertiary" href="#">Chat on WhatsApp</a></div></div></div>
  <div class="lp-inline-cta"><span>Can't find a time that works for your Business Setup consultation?</span><a class="lp-btn lp-btn--xs lp-btn--tertiary" href="#">Skip for now &amp; view proposal</a></div>
</div>
```
