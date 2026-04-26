import { Instagram } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";

const trainers = [
  { img: t1, name: "Marcus Steel", spec: "Strength & Powerlifting" },
  { img: t2, name: "Sofia Cruz", spec: "HIIT & Conditioning" },
  { img: t3, name: "Viktor Hale", spec: "CrossFit & Olympic Lifts" },
  { img: t4, name: "Ayla Reign", spec: "Personal Training" },
];

const Trainers = () => {
  return (
    <section id="trainers" className="relative py-24 md:py-32 container-px mx-auto max-w-7xl">
      <div className="text-center mb-16 reveal">
        <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— MEET THE COACHES</p>
        <h2 className="text-display text-5xl md:text-7xl leading-none">
          BEHIND EVERY ATHLETE, <br /> AN <span className="text-primary">EXPERT.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((t, i) => (
          <div
            key={t.name}
            className={`group relative overflow-hidden bg-card border border-border ${
              i % 2 === 0 ? "reveal-left" : "reveal-right"
            }`}
            data-reveal-delay={i * 120}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={t.img}
                alt={t.name}
                width={768}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs text-headline text-primary tracking-[0.3em] mb-2">
                0{i + 1}
              </p>
              <h3 className="text-headline text-2xl font-bold leading-tight">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.spec}</p>
              <div className="mt-4 flex items-center gap-3 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <a href="#" className="grid h-9 w-9 place-items-center bg-primary text-primary-foreground hover:scale-110 transition-transform" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <span className="text-xs text-headline tracking-widest text-muted-foreground">@ironforge</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
