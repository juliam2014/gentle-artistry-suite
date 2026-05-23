import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { VAGARO_BOOKING_URL } from "@/lib/booking";

const links = [
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/education", label: "Education" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="font-serif italic text-2xl tracking-tight shrink-0"
          aria-label="Julia Marks Beauty home"
        >
          Julia Marks Beauty
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-luxe font-medium hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/booking"
          className="hidden lg:inline-block bg-foreground text-background px-5 py-2.5 text-[11px] uppercase tracking-luxe font-medium hover:bg-accent transition-colors"
        >
          Book Now
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-luxe"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="bg-foreground text-background text-center px-5 py-3 text-[11px] uppercase tracking-luxe font-medium mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
