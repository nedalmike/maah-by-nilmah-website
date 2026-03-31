"use client";

const shopLinks = ["New Arrivals", "Abayas", "Dresses", "Hijabs", "Modest Sets", "Sale"];
const helpLinks = ["Size Guide", "Shipping & Delivery", "Returns & Exchanges", "Track Order", "Contact Us", "FAQ"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal pt-20 pb-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-16 border-b border-cream/10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-2xl text-cream tracking-[0.2em]">MAAH</span>
              <span className="text-sand/50 text-xs tracking-[0.15em] ml-1.5">by Nilmah</span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-6 max-w-xs">
              Where Modesty Meets Modernity. Luxury modest fashion crafted in Dubai for women worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/40 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-cream/40 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-cream/40 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 21l3-11M15.5 8.5a3.5 3.5 0 1 1-3 5.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-medium mb-6">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/40 text-sm hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-medium mb-6">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/40 text-sm hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-xs tracking-[0.2em] uppercase font-medium mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/40 text-sm hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["Visa", "Mastercard", "Apple Pay", "Tabby", "Tamara"].map((method) => (
              <span key={method} className="text-cream/25 text-[10px] tracking-[0.15em] uppercase border border-cream/10 px-3 py-1.5 rounded-sm">
                {method}
              </span>
            ))}
          </div>
          <p className="text-cream/25 text-xs tracking-wider">&copy; 2026 MAAH by Nilmah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
