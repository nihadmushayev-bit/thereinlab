import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Numbers from "./components/Numbers.jsx";
import CTABanner from "./components/CTABanner.jsx";
import Footer from "./components/Footer.jsx";
import Reveal from "./components/Reveal.jsx";
import { EXTERNAL_FORM_URL, LINKS } from "./siteConfig.js";

const APPLY_URL = EXTERNAL_FORM_URL;

function getPageName() {
  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("/pfs-system") || path.endsWith("/pfs-system.html")) return "pfs-system";
  if (path.endsWith("/services") || path.endsWith("/services.html")) return "services";

  return "home";
}

function PageChrome({ children, footerApplyUrl = APPLY_URL }) {
  return (
    <main className="min-h-screen overflow-hidden bg-surface-base text-foreground">
      {children}
      <Footer applyUrl={footerApplyUrl} />
    </main>
  );
}

const heroStats = [
  ["04", "Core Systems"],
  ["100%", "Performance Rhythm"],
  ["E-Com", "Fashion Focus"],
];

const serviceSystems = [
  {
    title: "Acquisition",
    intro: "Paid growth operated from the business model, not from channel defaults.",
    body:
      "We manage acquisition as a financial system: offer, margin, funnel, creative, and channel pacing all work from the same set of numbers.",
    points: [
      "Meta, Google, and TikTok scale plans",
      "Offer and landing-page alignment",
      "Spend pacing tied to blended CAC",
      "Weekly scale, hold, and reset decisions",
    ],
    outro: "The goal is a buying engine that scales only when the numbers can carry it.",
  },
  {
    title: "Creative Production",
    intro: "A performance creative pipeline that keeps new angles moving without losing strategic control.",
    body:
      "Hooks, scripts, briefs, creator concepts, statics, and landing-page ideas are built from live signals, then fed back into media decisions.",
    points: [
      "Creative strategy and testing maps",
      "Ad concepts, scripts, and briefs",
      "Iterative production sprints",
      "Learning loops across winners and misses",
    ],
    outro: "Creative becomes a repeatable operating rhythm instead of a monthly guess.",
  },
  {
    title: "Profit & Data Tracking",
    intro: "Reporting that explains what the brand can afford to do next.",
    body:
      "We track contribution, MER, CAC, repeat revenue, channel movement, and creative velocity so every growth call has financial context.",
    points: [
      "Blended performance dashboards",
      "Margin-aware KPI architecture",
      "Channel and cohort readouts",
      "Decision notes after each test cycle",
    ],
    outro: "No metric sits alone. Every number has to help the next decision get sharper.",
  },
  {
    title: "Retention",
    intro: "Lifecycle systems designed to turn first purchases into compounding revenue.",
    body:
      "Email, SMS, segmentation, and offer sequencing are built around customer behavior so acquisition and retention reinforce each other.",
    points: [
      "Email and SMS flow architecture",
      "Campaign calendars tied to offer strategy",
      "Segmentation and repeat purchase plays",
      "LTV feedback into acquisition targets",
    ],
    outro: "Revenue gets stronger when the post-purchase engine is part of the growth model.",
  },
];

const pfsStats = [
  ["04", "Sequenced Steps"],
  ["01", "Operating System"],
  ["∞", "Compound"],
];

const pfsSteps = [
  {
    label: "Step One",
    title: "Establish the Profit Truth",
    body:
      "Before we touch the ad account, we establish the real margin picture. Product-level gross profit, weighted catalog margin, fulfillment costs, and contribution math become the foundation for every growth decision.",
    points: [
      "Product-level gross profit analysis",
      "Weighted gross margin across the catalog",
      "Cost-of-goods reconciliation",
      "Margin precision for aggressive scale",
    ],
    outro: "This is where the foundation gets poured. Every decision after this is built on it.",
  },
  {
    label: "Step Two",
    title: "Build Daily Profit Visibility",
    body:
      "Once the numbers are clear, we build the visibility layer that keeps them in front of the team every day. Spend, revenue, margin, and contribution are read together instead of through isolated channel reports.",
    points: [
      "Daily profit and contribution tracking",
      "Blended CAC and MER visibility",
      "Revenue quality readouts",
      "Channel pacing tied to margin reality",
    ],
    outro: "The team stops guessing what is working and starts seeing what the business can actually afford to scale.",
  },
  {
    label: "Step Three",
    title: "Map the Historical Baseline",
    body:
      "We map the account's previous performance so every future decision has context. What worked, what broke, what faded, and what never had enough signal are separated into a clear operating baseline.",
    points: [
      "Historical spend and revenue review",
      "Creative fatigue and winner mapping",
      "Offer and audience performance history",
      "Baseline CAC, MER, and volume ranges",
    ],
    outro: "This baseline becomes the reference point for every decision going forward.",
  },
  {
    label: "Step Four",
    title: "Set Profit-Aligned Growth Targets",
    body:
      "Finally, we set the targets that decide how the system operates. Budget moves, creative velocity, offer testing, and retention priorities all trace back to whether they move the brand toward profitable scale.",
    points: [
      "Profit-aligned monthly targets",
      "Spend and contribution guardrails",
      "Creative testing velocity goals",
      "Retention targets tied to acquisition",
    ],
    outro: "These targets become the operating system for every decision that follows.",
  },
];

