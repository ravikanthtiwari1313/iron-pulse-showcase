import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      toast.success("Welcome to the forge.", {
        description: "We'll be in touch within 24 hours.",
      });
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  const baseInput =
    "w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-all duration-300 focus:[box-shadow:0_2px_0_-1px_hsl(var(--primary))]";

  return (
    <section id="contact" className="relative py-24 md:py-32 container-px mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-2 reveal-left">
          <p className="text-headline text-primary text-sm tracking-[0.4em] mb-4">— GET IN TOUCH</p>
          <h2 className="text-display text-5xl md:text-6xl leading-none mb-6">
            READY TO <br /> <span className="text-primary">FORGE</span> YOURSELF?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Drop us a line. Our coaches will reach out within 24 hours to schedule your free
            consultation and walkthrough.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground tracking-widest text-headline">EMAIL</span>
              <span>hello@ironforge.gym</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground tracking-widest text-headline">PHONE</span>
              <span>+1 (555) 014-7700</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 reveal-right space-y-2">
          <div>
            <label className="text-headline text-xs tracking-[0.3em] text-muted-foreground">NAME</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className={baseInput}
            />
          </div>
          <div>
            <label className="text-headline text-xs tracking-[0.3em] text-muted-foreground">PHONE</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className={baseInput}
            />
          </div>
          <div>
            <label className="text-headline text-xs tracking-[0.3em] text-muted-foreground">MESSAGE</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your goals…"
              className={`${baseInput} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground text-headline font-bold tracking-widest px-9 py-4 hover:bg-primary/90 disabled:opacity-70 transition-all hover:shadow-red-lg active:scale-95"
          >
            {sent ? (
              <>
                MESSAGE SENT
                <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                {submitting ? "SENDING…" : "SEND MESSAGE"}
                <Send className="transition-transform group-hover:translate-x-1" size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
