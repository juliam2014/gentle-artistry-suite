import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="pt-24 md:pt-32 pb-12 px-6 lg:px-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-2">
            <p className="font-serif italic text-4xl mb-6">Aura & Essence</p>
            <p className="max-w-xs text-foreground/60 text-sm leading-relaxed mb-8">
              Cultivating confidence through intentional beauty, scalp health, and
              educational wellness practices.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/40 hover:text-accent transition-colors uppercase tracking-luxe text-[10px]">Instagram</a>
              <a href="#" className="text-foreground/40 hover:text-accent transition-colors uppercase tracking-luxe text-[10px]">TikTok</a>
              <a href="#" className="text-foreground/40 hover:text-accent transition-colors uppercase tracking-luxe text-[10px]">Pinterest</a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-luxe mb-6 font-semibold">Visit</p>
            <ul className="space-y-3 text-sm text-foreground/60 leading-relaxed">
              <li>1242 Serenity Lane<br />Austin, Texas 78701</li>
              <li className="pt-3 text-foreground/50">Tue — Sat<br />10:00 — 18:00</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-luxe mb-6 font-semibold">Explore</p>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/shop" className="hover:text-foreground">Shop</Link></li>
              <li><Link to="/booking" className="hover:text-foreground">Booking</Link></li>
              <li><Link to="/education" className="hover:text-foreground">Education</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-border">
          <p className="text-[10px] text-foreground/40 uppercase tracking-luxe">
            © {new Date().getFullYear()} Aura & Essence. All Rights Reserved.
          </p>
          <p className="text-[10px] text-foreground/40 uppercase tracking-luxe">
            Designed for Radiance
          </p>
        </div>
      </div>
    </footer>
  );
}
