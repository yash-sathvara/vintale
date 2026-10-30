'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import HeritageHero from './HeritageHero';
import StorySection from './StorySection';
import BenefitsSection from './BenefitsSection';

/**
 * HeroStoryTrack
 *
 * Implements the continuous bottle scroll animation from the reference video:
 * 1. Hero: bottle is tilted -13°, resting inside the concentric pink circle.
 * 2. Hero -> Story: as the user scrolls, the bottle smoothly rotates from -13° to 0°
 *    (upright) and moves to the exact vertical center of the Story section.
 * 3. Story -> Benefits: the bottle remains upright at 0° and shifts up to dock cleanly
 *    at the apex of the convex pink dome, with the 5 trust badges fanning out below.
 * 4. Benefits -> Vault: when scrolling past Benefits, the sticky bottle runway ends and
 *    the bottle naturally scrolls away with the Benefits section.
 */
export default function HeroStoryTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Rotation: -13° in Hero -> 0° upright in Story and Benefits
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.12, 0.42, 0.58, 0.88, 1.0],
    [-13, -13, 0, 0, 0, 0]
  );

  // Vertical position (vh units adapt to all screen heights):
  // Hero (bottom-center): +20vh
  // Story (vertical center): 0vh
  // Benefits (dome apex): -26vh
  const y = useTransform(
    scrollYProgress,
    [0, 0.12, 0.42, 0.58, 0.88, 1.0],
    ['20vh', '20vh', '0vh', '0vh', '-26vh', '-26vh']
  );

  // Slight scale enhancement in Hero
  const scale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.42, 0.58, 0.88, 1.0],
    [1.06, 1.06, 1.0, 1.0, 1.0, 1.0]
  );

  return (
    <div ref={trackRef} className="relative w-full">
      {/*
        Sticky viewport overlay for the continuous bottle:
        Pins to the viewport for the entire runway of Hero + Story + Benefits.
        Pointer-events-none ensures all clicks pass through to navbars and buttons.
      */}
      <div
        className="sticky top-0 h-screen w-full pointer-events-none z-30 flex items-center justify-center overflow-visible"
        aria-hidden="true"
      >
        <motion.div
          style={{ rotate, y, scale }}
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
        Sections stacked directly underneath the sticky viewport.
        -mt-[100vh] pulls the content up to align with top: 0 of trackRef.
      */}
      <div className="-mt-[100vh]">
        <HeritageHero />
        <StorySection />
        <BenefitsSection />
      </div>
    </div>
  );
}
