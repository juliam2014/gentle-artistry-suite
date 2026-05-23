import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";

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
    </>
  );
}
