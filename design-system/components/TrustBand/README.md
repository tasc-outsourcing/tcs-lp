Client quote with stacked avatars above a row of client logos.

**Figma source:** T17 / T20 › Industries / Trusted by clients (4807:173424)

## Rules

- Quote in Montserrat SemiBold 20/30 with a 12/16 attribution (role, sector, country). Up to four 60px round avatars, overlapped by 14px; replace the `<span>` placeholders with `<img>`.
- Client logos: single-colour `#46565d` versions, 40px tall, 56px apart, edge-faded.
- Quotes must be real and approved. If the client cannot be named, attribute by role, sector and country as shown.

## Markup

```html
<section class="lp-section lp-section--soft">
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title"><span class="lp-hl">Trusted</span> by Clients across the GCC</h2></div>
    <figure class="lp-testimonial"><div class="lp-avatars"><span></span><span></span><span></span><span></span></div><div><blockquote>"Every question we've had — payroll, visas, compliance — TASC has answered within a day. It's the most responsive partner we work with in the region."</blockquote><figcaption><cite>Operations Manager, Hospitality, KSA</cite></figcaption></div></figure>
  </div>
  <div class="lp-logos lp-logos--clients"><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div><div class="lp-logos__item"><div class="lp-slot" style="width:170px;min-height:36px;border-radius:8px">Client logo</div></div></div>
</section>
```
