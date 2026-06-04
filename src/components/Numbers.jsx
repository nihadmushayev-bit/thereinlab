import Reveal from "./Reveal.jsx";

const numbers = [
  { value: "5x+", label: "ROAS" },
  { value: "$700K+", label: "Revenue Generated" },
  { value: "1,000+", label: "Ad Campaigns Managed" },
  { value: "7", label: "Brands Partnered" },
];

export default function Numbers() {
  return (
    <section id="stats" className="bg-[#16415a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand-light">[ By The Numbers ]</p>
          <h2 className="text-4xl font-semibold tracking-normal md:text-6xl">Results that compound.</h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <article className="rounded-2xl border border-white/10 bg-black/[0.18] p-6 text-center backdrop-blur-sm">
                <p className="text-4xl font-semibold tracking-normal md:text-5xl">{item.value}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/58">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
