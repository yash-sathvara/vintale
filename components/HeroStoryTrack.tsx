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
 * HeroStoryTrack (Unified 5-Section Continuous Bottle Experience)
 *
 * Trajectory:
 * 1. Hero (0.00 - 0.04):
 *    - Scale: 1.02.
 *    - Rotation: -6° tilt.
 *    - Position: x = 0vw, y = +18vh.
 *
 * 2. Hero -> Story (0.04 - 0.18):
 *    - Scales to 1.0.
 *    - Rotates to 0° (upright).
 *    - Centered (x: 0vw, y: 0vh).
 *
 * 3. Story Rest (0.18 - 0.24):
 *    - Upright at 0°, centered in Story section.
 *
 * 4. Story -> Benefits (0.24 - 0.38):
 *    - Glides upward to y = -26vh inside the pink convex dome.
 *
 * 5. Benefits Rest (0.38 - 0.44):
 *    - Resting in dome with smile arc badges.
 *
 * 6. Benefits -> Wine Vault (0.44 - 0.58):
 *    - Drops down to y = -2vh, scales down to 0.65, landing into slot #3.
 *
 * 7. Wine Vault PINNED & PAUSED (0.58 - 0.78):
 *    - Section 4 is pinned to viewport; animation is PAUSED.
 *    - All 5 bottles appear along the exact horizontal line, completely stationary.
 *
 * 8. Wine Vault -> Moments Promo (0.78 - 0.95):
 *    - Section 4 unpins and animation RESUMES.
 *    - Blossom Rosé lifts, tilts to -20°, scales to 1.30, glides right to x: +24vw.
 *
 * 9. Moments Promo Rest (0.95 - 1.00):
 *    - Hero feature on the right side of Moments Promo.
 */
export default function HeroStoryTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Rotation across all 5 sections:
  // -6° (Hero) -> 0° upright (Story, Benefits, Vault) -> -20° (Moments)
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    [-13, -13, 0, 0, 0, 0, 0, 0, -20, -20]
  );

  // Vertical position across all 5 sections:
  // Hero (+18vh) -> Story (0vh) -> Benefits (-26vh) -> Vault (-2vh, paused in slot #3 on line with other bottles) -> Moments (-3vh)
  const y = useTransform(
    scrollYProgress,
    [0, 0.04, 0.18, 0.24, 0.38, 0.44, 0.58, 0.78, 0.95, 1.0],
    ['18vh', '18vh', '0vh', '0vh', '-26vh', '-26vh', '1vh', '1vh', '-3vh', '-3vh']
  );

  // Horizontal position across all 5 sections:
  // Center (0vw) for sections 1-4 (docked in slot #3) -> Shifts right (+24vw) when proceeding to Section 5
  const x = useTransform(
    scrollYProgress,
    [0, 0.04, 0.18, 0.24, 0.38, 0.44, 0.58, 0.78, 0.95, 1.0],
    ['0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '24vw', '24vw']
  );

  // Scale across all 5 sections:
  // 1.02 (Hero) -> 1.0 (Story, Benefits) -> 0.65 (matches 514px height in Vault lineup) -> 1.30 (Moments grand feature)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.04, 0.18, 0.24, 0.38, 0.44, 0.58, 0.78, 0.95, 1.0],
    [1.02, 1.02, 1.0, 1.0, 1.0, 1.0, 0.65, 0.65, 1.30, 1.30]
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
            className="h-[580px] sm:h-[650px] md:h-[720px] lg:h-[780px] xl:h-[820px] max-h-[82vh] w-auto max-w-none drop-shadow-[0_28px_50px_rgba(0,0,0,0.32)]"
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
