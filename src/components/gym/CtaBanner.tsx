import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cta-animated opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent,hsl(0_0%_0%/0.6))]" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 0% / 0.6) 1px, transparent 1px)",
          backgroundSize: "100% 4px",
        }}
      />

      <div className="relative container-px mx-auto max-w-5xl text-center">
        <p className="text-headline text-sm md:text-base tracking-[0.4em] text-background/80 mb-6 reveal">
          — STOP WAITING. START FORGING.
        </p>
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-background leading-[0.9] reveal" data-reveal-delay="100">
          START YOUR FITNESS <br /> JOURNEY <span className="text-stroke" style={{ WebkitTextStroke: "1.5px hsl(0 0% 100%)" }}>TODAY.</span>
        </h2>
        <p className="mt-6 text-background/85 max-w-2xl mx-auto text-base md:text-lg reveal" data-reveal-delay="200">
          Claim your free 7-day trial. Train with our elite coaches. Feel the difference from day one.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 reveal" data-reveal-delay="300">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-background text-foreground text-headline font-bold tracking-widest px-9 py-4 hover:bg-foreground hover:text-background transition-all"
          >
            JOIN NOW
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 text-headline font-bold tracking-widest px-9 py-4 border border-background/60 text-background hover:bg-background/10 transition-colors"
          >
            VIEW PROGRAMS
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
