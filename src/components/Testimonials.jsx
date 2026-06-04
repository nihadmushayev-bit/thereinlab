import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

const testimonialContent = {
  heading: "What Our Clients Say",
  signature: "in their words",
  previousLabel: "Previous testimonial",
  nextLabel: "Next testimonial",
  goToLabel: "Go to testimonial",
  items: [
    {
      id: "client-01",
      quote:
        "The team helped us see which creative decisions were actually moving revenue. The process felt sharp, calm, and tied to the numbers from day one.",
      name: "Aylin",
      role: "Founder",
      badge: "A",
    },
    {
      id: "client-02",
      quote:
        "We stopped guessing what to scale. The team rebuilt our testing rhythm and gave us a clearer path for profitable acquisition.",
      name: "Murad",
      role: "Growth Lead",
      badge: "M",
    },
    {
      id: "client-03",
      quote:
        "They brought structure to our growth work. Reporting, creative, and media finally started working from the same plan.",
      name: "Emma",
      role: "Marketing Lead",
      badge: "E",
    },
    {
      id: "client-04",
      quote:
        "The collaboration felt practical and focused. Every weekly decision had a reason, and the team kept margins in view.",
      name: "James",
      role: "Operator",
      badge: "J",
    },
  ],
};

const desktopVisibleCount = 3;
const desktopGap = "1rem";
const mobileGapSize = 1;
const desktopStops = Array.from(
  { length: Math.max(testimonialContent.items.length - desktopVisibleCount + 1, 1) },
  (_, index) => index
);

function TestimonialCard({ item }) {
  return (
    <article className="flex h-full min-h-[320px] flex-col justify-between rounded-2xl bg-[#123747] p-8 shadow-lg">
      <p className="text-base leading-relaxed text-foreground/[0.82]">"{item.quote}"</p>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-foreground/80">
          {item.badge}
        </div>
        <div>
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-xs text-foreground/60">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [activeStart, setActiveStart] = useState(0);
  const content = testimonialContent;
  const testimonials = content.items;
  const mobileMax = testimonials.length - 1;
  const desktopMaxStart = desktopStops.length - 1;
  const isFirstMobile = active === 0;
  const isLastMobile = active === mobileMax;
  const isFirstDesktop = activeStart === 0;
  const isLastDesktop = activeStart === desktopMaxStart;
  const mobileGapOffset = `${active * mobileGapSize}rem`;
  const mobileTrackStyle = {
    transform: `translateX(calc(-${active * 100}% - ${mobileGapOffset}))`,
  };
  const desktopTrackStyle = {
    "--testimonial-card-width": `calc((100% - (${desktopVisibleCount - 1} * ${desktopGap})) / ${desktopVisibleCount})`,
    transform: `translateX(calc(-1 * ${activeStart} * (var(--testimonial-card-width) + ${desktopGap})))`,
  };
  const desktopArrowClass =
    "absolute top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/10 text-foreground transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white/10";
  const mobileArrowClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-foreground/80 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white/10";

  const next = () => {
    setActive((value) => Math.min(value + 1, mobileMax));
  };
  const previous = () => {
    setActive((value) => Math.max(value - 1, 0));
  };
  const nextDesktop = () => {
    setActiveStart((value) => Math.min(value + 1, desktopMaxStart));
  };
  const previousDesktop = () => {
    setActiveStart((value) => Math.max(value - 1, 0));
  };
  const goToDesktopStart = (index) => {
    setActiveStart(index);
  };

  return (
    <section id="testimonials" className="bg-brand-dark px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex justify-center">
          <div className="relative inline-block text-center">
            <h2 className="text-3xl font-semibold tracking-normal md:text-5xl">{content.heading}</h2>
            <span className="signature pointer-events-none absolute -bottom-8 left-1/2 w-max -translate-x-1/2 text-4xl text-brand-light/90 md:-bottom-10 md:text-5xl">
              {content.signature}
            </span>
          </div>
        </Reveal>

        <div className="overflow-hidden md:hidden">
          <div
            className="flex gap-4 will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={mobileTrackStyle}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="w-full flex-none">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <button
            type="button"
            aria-label={content.previousLabel}
            onClick={previousDesktop}
            disabled={isFirstDesktop}
            className={`${desktopArrowClass} left-0 -translate-x-1/2 lg:-left-10`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={desktopTrackStyle}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="flex-none" style={{ width: "var(--testimonial-card-width)" }}>
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label={content.nextLabel}
            onClick={nextDesktop}
            disabled={isLastDesktop}
            className={`${desktopArrowClass} right-0 translate-x-1/2 lg:-right-10`}
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {desktopStops.map((start) => (
              <button
                key={start}
                type="button"
                aria-label={`${content.goToLabel} group ${start + 1}`}
                onClick={() => goToDesktopStart(start)}
                className={`h-2 rounded-full transition-all ${
                  start === activeStart ? "w-8 bg-foreground" : "w-2 bg-foreground/35 hover:bg-foreground/65"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            aria-label={content.previousLabel}
            onClick={previous}
            disabled={isFirstMobile}
            className={mobileArrowClass}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`${content.goToLabel} ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-8 bg-foreground" : "w-2 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
          <button
            type="button"
            aria-label={content.nextLabel}
            onClick={next}
            disabled={isLastMobile}
            className={mobileArrowClass}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
