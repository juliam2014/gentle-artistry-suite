import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-beige/40">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow">The Ritual List</span>
        <h2 className="font-serif text-4xl md:text-5xl italic mt-6 mb-6 leading-tight">
          Beauty wisdom, gently delivered.
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto mb-10">
          Monthly self-care rituals, scalp health insights, and first access to new
          collections and limited workshops.
        </p>
        {submitted ? (
          <p className="text-sm uppercase tracking-luxe text-accent">
            Welcome to the sanctuary.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
            className="flex max-w-md mx-auto border-b border-foreground/20 focus-within:border-foreground transition-colors"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent py-4 outline-none text-sm placeholder:text-foreground/40"
            />
            <button
              type="submit"
              className="text-[11px] uppercase tracking-luxe font-semibold px-4"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
