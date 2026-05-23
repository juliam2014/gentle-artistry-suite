export function Newsletter() {
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
        <a
          href="https://juliabuildsfreedom.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-foreground text-background text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
        >
          Join My Email List
        </a>
      </div>
    </section>
  );
}
