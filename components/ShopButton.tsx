import { Icon } from './Icons';

export function ShopButton({
  className = '',
  href = '#collections',
  fillColor = 'bg-pink',
}: {
  className?: string;
  href?: string;
  fillColor?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-ink px-8 py-4 text-[16px] font-medium text-white shadow-md transition-all duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink ${className}`}
    >
      {/* Liquid sweep hover fill from left to right */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-full rounded-full ${fillColor} transition-transform duration-300 ease-out group-hover:translate-x-0`}
      />

      <span className="relative z-10 transition-colors">Shop Now</span>
      <Icon
        name="arrow"
        className="relative z-10 h-4 w-4 stroke-[2.5] transition-transform duration-300"
      />
    </a>
  );
}

export function DiscountBadge({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      aria-label="25 percent off promotional offer"
    >
      <svg
        viewBox="0 0 172 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-sm transition-transform duration-300 hover:rotate-6"
      >
        <polygon
          points="86,0 103,22 129,11 132,39 160,43 149,68 171,85 149,102 160,128 132,131 129,159 103,148 86,170 69,148 44,159 40,131 12,128 23,102 1,85 23,68 12,42 40,39 43,11 69,22"
          fill="#fecb3f"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ink">
        <span className="font-display text-[40px] md:text-[44px] font-bold leading-[0.88] tracking-tight">
          25%
        </span>
        <span className="font-display text-[21px] md:text-[23px] font-bold leading-none tracking-wide">
          OFF
        </span>
      </div>
    </div>
  );
}
