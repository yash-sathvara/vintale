'use client';

import { useState } from 'react';
import { Icon } from './Icons';
import { useCart } from './CartProvider';

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#story' },
  { label: 'Journal', href: '#craft' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ compact = false }: { compact?: boolean }) {
  const [menu, setMenu] = useState(false);
  const cart = useCart();

  return (
    <header className="relative z-30 w-full pt-8 pb-4">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          aria-label="Vintale Home"
          className="flex items-center gap-2 font-display text-[28px] md:text-[32px] font-bold tracking-tight text-ink hover:opacity-90 transition-opacity select-none"
        >
          <Icon name="wine" className="h-[30px] w-[26px]" />
          <span>Vintale</span>
        </a>

        {/* Center Navigation Links (Centered in the viewport) */}
        <nav
          aria-label={compact ? 'Promotion Navigation' : 'Main Navigation'}
          className={`${compact
              ? 'hidden md:flex items-center gap-10 text-[15px] font-medium text-ink/85'
              : 'hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] font-medium text-ink/85'
            }`}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Icon Actions (Desktop 2) */}
        {!compact ? (
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={cart.open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f0f2] text-ink transition-colors hover:bg-blush hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink"
              aria-label={`Open shopping bag, ${cart.count} items`}
            >
              <Icon name="cart" className="h-5 w-5" />
              {cart.count > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink px-1 text-[10px] font-bold text-white shadow-sm">
                  {cart.count}
                </span>
              )}
            </button>

            <a
              href="#story"
              aria-label="About Vintale"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f0f2] text-ink transition-colors hover:bg-blush hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink"
            >
              <Icon name="user" className="h-5 w-5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f0f2] text-ink md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              <Icon name={menu ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        ) : (
          /* Mobile menu toggle for compact navbar */
          <div className="md:hidden">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f0f2] text-ink"
              aria-label="Toggle menu"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              <Icon name={menu ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile navigation drawer */}
      {menu && (
        <nav
          aria-label="Mobile Navigation Drawer"
          className="mt-4 flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-2xl border border-blush md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenu(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-ink transition-colors hover:bg-blush hover:text-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
