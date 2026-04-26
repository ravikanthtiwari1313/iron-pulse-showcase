import { MapPin, Phone, Clock } from "lucide-react";

const branches = [
  {
    name: "Downtown Forge",
    address: "1247 Iron Avenue, Downtown District",
    phone: "+1 (555) 014-7700",
    hours: "Mon–Sun · 5:00 AM — 12:00 AM",
  },
  {
    name: "Westside Forge",
    address: "88 Steelworks Boulevard, West Quarter",
    phone: "+1 (555) 014-7788",
    hours: "Mon–Sun · 5:30 AM — 11:00 PM",
  },
];

const MapTile = () => (
  <div className="relative h-48 w-full overflow-hidden bg-charcoal">
    {/* Stylized "map" placeholder using gradients + grid */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(0_0%_8%),hsl(0_0%_4%))]" />
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 18%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 18%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,hsl(0_90%_55%/0.25),transparent_55%)]" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <span className="absolute inset-0 -m-3 rounded-full bg-primary/30 animate-ping" />
        <span className="relative grid place-items-center h-8 w-8 rounded-full bg-primary text-primary-foreground shadow-red">
          <MapPin size={16} />
        </span>
      </div>
    </div>
  </div>
);

const Locations = () => {
  return (
    <section id="locations" className="relative py-24 md:py-32 container-px mx-auto max-w-7xl">
      <div className="text-center mb-16 reveal">
        <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— FIND US</p>
        <h2 className="text-display text-5xl md:text-7xl leading-none">
          TWO LOCATIONS. <br /> ONE <span className="text-primary">MISSION.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {branches.map((b, i) => (
          <div
            key={b.name}
            className="reveal group bg-gradient-card border border-border overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-1 hover:shadow-red"
            data-reveal-delay={i * 150}
          >
            <MapTile />
            <div className="p-8">
              <h3 className="text-headline text-2xl font-bold mb-1">{b.name}</h3>
              <div className="h-0.5 w-10 bg-primary mb-5 group-hover:w-20 transition-all duration-500" />
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>{b.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>{b.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>{b.hours}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
