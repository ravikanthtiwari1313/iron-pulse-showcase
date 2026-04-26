import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, label: "Iron Lab", span: "md:col-span-2 md:row-span-2" },
  { src: g2, label: "Conditioning Floor", span: "" },
  { src: g3, label: "Combat Zone", span: "" },
  { src: g4, label: "Cardio Deck", span: "md:col-span-2" },
  { src: g5, label: "Olympic Platform", span: "" },
  { src: g6, label: "Kettlebell Pit", span: "" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-charcoal">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="reveal">
            <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— INSIDE THE FORGE</p>
            <h2 className="text-display text-5xl md:text-7xl leading-none">
              WHERE <span className="text-primary">SWEAT</span> <br /> MEETS STEEL.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden ${img.span}`}
              data-reveal-delay={i * 100}
            >
              <img
                src={img.src}
                alt={img.label}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-primary transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs text-headline tracking-[0.3em] text-primary">0{i + 1}</p>
                <p className="text-headline text-lg font-bold">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
