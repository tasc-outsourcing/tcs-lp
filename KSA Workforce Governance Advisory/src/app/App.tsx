import { BriefcaseBusiness, Building2, Check, ClipboardCheck, FileCheck2, Layers3, MapPinned, PieChart, Scale, ShieldCheck, UserRoundPlus } from "lucide-react";
import { HubSpotForm } from "./components/HubSpotForm";
import heroImage from "../assets/hero-riyadh.png";
import logoWhite from "../assets/tasc-logo-white.png";

const HUBSPOT = {
  portalId: "20309062",
  region: "na1",
  contactFormId: "a3fb2e74-285c-4bf5-b4dc-40313b9154b7",
  guidebookFormId: "16761939-008a-408a-a7f3-e62ff041378d",
};

const systems = [
  ["Qiwa", "Contracts, profession codes and the live Saudization calculation."],
  ["Nitaqat", "Company and now profession-level quotas across 269 roles."],
  ["GOSI", "Social insurance registration and salary of record."],
  ["Mudad", "Wage protection and payment verification."],
  ["Muqeem", "Residency, Iqama and work-permit status."],
];

const bandItems = [
  ["RED", "Blocked visas & services", "#e52323"],
  ["YELLOW", "Tier removed in 2026", "#ffd500"],
  ["LOW GREEN", "Vulnerable to one change", "#78c850"],
  ["MID GREEN", "Core operations intact", "#56db46"],
  ["HIGH GREEN", "Full flexibility", "#18bf58"],
  ["PLATINUM", "Priority government access", "#d5d8dc"],
];

const stats = [
  [Layers3, "0", "Yellow-band buffer left. The tier was removed in 2026."],
  [PieChart, "269", "Professions that now carry their own Nitaqat quota."],
  [ClipboardCheck, "370K+", "MHRSD inspection visits recorded across the Kingdom in the past year."],
  [Scale, "Up to 10x", "Increase in certain labour-law fines under the 2026 penalty schedule."],
];

const methods = [
  [FileCheck2, "Assess", "Map the current position across every Saudi government system that touches the workforce, benchmarked against comparable operators."],
  [ClipboardCheck, "Align", "Reconcile global HR policy with Saudi statutory requirement, closing the gap before it becomes exposure."],
  [ShieldCheck, "Sustain", "Keep that position governed and current, so compliance is a standing state, not a periodic exercise."],
];

const proof = [
  [Building2, "20+", "Years in the GCC", "Two decades navigating Saudi regulation on the ground, every day."],
  [MapPinned, "150+", "Specialists in KSA", "Including a dedicated desk of GROs across every government platform."],
  [BriefcaseBusiness, "10+", "Dedicated GRO desk", "Operating Qiwa, GOSI, Mudad and Muqeem for retained clients daily."],
  [UserRoundPlus, "1", "Accountable contact", "A single owner for compliance posture, not a rotating case team."],
];

const checks = [
  "Are all contracts digitally authenticated on Qiwa, not merely signed?",
  "Do designations match role reality and qualification evidence?",
  "Is Nitaqat status monitored continuously against hiring plans?",
  "Do Qiwa, GOSI, Mudad and Muqeem tell the same story?",
  "Is there a documented GRO operating model with named ownership?",
];

