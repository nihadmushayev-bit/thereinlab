const brands = [
  "PROFIT-FIRST SCALE",
  "PERFORMANCE CREATIVE",
  "PAID GROWTH",
  "RETENTION SYSTEMS",
  "MARGIN CLARITY",
  "DATA TRACKING",
  "OFFER STRATEGY",
  "CREATIVE TESTING",
  "FASHION GROWTH",
  "CMO PARTNER",
];

export default function Marquee() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-surface-base/20 py-8 backdrop-blur-sm">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex h-12 min-w-[128px] items-center justify-center opacity-60 transition hover:opacity-95"
            >
              <span className="mr-3 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              <span className="text-xl font-black uppercase tracking-[-0.04em] text-foreground/75 md:text-2xl">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
