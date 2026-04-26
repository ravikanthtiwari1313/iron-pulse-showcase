import { useCountUp } from "@/hooks/useCountUp";

const Stat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { value: v, ref } = useCountUp(value);
  return (
    <div className="text-center md:text-left">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="text-display text-6xl md:text-7xl text-primary text-glow-red">
        {v}
        {suffix}
      </div>
      <div className="text-headline text-sm text-muted-foreground mt-2 tracking-widest">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 container-px mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left">
          <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— ABOUT IRONFORGE</p>
          <h2 className="text-display text-5xl md:text-7xl leading-none mb-6">
            WE DON'T TRAIN <br />
            <span className="text-stroke-red">BODIES.</span> WE FORGE
            <span className="text-primary"> LEGACIES.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            For over a decade, IRONFORGE has been the home of athletes, fighters, and everyday heroes
            chasing something more than a workout. State-of-the-art equipment, world-class coaching,
            and a culture that refuses to settle.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            This is not a gym. It is a forge. Show up. Burn out. Rise stronger.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 reveal-right" data-reveal-delay="150">
          <Stat value={1500} suffix="+" label="Active Members" />
          <Stat value={20} suffix="+" label="Elite Trainers" />
          <Stat value={10} suffix="+" label="Years Experience" />
          <Stat value={50} suffix="K" label="Workouts Logged" />
        </div>
      </div>
    </section>
  );
};

export default About;
