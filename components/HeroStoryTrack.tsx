'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import HeritageHero from './HeritageHero';
import StorySection from './StorySection';
import BenefitsSection from './BenefitsSection';
import WineVault from './WineVault';
import MomentsPromo from './MomentsPromo';

/**
 * HeroStoryTrack (Unified 5-Section Bottle Scroll Animation)
 *
 * Implements the complete continuous bottle animation from the reference video
 * across ALL five sections:
 *
 * 1. Hero (0.00 - 0.05):
 *    - Tilted at -13°, resting bottom-center inside the concentric pink circle.
 *
 * 2. Hero -> Story (0.05 - 0.22):
 *    - Smoothly rotates from -13° to 0° (upright) and moves to the exact vertical
 *      and horizontal center between "Timeless Craft" and "About Vintale".
 *
 * 3. Story Rest (0.22 - 0.28):
 *    - Upright at 0°, center position.
 *
 * 4. Story -> Benefits (0.28 - 0.47):
 *    - Glides upward to y = -24vh so its base docks at the apex of the pink dome,
 *      with the 5 circular trust badges fanning out below.
 *
 * 5. Benefits Rest (0.47 - 0.53):
 *    - Upright at 0°, resting atop the dome.
 *
 * 6. Benefits -> Wine Vault (0.53 - 0.72):
 *    - Drops down from y = -24vh to y = +2vh and scales down from 1.0 to 0.62,
 *      landing directly into slot #3 (the center bottle) of The Vintale Vault!
 *
 * 7. Wine Vault Rest (0.72 - 0.78):
 *    - Aligned with the other 4 bottles in the vault showcase at scale 0.62.
 *
 * 8. Wine Vault -> Moments Promo (0.78 - 0.95):
 *    - As the 4 other bottles scroll off-screen, the Blossom Rosé bottle detaches,
 *      rotates to -20°, glides to the right side (x = +24vw), and scales up
 *      dramatically (scale: 0.62 -> 1.30) to fill the right half of the hero layout!
 *
 * 9. Moments Promo Rest (0.95 - 1.00):
 *    - Beautifully positioned on the right of "Let the Moments Pour." matching Desktop - 6.
 */
export default function HeroStoryTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Rotation:
  // -13° (Hero) -> 0° (Story, Benefits, Vault) -> -20° (Moments)
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    [-13, -13, 0, 0, 0, 0, 0, 0, -20, -20]
  );

  // Vertical position:
  // Hero (+20vh) -> Story (0vh) -> Benefits (-24vh) -> Vault (+2vh) -> Moments (-3vh)
  const y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    ['20vh', '20vh', '0vh', '0vh', '-24vh', '-24vh', '2vh', '2vh', '-3vh', '-3vh']
  );

  // Horizontal position:
  // Center (0vw) for sections 1-4 -> Shifts right (+24vw) for Section 5 (Moments)
  const x = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    ['0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '24vw', '24vw']
  );

  // Scale:
  // 1.05 (Hero) -> 1.0 (Story, Benefits) -> 0.62 (Vault lineup) -> 1.30 (Moments grand feature)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    [1.05, 1.05, 1.0, 1.0, 1.0, 1.0, 0.62, 0.62, 1.30, 1.30]
  );

  return (
    <div ref={trackRef} className="relative w-full">
      {/*
        Sticky viewport overlay for the single continuous Blossom Rosé bottle.
        Pins to viewport throughout the entire 5-section journey.
        Pointer-events-none ensures all links, buttons, and UI elements remain fully interactive.
      */}
      <div
        className="sticky top-0 h-screen w-full pointer-events-none z-30 flex items-center justify-center overflow-visible"
        aria-hidden="true"
      >
        <motion.div
          style={{ rotate, y, x, scale }}
          className="relative flex items-center justify-center select-none"
        >
          <Image
            src="/bottles/rose-large.svg"
            alt="Blossom Rosé wine bottle"
            width={922}
            height={1004}
            priority
            className="h-[680px] sm:h-[740px] md:h-[790px] lg:h-[830px] w-auto max-w-none drop-shadow-[0_28px_50px_rgba(0,0,0,0.32)]"
          />
        </motion.div>
      </div>

      {/*
        All five sections rendered continuously in order.
        -mt-[100vh] offsets the sticky container so section 1 starts flush at the top.
      */}
      <div className="-mt-[100vh]">
        <HeritageHero />
        <StorySection />
        <BenefitsSection />
        <WineVault />
        <MomentsPromo />
      </div>
    </div>
  );
}
