'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { products } from '@/lib/products';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const bottleVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function WineVault() {
  return (
    <section
      id="collections"
      aria-labelledby="vault-title"
      className="relative isolate w-full min-h-[960px] lg:h-[1024px] max-w-[1440px] mx-auto overflow-hidden bg-white px-4 sm:px-8 lg:px-[88px] flex flex-col justify-between pt-16 lg:pt-[110px] pb-12 lg:pb-[70px]"
    >
      {/* Centered Vault Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2
          id="vault-title"
          className="font-display font-bold text-[36px] sm:text-[44px] lg:text-[52px] tracking-tight text-ink"
        >
          The Vintale Vault
        </h2>
      </motion.div>

      {/* 5 Wine Bottles Showcase with Staggered Wave Entrance */}
      <div className="w-full my-auto py-2">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-2 sm:gap-x-4 lg:gap-x-0 items-end"
        >
          {products.map((product, idx) => (
            <motion.li
              key={product.id}
              variants={bottleVariants}
              className={`flex flex-col items-center text-center ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="group flex flex-col items-center w-full">
                {/* Bottle Presentation with Native Ground Shadow & Hover Float */}
                <div className="relative flex items-center justify-center h-[340px] sm:h-[420px] md:h-[460px] lg:h-[514px] w-full overflow-visible">
                  <div className="relative h-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:scale-[1.02]">
                    <Image
                      src={product.image}
                      alt={`${product.name}, 750ml bottle`}
                      width={540}
                      height={588}
                      priority
                      className="h-full w-auto max-w-none object-contain"
                    />
                  </div>
                </div>

                {/* Price Label (Bold Pink Serif) */}
                <span className="mt-4 block font-display text-[26px] sm:text-[28px] lg:text-[32px] font-bold text-pink leading-none tracking-tight">
                  ${product.price}
                </span>

                {/* Product Name (Bold Ink Serif) */}
                <span className="mt-2 block font-display text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-ink leading-snug">
                  {product.name}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Bottom Disclaimer Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="text-center"
      >
        <div className="inline-block rounded-full bg-blush px-8 py-2.5 sm:px-12 sm:py-3 shadow-sm border border-pink/15">
          <p className="font-display text-[15px] sm:text-[16px] font-bold text-pink tracking-normal">
            Each bottle contains 750ml of carefully crafted wine
          </p>
        </div>
      </motion.div>
    </section>
  );
}
