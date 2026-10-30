'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Icon, type IconName } from './Icons';

interface BenefitItem {
  icon: IconName;
  line1: string;
  line2: string;
  offsetClass: string;
}

const benefits: BenefitItem[] = [
  {
    icon: 'truck',
    line1: 'Quick',
    line2: 'Delivery',
    // Highest level on left
    offsetClass: 'translate-y-0',
  },
  {
    icon: 'returns',
    line1: 'Easy',
    line2: 'Returns',
    // Stepped down along curve
    offsetClass: 'translate-y-14 sm:translate-y-20 lg:translate-y-24',
  },
  {
    icon: 'award',
    line1: 'Quality',
    line2: 'Assured',
    // Lowest center point beneath dome apex
    offsetClass: 'translate-y-28 sm:translate-y-36 lg:translate-y-44',
  },
  {
    icon: 'shield',
    line1: 'Secure',
    line2: 'Payment',
    // Stepped down along curve
    offsetClass: 'translate-y-14 sm:translate-y-20 lg:translate-y-24',
  },
  {
    icon: 'eco',
    line1: 'Eco',
    line2: 'Friendly',
    // Highest level on right
    offsetClass: 'translate-y-0',
  },
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress as Benefits section scrolls into view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Smooth springs for fluid scroll animation
  const springConfig = { stiffness: 120, damping: 24, mass: 0.5 };

  // Left 2 items move outward to the left side as bottle approaches
  const rawLeft1 = useTransform(scrollYProgress, [0.25, 0.85], [45, -55]);
  const rawLeft2 = useTransform(scrollYProgress, [0.25, 0.85], [20, -28]);
  const leftItem1X = useSpring(rawLeft1, springConfig);
  const leftItem2X = useSpring(rawLeft2, springConfig);

  // Center item cradles directly under the bottle
  const rawCenter = useTransform(scrollYProgress, [0.25, 0.85], [0, 0]);
  const centerX = useSpring(rawCenter, springConfig);

  // Right 2 items move outward to the right side as bottle approaches
  const rawRight1 = useTransform(scrollYProgress, [0.25, 0.85], [-20, 28]);
  const rawRight2 = useTransform(scrollYProgress, [0.25, 0.85], [-45, 55]);
  const rightItem1X = useSpring(rawRight1, springConfig);
  const rightItem2X = useSpring(rawRight2, springConfig);

  const xTransforms = [leftItem1X, leftItem2X, centerX, rightItem1X, rightItem2X];

  return (
    <section
      ref={sectionRef}
      aria-label="The Vintale promise"
      className="relative isolate min-h-[960px] lg:h-[1024px] w-full overflow-hidden bg-white"
    >
      {/* Top Pink Convex Dome (Matching Reference Architecture) */}
      <div className="absolute inset-x-0 top-0 w-full h-[620px] pointer-events-none -z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 620"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M 0 0 H 1440 V 270 Q 720 620 0 270 Z"
            fill="#eb235c"
          />
        </svg>

        {/* Soft bottle contact shadow at the dome apex */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[608px] -translate-y-1/2 flex items-center justify-center">
          <div className="h-4 w-44 sm:w-56 rounded-[50%] bg-black/30 blur-md" />
        </div>
      </div>

      {/* 5 Circular Trust Badges arranged along the smile curve arc */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-[460px] sm:pt-[500px] lg:pt-[520px] pb-16">
        <ul className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-start justify-items-center w-full">
          {benefits.map((b, idx) => (
            <motion.li
              key={b.icon}
              style={{ x: xTransforms[idx] }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 20,
                delay: idx * 0.06,
              }}
              className={`flex flex-col items-center text-center ${b.offsetClass}`}
            >
              {/* Circular Badge with pink border & blush tint */}
              <div className="group relative flex h-[76px] w-[76px] sm:h-[105px] sm:w-[105px] md:h-[125px] md:w-[125px] lg:h-[138px] lg:w-[138px] items-center justify-center rounded-full border-[1.5px] border-pink bg-[#fde9ef]/50 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blush hover:shadow-md">
                <Icon
                  name={b.icon}
                  className="h-[38px] w-[38px] sm:h-[52px] sm:w-[52px] md:h-[62px] md:w-[62px] lg:h-[70px] lg:w-[70px] text-pink transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* 2-line Serif Label */}
              <p className="mt-3 sm:mt-4 lg:mt-5 font-display text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] font-bold leading-tight sm:leading-snug text-ink">
                <span>{b.line1}</span>
                <br />
                <span>{b.line2}</span>
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
