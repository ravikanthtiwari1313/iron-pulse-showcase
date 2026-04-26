const items = ["STRENGTH", "POWER", "ENDURANCE", "DISCIPLINE", "GRIT", "SPEED", "FOCUS", "WARRIOR"];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-charcoal py-5 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-ticker">
        {row.map((w, i) => (
          <span key={i} className="text-display text-3xl md:text-5xl text-stroke flex items-center gap-12">
            {w}
            <span className="inline-block h-2 w-2 bg-primary rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
