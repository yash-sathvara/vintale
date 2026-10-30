'use client';

import { motion } from 'motion/react';
import { ShopButton } from './ShopButton';

export default function StorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative isolate min-h-[960px] lg:h-[1024px] w-full overflow-hidden bg-pink px-[5%] lg:px-[6%] py-16 lg:py-0 flex items-center justify-center text-white"
    >
      <div className="w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-[1fr_340px_1fr] items-center gap-12 lg:gap-0">
        {/* Left Column: Timeless Craft */}
        <motion.article
          id="craft"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center max-w-[430px] z-10"
        >
          <h2 className="mb-6 font-display text-[40px] sm:text-[46px] md:text-[52px] lg:text-[56px] font-bold tracking-tight text-white leading-tight">
            Timeless Craft
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.75] text-white/95 font-normal">
            From sun-soaked vineyards to your table, our journey begins with a deep-rooted passion
            for craftsmanship and authenticity. We collaborate with small-batch winemakers who carry
            generations of wisdom, honoring time-tested traditions passed down through families and
            regions. Their process is slow, intentional, and guided by the rhythms of the land — from
            hand-picking grapes at peak ripeness to aging in seasoned oak barrels that add depth and
            complexity.
          </p>
        </motion.article>

        {/* Center Column: empty spacer — bottle rendered by HeroStoryTrack overlay */}
        <div className="hidden lg:block" aria-hidden="true" />

        {/* Right Column: About Vintale & CTA */}
        <motion.article
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="flex flex-col justify-center max-w-[430px] z-10 lg:ml-auto text-center lg:text-right"
        >
          <h2
            id="story-title"
            className="mb-6 font-display text-[40px] sm:text-[46px] md:text-[52px] lg:text-[56px] font-bold tracking-tight text-white leading-tight"
          >
            About Vintale
          </h2>
          <div className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.75] text-white/95 font-normal space-y-4">
            <p>
              Vintale began with a belief that wine should offer more than taste. Founded by friends
              with a passion for tradition and storytelling, we curate wines that reflect the craft
              and care of the people who make them.
            </p>
            <p>
              From small family-run vineyards to quiet cellars, our selections are rooted in heritage
              and chosen for their character. It&apos;s not just wine, it&apos;s what brings people
              together.
            </p>
            <p className="font-semibold text-white">
              Every bottle invites a story. Every sip celebrates a moment.
            </p>
          </div>

          <div className="mt-8 flex lg:justify-end">
            <ShopButton className="shadow-2xl" fillColor="bg-[#120f18]" />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
