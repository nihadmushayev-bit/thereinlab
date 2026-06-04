import Reveal from "./Reveal.jsx";

export default function CTABanner({ applyUrl }) {
  return (
    <section id="contact" className="bg-[#16415a] px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-normal md:text-6xl">Ignite the growth your brand deserves.</h2>
        <p className="mx-auto mt-6 max-w-lg whitespace-pre-line text-foreground/60">
          You made it this far... what are you waiting for?
          {"\n\n"}
          <span className="font-serif italic text-foreground/75">Grow or Die - Phil Knight</span>
        </p>
        <a
          href={applyUrl}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-surface-deep px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:scale-105 hover:bg-surface-base"
        >
          Apply Now -&gt;
        </a>
      </Reveal>
    </section>
  );
}
