import { Dumbbell, HeartPulse, User2, Flame } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Weight Training",
    desc: "Build raw strength and lean mass with structured lifting protocols and elite equipment.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Conditioning",
    desc: "High-intensity sessions engineered to torch fat and elevate your aerobic ceiling.",
  },
  {
    icon: User2,
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to your goals, your body, and your relentless ambition.",
  },
  {
    icon: Flame,
    title: "CrossFit",
    desc: "Functional, explosive, brutal. Forged for athletes who demand to be tested.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="relative py-24 md:py-32 bg-charcoal">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— OUR PROGRAMS</p>
            <h2 className="text-display text-5xl md:text-7xl leading-none">
              CHOOSE YOUR <br />
              <span className="text-primary">BATTLEFIELD.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md reveal" data-reveal-delay="200">
            Every program is built on years of coaching expertise and engineered for measurable,
            uncompromising results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative bg-gradient-card border border-border p-8 overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-red-lg"
              data-reveal-delay={i * 120}
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p.icon className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" size={42} />
              <h3 className="text-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-8 h-1 w-10 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