function FormCard({ targetId, formId, title }: { targetId: string; formId: string; title?: string }) {
  return (
    <div className="form-card">
      {title ? <h3>{title}</h3> : null}
      <HubSpotForm
        portalId={HUBSPOT.portalId}
        region={HUBSPOT.region}
        formId={formId}
        targetId={targetId}
        className="hubspot-form"
      />
      <p className="form-note">Your details are reviewed only by the TASC KSA advisory team.</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <header className="topbar">
        <a href="#top" aria-label="TASC Corporate Services">
          <span className="brand-fallback">TASC</span>
        </a>
      </header>

      <section id="top" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 70, 88, 0.94), rgba(0, 70, 88, 0.74), rgba(0, 70, 88, 0.52)), url(${heroImage})` }}>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow yellow">KSA Workforce Governance Advisory</p>
            <h1>Your global HR policy is compliant at HQ. Is it compliant in Riyadh?</h1>
            <p>
              A diagnostic-led advisory service for multinational employers, across every sector, who need clean Qiwa records, stable Nitaqat standing, and a governed bridge between global policy and Saudi statutory reality.
            </p>
            <div className="actions">
              <a className="button primary" href="#contact">Book a Workforce Governance Diagnostic call</a>
              <a className="button secondary" href="#guidebook">Download the guidebook</a>
            </div>
          </div>
          <FormCard
            title="Request a Workforce Governance Diagnostic call"
            targetId="hubspot-contact-hero"
            formId={HUBSPOT.contactFormId}
          />
        </div>
        <div className="shell">
          <div className="band-strip">
            {bandItems.map(([label, text, color]) => (
              <div key={label} style={{ backgroundColor: color }}>
                <strong>{label}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <p className="band-caption">The Nitaqat tier system, 2026 structure. The Yellow buffer is gone: a company that used to have room to slip now moves directly into Red.</p>
        </div>
      </section>

      <section className="section problem">
        <div className="shell">
          <p className="eyebrow">The Problem</p>
          <h2>Your policy is global. Your compliance risk is entirely local.</h2>
          <p className="lead">
            For multinationals in KSA, workforce risk sits between HQ policy and local execution, spread across five government systems that were never designed to be reconciled by a remote HR function.
          </p>
          <div className="system-grid">
            {systems.map(([name, text]) => (
              <article className="system-card" key={name}>
                <div className="system-mark">{name.slice(0, 2)}</div>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="shell stats-grid">
          {stats.map(([Icon, value, text]) => (
            <article className="stat" key={String(value)}>
              <Icon aria-hidden="true" />
              <strong>{value as string}</strong>
              <span>{text as string}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">What We Do</p>
          <h2>We give leadership a defensible, evidence-based view of KSA workforce compliance, and the structure to keep it current.</h2>
          <p className="lead">
            Our work sits at the intersection of regulatory advisory and on-the-ground execution. We review how an organisation is positioned against Qiwa, Nitaqat, GOSI and Mudad, reconcile global policy against Saudi statutory requirement, and put a governed structure in place to keep the two aligned. The qualifying wage for Saudization credit now stands at SAR 4,000 a month, one of several thresholds that shift the calculation without a single hire changing.
          </p>
          <div className="method-grid">
            {methods.map(([Icon, title, text]) => (
              <article key={String(title)}>
                <Icon aria-hidden="true" />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section engage">
        <div className="shell">
          <p className="eyebrow">How We Engage</p>
          <h2>Two phases. One governed outcome.</h2>
          <div className="phase-grid">
            <article className="phase light">
              <span>Phase A</span>
              <h3>Workforce Governance Diagnostic</h3>
              <p>A structured, benchmarked review of Qiwa, GOSI, Mudad and Nitaqat standing.</p>
              <ul>
                <li>Gap map, ranked by severity</li>
                <li>Sector benchmark</li>
                <li>Prioritised remediation roadmap</li>
              </ul>
            </article>
            <article className="phase dark">
              <span>Phase B</span>
              <h3>Workforce Governance Office</h3>
              <p>Ongoing oversight that keeps that position current and defensible.</p>
              <ul>
                <li>Portal governance</li>
                <li>Nitaqat monitoring</li>
                <li>Regulatory tracking</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="shell">
          <p className="eyebrow">Why TASC Corporate Services</p>
          <h2>Consulting-grade clarity. Execution-grade ownership.</h2>
          <p className="lead">
            We understand the advisory layer and the government-portal layer, which is what makes this engagement faster, more practical, and more cost-efficient than a large advisory-only model.
          </p>
          <div className="proof-grid">
            {proof.map(([Icon, value, title, text]) => (
              <article key={String(title)}>
                <Icon aria-hidden="true" />
                <strong>{value as string}</strong>
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
          <div id="guidebook" className="guide-card">
            <div>
              <p className="eyebrow">Free Guide</p>
              <h2>The KSA Workforce Governance Guide for Multinationals</h2>
              <p>
                The 2026 edition: what changed under the Developed Nitaqat Programme, where the risk hides across five government systems, and the five checks every multinational should run before its next renewal cycle.
              </p>
              <HubSpotForm
                portalId={HUBSPOT.portalId}
                region={HUBSPOT.region}
                formId={HUBSPOT.guidebookFormId}
                targetId="hubspot-guidebook"
                className="hubspot-form guidebook-form"
              />
            </div>
            <ul>
              {checks.map((check) => (
                <li key={check}><Check aria-hidden="true" />{check}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Request the Diagnostic Scope</p>
            <h2>Get a clear, benchmarked view of where your KSA workforce is exposed.</h2>
            <p className="lead">
              Our advisory team reviews every submission and responds with a recommended Phase A scope, sized to your entity structure and headcount. No commitment, no generic sales deck.
            </p>
          </div>
          <FormCard targetId="hubspot-contact-footer" formId={HUBSPOT.contactFormId} />
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <img src={logoWhite} alt="TASC Corporate Services" />
          <span>TASC Corporate Services, Government Relations & Workforce Governance Advisory</span>
          <span>Kingdom of Saudi Arabia | United Arab Emirates</span>
        </div>
      </footer>
    </main>
  );
}
