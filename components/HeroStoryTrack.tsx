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
 * 1. Hero (0.00 - 0.05):
 *    - Scale: 1.65 (close-up zoom matching Desktop - 2 reference).
 *    - Rotation: -13° tilt.
 *    - Position: x = -8vw, y = +28vh (cap at ~y=320px, shoulder & body emerging through circle).
 *
 * 2. Hero -> Story (0.05 - 0.22):
 *    - Scales down from 1.65 to 1.0.
 *    - Rotates from -13° to 0° (upright).
 *    - Moves to center (x: -8vw -> 0vw, y: 28vh -> 0vh).
 *
 * 3. Story Rest (0.22 - 0.28):
 *    - Upright at 0°, center between "Timeless Craft" and "About Vintale".
 *
 * 4. Story -> Benefits (0.28 - 0.47):
 *    - Glides upward to y = -24vh so base docks cleanly at the pink dome apex.
 *
 * 5. Benefits Rest (0.47 - 0.53):
 *    - Upright at 0°, docked at dome apex with trust badges around it.
 *
 * 6. Benefits -> Wine Vault (0.53 - 0.72):
 *    - Drops down to y = +2vh and scales down from 1.0 to 0.62 (~514px bottle height),
 *      landing directly into slot #3 of the 5-bottle vault lineup.
 *
 * 7. Wine Vault Rest (0.72 - 0.78):
 *    - Perfectly aligned in slot #3 beside Golden Chard, Scarlet Merlot, Verdant Grove, and Purple Malbec.
 *
 * 8. Wine Vault -> Moments Promo (0.78 - 0.95):
 *    - As the 4 other bottles scroll away, Blossom Rosé detaches, tilts to -20°,
 *      shifts right to x = +24vw, and expands (scale: 0.62 -> 1.30).
 *
 * 9. Moments Promo Rest (0.95 - 1.00):
 *    - Grand hero feature on the right side of "Let the Moments Pour."
 */
export default function HeroStoryTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Rotation across all 5 sections:
  // -13° (Hero) -> 0° upright (Story, Benefits, Vault) -> -20° (Moments)
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    [-13, -13, 0, 0, 0, 0, 0, 0, -20, -20]
  );

  // Vertical position across all 5 sections:
  // Hero (+20vh) -> Story (0vh) -> Benefits (-24vh) -> Vault (+2vh) -> Moments (-3vh)
  const y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    ['20vh', '20vh', '0vh', '0vh', '-24vh', '-24vh', '2vh', '2vh', '-3vh', '-3vh']
  );

  // Horizontal position across all 5 sections:
  // Center (0vw) for sections 1-4 -> Shifts right (+24vw) for Section 5 (Moments)
  const x = useTransform(
    scrollYProgress,
    [0, 0.05, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.95, 1.0],
    ['0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '0vw', '24vw', '24vw']
  );

  // Scale across all 5 sections:
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
