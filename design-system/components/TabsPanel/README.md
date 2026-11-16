Pill tab bar that switches a grey content panel with title, text, CTA and image.

**Figma source:** T19 › Tabbing - Sub-sectors (4675:171875); _Tab component

## Rules

- `.lp-tabs`: grey track, 4px padding, 12px radius; tabs are 32px pills in Montserrat SemiBold 14/20; the selected tab is yellow. The bar scrolls sideways when tabs overflow.
- `.lp-tabs--underline` is the underline version from the Figma `_Tab` set, for sub-navigation inside a section.
- `.lp-tabpanel`: grey, 24px radius, 56px padding, two equal columns.
- Usually closes with a `.lp-cta-strip` (see CtaBanner).

## Markup

```html
<section class="lp-section">
  <div class="lp-container">
    <div class="lp-head"><h2 class="lp-title">Explore Other <span class="lp-hl">Industries We Serve</span></h2><p class="lp-lead">Get clear, concise insights on Saudi staffing — from costs to Saudization strategies.</p></div>
    <div class="lp-tabs" role="tablist" style="margin-top:24px"><button class="lp-tab" role="tab" aria-selected="true">Commercial aviation</button><button class="lp-tab" role="tab" aria-selected="false">Airlines &amp; MRO</button><button class="lp-tab" role="tab" aria-selected="false">Ground handling</button><button class="lp-tab" role="tab" aria-selected="false">Aviation Manufacturing</button><button class="lp-tab" role="tab" aria-selected="false">Aviation OEMs</button><button class="lp-tab" role="tab" aria-selected="false">Dealerships &amp; aftersales</button></div>
    <div class="lp-tabpanel" role="tabpanel">
      <div><h3 class="lp-tabpanel__title">Commercial aviation</h3><p class="lp-tabpanel__text">Cabin crew, ground operations and airport-facing roles for commercial carriers, vetted for the certifications and background checks the industry requires.</p><div class="lp-actions"><a class="lp-btn lp-btn--sm" href="#form">Talk to our team</a></div></div>
      <div class="lp-media"><div class="lp-slot" style="height:100%">Image 498 × 380</div></div>
    </div>
    <div class="lp-cta-strip" style="margin-top:56px"><span class="lp-glow" style="width:323px;height:280px;filter:blur(40px);inset-inline-end:-30px;top:-99px"></span><div><p class="lp-cta-strip__title">Don't See Your Industry? We've Got You Covered!</p><p class="lp-cta-strip__text">Our diverse talent network spans every sector. Let's discuss your specific industry needs.</p></div><a class="lp-btn lp-btn--sm lp-btn--secondary" href="#form">Talk to our contract staffing team</a></div>
  </div>
</section>
```

## Script

```html
<script>
document.querySelectorAll('.lp-tabs').forEach(function(b){b.addEventListener('click',function(e){var t=e.target.closest('[role=tab]');if(!t)return;b.querySelectorAll('[role=tab]').forEach(function(x){x.setAttribute('aria-selected',x===t)});var p=b.parentNode.querySelector('.lp-tabpanel__title');if(p)p.textContent=t.textContent})});
</script>
```
