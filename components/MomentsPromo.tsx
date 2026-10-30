'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Icon } from './Icons';
import { DiscountBadge, ShopButton } from './ShopButton';

const NAV_LINKS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#story' },
  { label: 'Journal', href: '#craft' },
  { label: 'Contact', href: '#contact' },
];

export default function MomentsPromo() {
  return (
    <section
      aria-labelledby="moments-title"
      className="relative isolate min-h-[960px] lg:h-[1024px] w-full overflow-hidden bg-white px-6 sm:px-12 lg:px-[94.5px] pt-12 lg:pt-[84px] pb-16 flex flex-col justify-between"
    >
      {/* Top Header matching Desktop - 6 (Logo with stacked nav links directly below) */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-col items-start"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          aria-label="Vintale Home"
          className="inline-flex items-center gap-2.5 font-display text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-ink hover:opacity-90 transition-opacity select-none"
        >
          <Icon name="wine" className="h-[30px] w-[26px] md:h-[34px] md:w-[29px]" />
          <span>Vintale</span>
        </a>

        {/* Navigation Links stacked directly underneath */}
        <nav
          aria-label="Moments Navigation"
          className="flex items-center gap-6 sm:gap-9 md:gap-11 mt-4 sm:mt-5 text-[14px] sm:text-[15px] font-medium text-ink/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.header>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center my-8 lg:my-0 lg:pt-4">
        {/* Massive 3-line Headline: Line 1 ink, Line 2 pink, Line 3 ink */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[850px] mb-10 sm:mb-12 lg:mb-14"
        >
          <h2
            id="moments-title"
            className="font-display font-bold text-[72px] sm:text-[110px] md:text-[145px] lg:text-[170px] tracking-[-0.055em] leading-[0.85] select-none"
          >
            <span className="block text-ink">Let the</span>
            <span className="block text-pink">Moments</span>
            <span className="block text-ink">Pour.</span>
          </h2>
        </motion.div>

        {/* Action Row: Shop Now CTA Button + 12-point Discount Starburst */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-0"
        >
          <ShopButton className="shadow-2xl" />

          {/* Starburst 25% OFF badge — sits to the right of Shop Now, roughly below "Moments" */}
          <div className="lg:absolute lg:left-[320px] lg:top-[-20px]">
            <DiscountBadge className="w-[125px] sm:w-[145px] lg:w-[160px] h-[125px] sm:h-[145px] lg:h-[160px]" />
          </div>
        </motion.div>
      </div>

      {/* Large Blossom Rosé Bottle on right side — tilted ~-13deg, occupying right ~55% of the frame */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute pointer-events-none select-none z-0 right-[-60px] sm:right-[-20px] md:right-0 lg:right-[-40px] top-[-60px] sm:top-[-80px] lg:top-[-100px]"
        aria-hidden="true"
      >
        <div className="-rotate-[13deg] origin-top-right">
          <Image
            src="/bottles/rose-large.svg"
            alt="Blossom Rosé wine ready to pour"
            width={922}
            height={1004}
            priority
            className="w-[520px] sm:w-[680px] md:w-[820px] lg:w-[960px] h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
