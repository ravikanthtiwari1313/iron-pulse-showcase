import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    quote:
      "IRONFORGE rewired my entire approach to training. Six months in, I'm stronger, sharper and more disciplined than I've ever been.",
    name: "Daniel Reyes",
    role: "Member · 2 years",
  },
  {
    quote:
      "The coaching here is in another league. Every session feels engineered. Every PR feels earned. There is no other gym for me.",
    name: "Priya Anand",
    role: "Competitive Athlete",
  },
  {
    quote:
      "Walking in here changed how I show up everywhere else. The energy, the people, the standard — it's electric.",
    name: "Jordan Mitchell",
    role: "Member · 3 years",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % reviews.length);
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(0_90%_55%/0.12),transparent_60%)]" />

      <div className="container-px mx-auto max-w-4xl relative">
        <div className="text-center mb-12 reveal">
          <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— TESTIMONIALS</p>
          <h2 className="text-display text-5xl md:text-7xl leading-none">
            VOICES FROM <br /> THE <span className="text-primary">FORGE.</span>
          </h2>
        </div>

        <div className="relative reveal" data-reveal-delay="200">
          <Quote className="absolute -top-8 left-0 text-primary/20" size={120} />
          <div className="relative min-h-[220px]">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <blockquote className="text-xl md:text-3xl font-headline leading-snug text-center">
                  "{r.quote}"
                </blockquote>
                <div className="mt-8 text-center">
                  <p className="text-headline text-primary tracking-widest font-bold">{r.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{r.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid place-items-center h-11 w-11 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 transition-all ${
                    idx === i ? "w-10 bg-primary" : "w-5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="grid place-items-center h-11 w-11 border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