const pfsWhyCards = [
  {
    label: "decision.framework",
    title: "Margin makes every decision",
    script: "sharper.",
    body:
      "When margin is visible, budget allocation, offer structure, creative testing, spend pacing, and product prioritization stop being guesswork. The work is grounded in financial reality.",
  },
  {
    label: "outcome.compound",
    title: "Compound growth.",
    script: "No mystery ceiling.",
    body:
      "That is how brands scale without burning out. Growth compounds because the system explains what to scale, what to pause, and what needs to be rebuilt before more money goes in.",
  },
];

function HomePage() {
  return (
    <PageChrome>
      <section className="fluid-gradient relative overflow-hidden">
        <div
          aria-hidden="true"
          className="fluid-blob pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        />
        <Navbar applyUrl={APPLY_URL} />
        <Hero applyUrl={APPLY_URL} />
        <Marquee />
      </section>

      <div
        aria-hidden="true"
        className="h-24 w-full bg-gradient-to-b from-[#091f28] to-[#123747]"
      />
      <About applyUrl={APPLY_URL} />
      <Services />
      <div
        aria-hidden="true"
        className="h-24 w-full bg-gradient-to-b from-[#123747] to-[#1f5a75]"
      />
      <Testimonials />
      <div
        aria-hidden="true"
        className="h-24 w-full bg-gradient-to-b from-[#1f5a75] to-[#16415a]"
      />
      <Numbers />
      <CTABanner applyUrl={APPLY_URL} />
    </PageChrome>
  );
}

