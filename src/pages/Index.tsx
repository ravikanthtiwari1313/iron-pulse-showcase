import { useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/gym/Navbar";
import Hero from "@/components/gym/Hero";
import Marquee from "@/components/gym/Marquee";
import About from "@/components/gym/About";
import Programs from "@/components/gym/Programs";
import Trainers from "@/components/gym/Trainers";
import Gallery from "@/components/gym/Gallery";
import Locations from "@/components/gym/Locations";
import Testimonials from "@/components/gym/Testimonials";
import CtaBanner from "@/components/gym/CtaBanner";
import Contact from "@/components/gym/Contact";
import Footer from "@/components/gym/Footer";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "IRONFORGE — Transform Your Body. Build Your Strength.";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    (meta as HTMLMetaElement).content =
      "IRONFORGE is the city's most uncompromising training facility. Elite coaching, premium equipment, two locations. Join the forge.";
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Trainers />
      <Gallery />
      <Locations />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
