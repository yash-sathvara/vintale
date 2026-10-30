'use client';

import { motion } from 'motion/react';
import Navbar from './Navbar';
import { DiscountBadge, ShopButton } from './ShopButton';

export default function HeritageHero() {
  return (
    <section
      id="home"
      aria-labelledby="heritage-title"
      className="relative isolate w-full h-[1024px] max-w-[1440px] mx-auto overflow-hidden bg-white px-6 sm:px-10 lg:px-[90px]"
    >
      {/* Top Brand Navbar */}
      <Navbar />

      {/* Main Massive Title "Taste Heritage" */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 top-[130px] z-10 w-full text-center pointer-events-none select-none px-4"
      >
        <h1
          id="heritage-title"
          className="font-display mx-auto text-center font-semibold text-[88px] sm:text-[130px] md:text-[160px] lg:text-[196px] tracking-[0.01em] leading-[0.82] text-ink"
        >
          Taste<br />Heritage
        </h1>
      </motion.div>

      {/* Concentric Pink Circle & Ring Graphic — centered horizontally, sits in lower half */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 top-[480px] pointer-events-none -z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        {/* Outer Thin Ring (Diameter 900px, 1.5px pink border) */}
        <div className="h-[900px] w-[900px] rounded-full border-[1.5px] border-pink flex items-center justify-center">
          {/* Inner Solid Magenta Circle (Diameter 808px) */}
          <div className="h-[808px] w-[808px] rounded-full bg-pink" />
        </div>
      </motion.div>

      {/* Left Promotional Narrative Copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="hidden md:block absolute left-[90px] top-[560px] z-20 w-[320px]"
      >
        <p className="font-sans text-[16px] lg:text-[17px] leading-[1.62] text-ink font-normal">
          Discover artisanal wines curated from<br />
          vineyards around the world. Every<br />
          bottle tells a story that is smooth,<br />
          bold and timeless.
        </p>
      </motion.div>

      {/* Right 12-point Discount Starburst Seal */}
      <motion.div
        initial={{ scale: 0, rotate: -25, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 20, delay: 0.45 }}
        className="absolute right-[120px] sm:right-[152px] top-[520px] sm:top-[540px] z-20"
      >
        <DiscountBadge className="w-[148px] sm:w-[160px] lg:w-[172px] h-[148px] sm:h-[160px] lg:h-[170px]" />
      </motion.div>

      {/* Right "Shop Now ↗" Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        className="absolute right-[56px] bottom-[80px] z-20"
      >
        <ShopButton className="w-[196px] h-[72px] text-[17px]" />
      </motion.div>
    </section>
  );
}
