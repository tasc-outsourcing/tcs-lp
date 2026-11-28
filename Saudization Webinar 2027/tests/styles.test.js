"use strict";
// Style checks for the page's CSS. Run from the repo root:
//   node --test "Saudization Webinar 2027/tests/styles.test.js"
//
// Why: the design system's glass and glow effects use very large blurs
// (filter: blur(150px) and blur(260px) on the glows, backdrop-filter: blur(140px)
// on the dark cards). iPhone browsers (Safari and Chrome for iOS, both WebKit)
// draw each one into a separate layer that grows by several times the blur radius,
// so on this page they needed hundreds of MB of graphics memory. On a live test on
// 28 Nov 2026 the page took about 10 seconds to draw on an iPhone, showed white
// areas, and reset while scrolling. page.css switches these blurs off.

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");

// Largest blur radius allowed on this page. The small ones the design system
// keeps (8px to 18px, on the tag and similar) are cheap.
const MAX_BLUR_PX = 40;
const BLUR_PROPS = ["filter", "backdrop-filter", "-webkit-backdrop-filter"];

// Flattens a stylesheet into {selectors, decls, media} rules. @media rules keep
// their condition; other at-rules (@font-face, @keyframes, @import) are skipped.
function parseCss(css) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = [];
  (function walk(text, media) {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open === -1) break;
      const prelude = text.slice(i, open).replace(/^[\s;]*(@import[^;]*;)?/g, "").trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (prelude.startsWith("@media")) {
        walk(body, prelude);
      } else if (!prelude.startsWith("@")) {
        const decls = {};
        body.split(";").forEach((d) => {
          const k = d.indexOf(":");
          if (k > 0) decls[d.slice(0, k).trim().toLowerCase()] = d.slice(k + 1).trim();
        });
        rules.push({ selectors: prelude.split(",").map((s) => s.trim()), decls, media });
      }
      i = j;
    }
  })(css, null);
  return rules;
}

function blurRadius(value) {
  const m = /blur\(\s*([\d.]+)px\s*\)/.exec(value || "");
  return m ? parseFloat(m[1]) : 0;
}

function usedClasses() {
  const classes = new Set();
  for (const file of ["index.html", "thank-you/index.html"]) {
    for (const m of read(file).matchAll(/class="([^"]*)"/g)) {
      m[1].split(/\s+/).filter(Boolean).forEach((c) => classes.add(c));
    }
  }
  return classes;
}

// A selector can match the page when every class it names is used in the HTML.
function selectorUsed(selector, classes) {
  const names = [...selector.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1]);
  return names.length > 0 && names.every((c) => classes.has(c));
}

const bundle = parseCss(read("assets/bundle.css"));
const pageCss = parseCss(read("assets/page.css"));
const classes = usedClasses();

test("the CSS parser finds the design system's large blurs", () => {
  const glow = bundle.find((r) => r.selectors.includes(".lp-glow--dark"));
  assert.ok(glow, "bundle.css should have a .lp-glow--dark rule");
  assert.equal(blurRadius(glow.decls.filter), 260);
});

test(`page.css switches off every design-system blur over ${MAX_BLUR_PX}px that can reach this page`, () => {
  const missing = [];
  for (const rule of bundle) {
    for (const prop of BLUR_PROPS) {
      if (blurRadius(rule.decls[prop]) <= MAX_BLUR_PX) continue;
      for (const selector of rule.selectors) {
        if (!selectorUsed(selector, classes)) continue;
        // The override must apply at every screen size (no @media) and come from page.css,
        // which loads after bundle.css, with the same selector so it wins the cascade.
        const fixed = pageCss.some((r) => !r.media && r.selectors.includes(selector) &&
          r.decls[prop] !== undefined && blurRadius(r.decls[prop]) <= MAX_BLUR_PX);
        if (!fixed) missing.push(`${selector} { ${prop}: ${rule.decls[prop]} }${rule.media ? " in " + rule.media : ""}`);
      }
    }
  }
  assert.deepEqual(missing, [], "large blurs still reaching the page:\n" + missing.join("\n"));
});

test(`page.css itself sets no blur over ${MAX_BLUR_PX}px`, () => {
  const big = [];
  for (const rule of pageCss) {
    for (const prop of BLUR_PROPS) {
      if (blurRadius(rule.decls[prop]) > MAX_BLUR_PX) big.push(`${rule.selectors.join(",")} { ${prop}: ${rule.decls[prop]} }`);
    }
  }
  assert.deepEqual(big, []);
});