function ServicesPage() {
  return (
    <PageChrome>
      <section className="services-reference-bg relative overflow-hidden bg-[#123747]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.45]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-16rem] top-20 h-[560px] w-[560px] rounded-full bg-brand/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-18rem] bottom-[-14rem] h-[520px] w-[520px] rounded-full bg-brand-light/10 blur-3xl"
        />
        <Navbar applyUrl={APPLY_URL} />

        <div className="relative z-10 mx-auto grid min-h-[565px] max-w-7xl items-center gap-12 px-6 pb-24 pt-14 md:grid-cols-12 md:pb-28 md:pt-16">
          <div className="md:col-span-7">
            <p className="hero-load font-mono text-xs uppercase tracking-[0.3em] text-brand-light">
              [ Services / 04 Systems ]
            </p>
            <h1
              style={{ animationDelay: "120ms" }}
              className="hero-load mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-foreground md:text-7xl lg:text-[5.5rem]"
            >
              Growth,
              <br />
              <span className="signature text-brand-light">engineered.</span>
            </h1>
            <div style={{ animationDelay: "220ms" }} className="hero-load mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={APPLY_URL}
                className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white shadow-glow transition duration-300 hover:scale-[1.03] hover:bg-brand-light hover:text-surface-deep"
              >
                Apply Now -&gt;
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-foreground/[0.86] transition duration-300 hover:border-white/[0.45] hover:bg-white/[0.08] hover:text-foreground"
              >
                Explore the systems
              </a>
            </div>
          </div>

          <div style={{ animationDelay: "280ms" }} className="hero-load md:col-span-5 md:pt-24">
            <p className="max-w-xl text-base leading-relaxed text-foreground/[0.76] md:text-lg">
              Rein Lab operates as a CMO-style growth partner for e-commerce and fashion brands. Four systems, one outcome: profitable, sustainable scale.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {heroStats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur">
                  <p className="text-2xl font-semibold tracking-normal text-foreground">{value}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/[0.45]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 01 / Philosophy ]</p>
              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-normal md:text-5xl">
                Built to scale brands.
                <br />
                <span className="signature text-brand-light">Not manage accounts.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="space-y-6 text-base leading-relaxed text-foreground/75 md:col-span-8 md:border-l md:border-white/10 md:pl-10 md:text-lg">
            <p>
              Rein Lab is structured for e-commerce and fashion brands that need an operating partner, not a pile of disconnected deliverables. Strategy, media, creative, reporting, and retention stay in one room.
            </p>
            <p>
              That means decisions are made from the full growth picture: what the brand can afford, what the customer responds to, and what the next constraint is.
            </p>
            <p>
              The work is simple on purpose. Build the system, read the signal, improve the next move, then keep compounding.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="systems" className="relative scroll-mt-20 border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 02 / The Four Systems ]</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-normal md:text-6xl">How we scale brands.</h2>
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-5">
              <p className="text-base leading-relaxed text-foreground/[0.65] md:text-lg">
                Four interlocking systems. Operated as one engine. Designed to compound.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {serviceSystems.map((system, index) => (
              <Reveal key={system.title} delay={index * 0.06}>
                <article className="group grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                  <div className="md:col-span-4">
                    <div className="md:sticky md:top-24">
                      <p className="font-mono text-5xl font-light text-foreground/20 md:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-6 text-3xl font-semibold tracking-normal md:text-4xl">{system.title}</h3>
                    </div>
                  </div>

                  <div className="md:col-span-8 md:border-l md:border-white/10 md:pl-10">
                    <p className="max-w-3xl text-xl leading-snug text-foreground/90 md:text-2xl">{system.intro}</p>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/[0.66] md:text-lg">{system.body}</p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                      {system.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/[0.74]">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand shadow-[0_0_24px_rgba(47,121,156,0.8)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 max-w-3xl text-sm leading-relaxed text-foreground/[0.54]">{system.outro}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 03 / Engagement ]</p>
            <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-normal md:text-6xl">How we plug in.</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: "pricing.model",
                title: "Performance-based.",
                script: "Aligned by design.",
                copy:
                  "The engagement is built around shared incentives. We care about the same thing you do: growth that makes financial sense.",
              },
              {
                label: "outcome.compound",
                title: "Compound growth.",
                script: "No mystery ceiling.",
                copy:
                  "The four systems run together so every useful signal improves media, creative, reporting, and retention at the same time.",
              },
            ].map((card, index) => (
              <Reveal key={card.label} delay={index * 0.1}>
                <article className="relative min-h-[370px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.045] md:p-10">
                  <div aria-hidden="true" className="absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-brand/[0.18] blur-3xl" />
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-brand-light">{card.label}</p>
                  <div className="mt-14 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_26px_rgba(47,121,156,0.95)]" />
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold tracking-normal md:text-4xl">
                    {card.title}
                    <br />
                    <span className="signature text-brand-light">{card.script}</span>
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-foreground/[0.68]">{card.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(47,121,156,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(47,121,156,0.16)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"
        />
        <div aria-hidden="true" className="absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/[0.18] blur-3xl" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 04 / Next Step ]</p>
          <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-normal md:text-7xl">
            Ready to scale?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-foreground/[0.68] md:text-lg">
            If the brand is ready for a tighter operating system, start with the application and we will map the highest-leverage path.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={APPLY_URL}
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-medium text-white shadow-glow transition duration-300 hover:scale-[1.03] hover:bg-brand-light hover:text-surface-deep"
            >
              Apply Now -&gt;
            </a>
            <a
              href={LINKS.pfsSystem}
              className="inline-flex items-center justify-center rounded-full border border-white/[0.18] px-8 py-4 text-sm font-medium text-foreground/[0.82] transition duration-300 hover:border-white/[0.45] hover:bg-white/[0.08] hover:text-foreground"
            >
              The PFS System™
            </a>
          </div>
        </Reveal>
      </section>
    </PageChrome>
  );
}

function PfsSystemPage() {
  return (
    <PageChrome>
      <section className="services-reference-bg relative overflow-hidden bg-[#123747]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.45]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-16rem] top-20 h-[560px] w-[560px] rounded-full bg-brand/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-18rem] bottom-[-14rem] h-[520px] w-[520px] rounded-full bg-brand-light/10 blur-3xl"
        />
        <Navbar applyUrl={APPLY_URL} />

        <div className="relative z-10 mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-6 pb-24 pt-14 md:grid-cols-12 md:pb-28 md:pt-16">
          <div className="md:col-span-7">
            <p className="hero-load font-mono text-xs uppercase tracking-[0.3em] text-brand-light">
              [ OUR MECHANISM / THE PFS SYSTEM™ ]
            </p>
            <h1
              style={{ animationDelay: "120ms" }}
              className="hero-load mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-normal text-foreground md:text-7xl lg:text-[5.5rem]"
            >
              The PFS System™
              <br />
              <span className="signature text-brand-light">The System Behind Every Outcome.</span>
            </h1>
            <div style={{ animationDelay: "220ms" }} className="hero-load mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={APPLY_URL}
                className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white shadow-glow transition duration-300 hover:scale-[1.03] hover:bg-brand-light hover:text-surface-deep"
              >
                Apply -&gt;
              </a>
              <a
                href="#rein-framework"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-foreground/[0.86] transition duration-300 hover:border-white/[0.45] hover:bg-white/[0.08] hover:text-foreground"
              >
                Explore the system
              </a>
            </div>
          </div>

          <div style={{ animationDelay: "280ms" }} className="hero-load md:col-span-5 md:pt-24">
            <p className="max-w-xl text-base leading-relaxed text-foreground/[0.76] md:text-lg">
              Most agencies scale revenue. Rein Lab scales profit. This is the mechanism we use to grow brands like a CMO would: grounded in financial truth, not vanity metrics.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {pfsStats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur">
                  <p className="text-2xl font-semibold tracking-normal text-foreground">{value}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/[0.45]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 01 / The Ceiling ]</p>
              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-normal md:text-5xl">
                Why most agencies
                <br />
                <span className="signature text-brand-light">hit a ceiling.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="space-y-6 text-base leading-relaxed text-foreground/75 md:col-span-8 md:border-l md:border-white/10 md:pl-10 md:text-lg">
            <p>
              Most agencies optimize for surface-level performance: ROAS, click-through rates, impressions, and topline revenue.
            </p>
            <p>
              Those numbers do not tell you whether the brand is actually making money. Spend goes up, revenue goes up, margin disappears, and scale turns into a gamble.
            </p>
            <p>
              The PFS System fixes that by putting financial discipline at the center of growth, then operating with the speed and aggression of a performance team.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="rein-framework" className="relative scroll-mt-20 border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 02 / The System ]</p>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-normal md:text-6xl">Four steps. Built to compound.</h2>
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-5">
              <p className="text-base leading-relaxed text-foreground/[0.65] md:text-lg">
                Run in sequence. Each step pours the foundation for the next.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {pfsSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="group grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                  <div className="md:col-span-4">
                    <div className="md:sticky md:top-24">
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">{step.label}</p>
                      <p className="mt-8 font-mono text-5xl font-light text-foreground/20 md:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-6 text-3xl font-semibold tracking-normal md:text-4xl">{step.title}</h3>
                    </div>
                  </div>

                  <div className="md:col-span-8 md:border-l md:border-white/10 md:pl-10">
                    <p className="max-w-3xl text-base leading-relaxed text-foreground/[0.76] md:text-lg">{step.body}</p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                      {step.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/[0.74]">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand shadow-[0_0_24px_rgba(47,121,156,0.8)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 max-w-3xl text-sm leading-relaxed text-foreground/[0.54]">{step.outro}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 03 / Why This Works ]</p>
            <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-normal md:text-6xl">Profit truth changes the operating model.</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {pfsWhyCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 0.1}>
                <article className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.045] md:p-10">
                  <div aria-hidden="true" className="absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-brand/[0.18] blur-3xl" />
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-brand-light">{card.label}</p>
                  <div className="mt-14 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_26px_rgba(47,121,156,0.95)]" />
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold tracking-normal md:text-4xl">
                    {card.title}
                    <br />
                    <span className="signature text-brand-light">{card.script}</span>
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-foreground/[0.68]">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#123747] px-6 py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(47,121,156,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(47,121,156,0.16)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"
        />
        <div aria-hidden="true" className="absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/[0.18] blur-3xl" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-light">[ 04 / Next Step ]</p>
          <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-normal md:text-7xl">
            Ready to scale on financial truth?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-foreground/[0.68] md:text-lg">
            Apply now to see whether your brand is the right fit for the Profit-First Scaling System.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={APPLY_URL}
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-medium text-white shadow-glow transition duration-300 hover:scale-[1.03] hover:bg-brand-light hover:text-surface-deep"
            >
              Apply Now -&gt;
            </a>
            <a
              href={LINKS.services}
              className="inline-flex items-center justify-center rounded-full border border-white/[0.18] px-8 py-4 text-sm font-medium text-foreground/[0.82] transition duration-300 hover:border-white/[0.45] hover:bg-white/[0.08] hover:text-foreground"
            >
              View services
            </a>
          </div>
        </Reveal>
      </section>
    </PageChrome>
  );
}

export default function App() {
  const page = getPageName();

  if (page === "services") return <ServicesPage />;
  if (page === "pfs-system") return <PfsSystemPage />;

  return <HomePage />;
}
