import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-charcoal border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="grid h-9 w-9 place-items-center bg-primary text-primary-foreground font-display text-xl shadow-red">
                IF
              </span>
              <span className="text-headline text-lg font-bold tracking-widest">
                IRON<span className="text-primary">FORGE</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              No excuses. Only results. The home of warriors, athletes, and the relentless since 2014.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-headline text-sm tracking-[0.3em] text-primary mb-4">EXPLORE</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-foreground transition-colors">Programs</a></li>
              <li><a href="#trainers" className="hover:text-foreground transition-colors">Trainers</a></li>
              <li><a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-headline text-sm tracking-[0.3em] text-primary mb-4">VISIT</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Downtown Forge</li>
              <li>Westside Forge</li>
              <li>Mon–Sun · 5 AM — 12 AM</li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} IRONFORGE Athletics. All rights reserved.</p>
          <p className="tracking-widest text-headline">FORGED IN IRON · BUILT TO LAST</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
