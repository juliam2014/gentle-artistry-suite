import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Reserve your appointment online. View availability, select services, and receive automated confirmations.",
      },
      { property: "og:title", content: "Book Your Visit — Julia Marks Beauty" },
    ],
  }),
  component: BookingPage,
});

const serviceOptions = [
  "Signature Scalp Facial",
  "Signature Balayage",
  "Brunette Dimensional",
  "Structural Haircut",
  "Express Glow Facial",
  "Brow Shaping & Tint",
];

function getNextDays(count: number) {
  const days: Date[] = [];
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  for (let i = 1; i <= count; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d.getDay() === 0 || d.getDay() === 1) continue; // closed Sun/Mon
    days.push(d);
  }
  return days.slice(0, 8);
}

const timeSlots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

function BookingPage() {
  const [service, setService] = useState(serviceOptions[0]);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  const days = getNextDays(14);

  if (confirmed) {
    return (
      <>
        <PageHeader
          eyebrow="Reservation Confirmed"
          title="A quiet moment is yours."
          description="A confirmation has been sent to your inbox. We'll see you soon."
        />
        <section className="max-w-xl mx-auto px-6 pb-32 text-center">
          <div className="border border-foreground/10 p-10 space-y-3">
            <p className="eyebrow">Your Reservation</p>
            <p className="font-serif text-2xl">{service}</p>
            <p className="text-foreground/60">
              {date?.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}{" "}
              · {time}
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Reserve Your Experience"
        title="Book your visit."
        description="Choose your service, select a time, and we'll take care of the rest. Synced to Google Calendar and confirmed by email."
      />

      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Step 1 — service */}
          <div>
            <p className="eyebrow mb-6">01 — Choose Your Service</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setService(s)}
                  className={`text-left px-6 py-5 border transition-colors ${
                    service === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/15 hover:bg-beige/50"
                  }`}
                >
                  <span className="font-serif text-lg">{s}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 — date */}
          <div>
            <p className="eyebrow mb-6">02 — Select a Date</p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {days.map((d) => {
                const active = date?.toDateString() === d.toDateString();
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    onClick={() => setDate(d)}
                    className={`p-4 border text-center transition-colors ${
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/15 hover:bg-beige/50"
                    }`}
                  >
                    <span className="block text-[10px] uppercase tracking-luxe opacity-70">
                      {d.toLocaleDateString(undefined, { weekday: "short" })}
                    </span>
                    <span className="block font-serif text-xl mt-1">
                      {d.getDate()}
                    </span>
                    <span className="block text-[10px] uppercase tracking-luxe opacity-70 mt-1">
                      {d.toLocaleDateString(undefined, { month: "short" })}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 — time */}
          {date && (
            <div>
              <p className="eyebrow mb-6">03 — Select a Time</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`py-4 border text-sm transition-colors ${
                      time === t
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/15 hover:bg-beige/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 — details */}
          {date && time && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="space-y-8"
            >
              <p className="eyebrow">04 — Your Details</p>

              <div className="flex gap-6 text-[11px] uppercase tracking-luxe">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={guest}
                    onChange={() => setGuest(true)}
                    className="accent-foreground"
                  />
                  Guest Checkout
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={!guest}
                    onChange={() => setGuest(false)}
                    className="accent-foreground"
                  />
                  Create Account
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full Name" value={name} onChange={setName} required />
                <Field label="Email" type="email" value={email} onChange={setEmail} required />
                <Field label="Phone" type="tel" value={phone} onChange={setPhone} required />
                {!guest && <Field label="Create Password" type="password" value="" onChange={() => {}} />}
              </div>

              <div className="border border-foreground/10 p-6 space-y-2 bg-beige/30">
                <p className="eyebrow">Reservation Summary</p>
                <p className="font-serif text-2xl">{service}</p>
                <p className="text-foreground/70 text-sm">
                  {date.toLocaleDateString(undefined, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {time}
                </p>
                <p className="text-foreground/50 text-xs pt-2">
                  A 25% deposit is collected to confirm your reservation.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-foreground text-background text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
              >
                Confirm & Pay Deposit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

function Field({ label, value, onChange, type = "text", required }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-luxe text-foreground/50 mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none text-sm"
      />
    </label>
  );
}
