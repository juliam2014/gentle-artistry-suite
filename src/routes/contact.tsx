import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Visit the studio in Austin, Texas. Hours, contact form, FAQ, and booking inquiries.",
      },
      { property: "og:title", content: "Contact — Julia Marks Beauty" },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "What is your cancellation policy?",
    a: "We kindly ask for 48 hours' notice for cancellations or rescheduling. Deposits become non-refundable inside that window.",
  },
  {
    q: "Do you offer consultations?",
    a: "Yes — complimentary 15-minute consultations are available for color, scalp, and skincare services.",
  },
  {
    q: "Are products available in-studio?",
    a: "Our full collection is available in-studio and online. We're happy to recommend a personalized routine after your service.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "All services are by appointment to ensure each guest receives our full attention and care.",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="Say Hello"
        title="We'd love to hear from you."
        description="Reach out about appointments, products, consultations, or simply to begin a conversation."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Contact form */}
          <div>
            {sent ? (
              <div className="border border-foreground/10 p-10 text-center bg-beige/40">
                <p className="eyebrow mb-4">Message Received</p>
                <p className="font-serif italic text-2xl mb-2">Thank you.</p>
                <p className="text-foreground/60 text-sm">
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <Field label="Full Name" id="name" required />
                <Field label="Email" id="email" type="email" required />
                <Field label="Phone (optional)" id="phone" type="tel" />
                <label className="block">
                  <span className="block text-[10px] uppercase tracking-luxe text-foreground/50 mb-2">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none text-sm resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-4 bg-foreground text-background text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Studio info */}
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-3">The Studio</p>
              <p className="font-serif text-2xl leading-snug">
                1242 Serenity Lane<br />
                Austin, Texas 78701
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Hours</p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex justify-between"><span>Tuesday — Friday</span><span>10:00 — 19:00</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>10:00 — 17:00</span></li>
                <li className="flex justify-between"><span>Sunday — Monday</span><span>Closed</span></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Contact</p>
              <p className="text-foreground/70">hello@auraandessence.com</p>
              <p className="text-foreground/70">512.555.0198</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Social</p>
              <div className="flex gap-6 text-[11px] uppercase tracking-luxe">
                <a href="#" className="border-b border-foreground/20 hover:border-foreground pb-1">Instagram</a>
                <a href="#" className="border-b border-foreground/20 hover:border-foreground pb-1">TikTok</a>
                <a href="#" className="border-b border-foreground/20 hover:border-foreground pb-1">Pinterest</a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="aspect-[16/7] overflow-hidden border border-foreground/10">
            <iframe
              title="Julia Marks Beauty Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27583.55!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAyLjAiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1700000000000"
              className="w-full h-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-8 bg-beige/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-6">FAQ</span>
            <h2 className="font-serif italic text-4xl md:text-5xl">Common questions</h2>
          </div>
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="font-serif text-xl pr-6">{f.q}</span>
                  <span className="text-2xl font-light">{openIdx === i ? "–" : "+"}</span>
                </button>
                {openIdx === i && (
                  <p className="pb-6 text-foreground/65 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[10px] uppercase tracking-luxe text-foreground/50 mb-2">
        {label}
      </span>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none text-sm"
      />
    </label>
  );
}
