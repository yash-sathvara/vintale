'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
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
    offsetClass: 'translate-y-0',
  },
  {
    icon: 'returns',
    line1: 'Easy',
    line2: 'Returns',
    offsetClass: 'md:translate-y-10 lg:translate-y-16',
  },
  {
    icon: 'award',
    line1: 'Quality',
    line2: 'Assured',
    offsetClass: 'md:translate-y-20 lg:translate-y-28',
  },
  {
    icon: 'shield',
    line1: 'Secure',
    line2: 'Payment',
    offsetClass: 'md:translate-y-10 lg:translate-y-16',
  },
  {
    icon: 'eco',
    line1: 'Eco',
    line2: 'Friendly',
    offsetClass: 'translate-y-0',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 240,
      damping: 18,
    },
  },
};

export default function BenefitsSection() {
  return (
    <section
      aria-label="The Vintale promise"
      className="relative isolate min-h-[920px] lg:h-[1024px] w-full overflow-hidden bg-white flex flex-col justify-between"
    >
      {/* Top Pink Convex Dome with Blossom Rosé Bottle Base */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] lg:h-[590px] flex items-end justify-center"
      >
        {/* Pink Curved Shape SVG — wider dome matching Desktop 4 reference */}
        <div className="absolute inset-0 w-full h-full -z-10" aria-hidden="true">
          <svg
            viewBox="0 0 1440 660"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0 0H1440V300C1200 520 960 660 720 660C480 660 240 520 0 300V0Z"
              fill="#eb235c"
            />
          </svg>
        </div>

        {/* Soft bottle contact shadow on pink dome apex where the animated bottle docks */}
        <div className="relative z-10 flex flex-col items-center mb-2 pointer-events-none" aria-hidden="true">
          <div
            className="h-3.5 w-40 sm:w-52 rounded-[50%] bg-black/25 blur-sm"
          />
        </div>
      </motion.div>

      {/* 5 Circular Trust Badges arranged along the smile curve arc */}
      <div className="relative z-20 w-full max-w-[1380px] mx-auto px-[4%] lg:px-[6%] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-6 md:gap-4 items-start"
        >
          {benefits.map((b, idx) => (
            <motion.li
              key={b.icon}
              variants={badgeVariants}
              className={`flex flex-col items-center text-center transition-transform duration-300 ${b.offsetClass
                } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              {/* Circular Badge with pink border & blush tint */}
              <div className="group relative flex h-[110px] w-[110px] sm:h-[125px] sm:w-[125px] lg:h-[142px] lg:w-[142px] items-center justify-center rounded-full border-[1.5px] border-pink bg-[#fde9ef]/40 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blush hover:shadow-md">
                <Icon
                  name={b.icon}
                  className="h-[54px] w-[54px] sm:h-[62px] sm:w-[62px] lg:h-[72px] lg:w-[72px] text-pink transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* 2-line Serif Label */}
              <p className="mt-5 font-display text-[17px] sm:text-[19px] lg:text-[21px] font-bold leading-snug text-ink">
                <span>{b.line1}</span>
                <br />
                <span>{b.line2}</span>
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
