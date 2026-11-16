Gated-download band: what was requested on the left, the file and download button on the right.

**Figma source:** T17A Gated Download › Section (4807:173829)

## Rules

- Grey band with a hairline under it, 72px vertical padding, two equal columns.
- Left: "Details" (24/32), the asset name in bold inside a sentence, a muted one-line description.
- Right: "Check your inbox", a file row (56 × 74 cover thumbnail, title), a full-width yellow Download button, and a fallback note.
- Deliver the file by email as well as on the page; the hero copy says where it was sent.

## Markup

```html
<section class="lp-band">
  <div class="lp-container"><div class="lp-split lp-split--even" style="align-items:start">
    <div><h2 class="lp-band__title">Details</h2><p class="lp-band__text">You requested the <b>KSA Market Entry Playbook</b></p><p class="lp-band__hint">A practical guide to entering the Saudi market — licensing routes, Saudisation quotas, and the costs of setting up an entity.</p></div>
    <div><h2 class="lp-band__title">Check your inbox</h2>
      <div class="lp-file"><div class="lp-file__thumb"></div><div><p class="lp-file__title">KSA Market Entry Playbook</p></div></div>
      <a class="lp-btn lp-btn--secondary lp-btn--block" href="#" download>Download</a>
      <p class="lp-band__hint" style="margin-top:14px">If your download does not begin automatically, click the button to download manually.</p></div>
  </div></div>
</section>
```
