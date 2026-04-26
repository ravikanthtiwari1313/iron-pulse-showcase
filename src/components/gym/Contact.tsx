import { useEffect } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkokeqvv");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Welcome to the forge.", {
        description: "We'll be in touch within 24 hours.",
      });
    }
  }, [state.succeeded]);

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

        <form onSubmit={handleSubmit} className="lg:col-span-3 reveal-right space-y-2">
          <div>
            <label htmlFor="name" className="text-headline text-xs tracking-[0.3em] text-muted-foreground">
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className={baseInput}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-primary text-xs mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="text-headline text-xs tracking-[0.3em] text-muted-foreground">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={baseInput}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-primary text-xs mt-1" />
          </div>

          <div>
            <label htmlFor="phone" className="text-headline text-xs tracking-[0.3em] text-muted-foreground">
              PHONE
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className={baseInput}
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-primary text-xs mt-1" />
          </div>

          <div>
            <label htmlFor="message" className="text-headline text-xs tracking-[0.3em] text-muted-foreground">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your goals…"
              className={`${baseInput} resize-none`}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-primary text-xs mt-1" />
          </div>

          {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="flex items-center gap-2 text-primary text-sm pt-2">
              <AlertCircle size={16} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className="group mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground text-headline font-bold tracking-widest px-9 py-4 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:shadow-red-lg active:scale-95"
          >
            {state.succeeded ? (
              <>
                MESSAGE SENT
                <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                {state.submitting ? "SENDING…" : "SEND MESSAGE"}
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
