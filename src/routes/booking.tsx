import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import salonSpace1 from "@/assets/salon-space-1.jpg";
import salonSpace2 from "@/assets/salon-space-2.jpg";
import salonSpace3 from "@/assets/salon-space-3.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Reserve your appointment with Julia Marks Beauty through our Vagaro booking page.",
      },
      { property: "og:title", content: "Book Your Visit — Julia Marks Beauty" },
      {
        property: "og:description",
        content: "Browse availability and reserve your appointment on Vagaro.",
      },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reserve Your Experience"
        title="Book your visit."
        description="All appointments are booked through Vagaro — view live availability, select your service, and receive instant confirmation."
      />

      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="border border-foreground/10 p-10 md:p-14 space-y-6 bg-beige/30">
            <p className="eyebrow">Online Booking</p>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-tight">
              Continue to Vagaro to reserve your appointment.
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              You'll be redirected to our secure Vagaro booking portal where
              you can choose your service, stylist, date, and time.
            </p>
            <a
              href={VAGARO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-background px-12 py-5 text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
            >
              Book on Vagaro →
            </a>
          </div>

          <div className="text-sm text-foreground/60 space-y-2">
            <p>
              <span className="eyebrow block mb-2">Studio Hours</span>
              Monday – Friday · 9:00 AM – 3:30 PM
            </p>
            <p className="pt-4">
              Prefer to book by phone or have a question?{" "}
              <a
                href="mailto:juliamarksbeauty@gmail.com"
                className="border-b border-foreground hover:text-accent"
              >
                juliamarksbeauty@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="eyebrow">The Studio</p>
            <h2 className="font-serif italic text-3xl md:text-5xl leading-tight">
              A quiet, intentional space.
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Warm light, soft textures, and a private atmosphere designed for
              you to slow down and feel cared for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: salonSpace1, label: "The Lounge" },
              { src: salonSpace3, label: "The Chair" },
              { src: salonSpace2, label: "The Wash" },
            ].map((p) => (
              <figure key={p.label} className="space-y-3">
                <div className="aspect-[3/4] overflow-hidden bg-beige/40">
                  <img
                    src={p.src}
                    alt={`Julia Marks Beauty studio — ${p.label}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <figcaption className="eyebrow text-center">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
