import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutPhoto from "../assets/site-about-photo.png?inline";
import Reveal from "./Reveal.jsx";

export default function About({ applyUrl }) {
  const [expanded, setExpanded] = useState(false);
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-7.5%", "7.5%"]);

  return (
    <section id="about" className="-mt-px bg-[#123747] px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div ref={photoRef} className="relative mx-auto flex max-w-[560px] items-center justify-center py-8 md:py-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(47,121,156,0.15) 0%, rgba(47,121,156,0.07) 38%, transparent 70%)",
                }}
              />

              <motion.div
                style={{
                  y: photoY,
                  backgroundImage:
                    "linear-gradient(to right, rgba(110,191,224,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(110,191,224,0.1) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
                className="group relative z-10 aspect-square w-full max-w-[480px] overflow-visible rounded-[16px] border border-[rgba(110,191,224,0.15)] bg-[#1a4a63] shadow-2xl transition-colors duration-[400ms] ease-out hover:border-[rgba(110,191,224,0.3)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-[20px] border border-[rgba(110,191,224,0.08)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-[24px] border border-[rgba(110,191,224,0.04)]"
                />
                <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                  <img
                    src={aboutPhoto}
                    alt="Man standing beside a black sports car at night"
                    loading="lazy"
                    className="absolute left-1/2 top-1/2 z-10 w-[85%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-[400ms] ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 right-4 z-20 rounded-lg border border-[rgba(110,191,224,0.2)] bg-[rgba(15,40,55,0.85)] px-3.5 py-2 text-left shadow-[0_14px_35px_rgba(0,0,0,0.32)] backdrop-blur-md">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#6ebfe0]">EST. 2026</p>
                    <p className="mt-1 text-[0.85rem] font-semibold leading-none text-white">Built by operators.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.16}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand-light">[ About Us ]</p>
            <h2 className="text-4xl font-semibold tracking-normal md:text-6xl">
              A small team obsessed with{" "}
              <span className="font-serif italic font-normal text-foreground/85">compounding growth.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-6 text-base leading-relaxed text-foreground/70 md:text-lg">
              <p>
                Most brand owners are surrounded by activity but short on clarity. Lots of campaigns, lots of creative, lots of reports, and still no confident answer for what is moving the business.
              </p>
              {expanded && (
                <p>
                  Rein Lab partners with e-commerce and fashion brands that want strategy, creative, and performance to work as one system. We map the numbers, shape the message, and build the operating cadence that turns momentum into measurable growth.
                </p>
              )}
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="text-sm font-medium text-brand-light transition hover:text-foreground"
              >
                {expanded ? "Read less" : "Read more ->"}
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={applyUrl}
            className="inline-flex items-center justify-center rounded-full bg-surface-base px-8 py-4 text-sm font-medium text-foreground shadow-lg transition hover:scale-105 hover:bg-surface-deep"
          >
            Apply Now -&gt;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
