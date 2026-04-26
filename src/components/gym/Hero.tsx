import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const Hero = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Athlete deadlifting in dark gym"
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(0_90%_55%/0.18),transparent_60%)]" />
      </div>

      {/* Decorative side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-headline text-xs tracking-[0.5em] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          EST · 2014 — IRONFORGE ATHLETICS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container-px mx-auto max-w-7xl flex flex-col justify-center">
        <div className="max-w-4xl">
          <p
            className="text-headline text-sm md:text-base text-primary mb-6 tracking-[0.4em] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            — NO EXCUSES. ONLY RESULTS.
          </p>
          <h1
            className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-bold leading-[0.95] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            TRANSFORM <br />
            YOUR BODY.
            <br />
            <span className="text-stroke-red">BUILD</span>{" "}
            <span className="text-primary text-glow-red">STRENGTH.</span>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "700ms" }}
          >
            Forged for warriors. Built for the relentless. Step inside the most uncompromising
            training facility in the city.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "900ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground text-headline font-bold tracking-widest px-8 py-4 animate-pulse-red hover:bg-primary/90 transition-all hover:translate-x-1"
            >
              JOIN NOW
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 text-headline font-bold tracking-widest px-8 py-4 border border-foreground/30 hover:border-primary hover:text-primary transition-colors"
            >
              EXPLORE PROGRAMS
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-[0.3em] text-headline">SCROLL</span>
        <ChevronDown className="animate-bounce" size={20} />
      </div>
    </section>
  );
};

export default Hero;
