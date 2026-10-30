import type { SVGProps } from 'react';

export type IconName =
  | 'wine'
  | 'cart'
  | 'user'
  | 'truck'
  | 'returns'
  | 'award'
  | 'shield'
  | 'eco'
  | 'arrow'
  | 'close'
  | 'menu';

export function Icon({
  name,
  className = 'w-5 h-5',
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName; className?: string }) {
  switch (name) {
    case 'wine':
      return (
        <svg
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          {/* Glass outline: bowl, stem, foot */}
          <path
            d="M3 5.5C3 3.5 4.5 2 6.5 2H25.5C27.5 2 29 3.5 29 5.5V11.5C29 18.5 23.5 23.5 17.5 24V31H23C23.6 31 24 31.4 24 32C24 32.6 23.6 33 23 33H9C8.4 33 8 32.6 8 32C8 31.4 8.4 31 9 31H14.5V24C8.5 23.5 3 18.5 3 11.5V5.5Z"
            stroke="#1c1826"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Wine liquid fill inside bowl */}
          <path
            d="M4.5 12C7.5 13.5 11 14 16 14C21 14 24.5 13.5 27.5 12C27 17.5 22.5 21.5 16 21.5C9.5 21.5 5 17.5 4.5 12Z"
            fill="#eb235c"
          />
        </svg>
      );

    case 'cart':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.5 4.5H8.53L8.4 10.23l-.9-1.9-.9-1.9L5.3 4H2v2h2.6l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
        </svg>
      );

    case 'user':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );

    case 'truck':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <line x1="4" y1="18" x2="14" y2="18" stroke="#eb235c" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="2" y1="24" x2="11" y2="24" stroke="#eb235c" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="5" y1="30" x2="13" y2="30" stroke="#eb235c" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M16 13C16 11.9 16.9 11 18 11H34C35.1 11 36 11.9 36 13V20H42.5C43.3 20 44 20.5 44.4 21.2L46.8 26.3C47 26.7 47 27.2 47 27.7V33C47 34.1 46.1 35 45 35H41M36 35H25M19 35H18C16.9 35 16 34.1 16 33V13Z"
            stroke="#eb235c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 20H42L44.5 25.5H36V20Z"
            stroke="#eb235c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="38" cy="35" r="3.5" stroke="#eb235c" strokeWidth="2.5" />
          <circle cx="22" cy="35" r="3.5" stroke="#eb235c" strokeWidth="2.5" />
        </svg>
      );

    case 'returns':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path
            d="M24 14L34 19.5V30.5L24 36L14 30.5V19.5L24 14Z"
            stroke="#eb235c"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24 14V25M24 25L14 19.5M24 25L34 19.5" stroke="#eb235c" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 16.5L30 22" stroke="#eb235c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path
            d="M10 21C11.5 13 18.5 7 27 7.5C32.5 8 37.5 11.5 40 16"
            stroke="#eb235c"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path d="M37 16H40.5V12.5" stroke="#eb235c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M38 27C36.5 35 29.5 41 21 40.5C15.5 40 10.5 36.5 8 32"
            stroke="#eb235c"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path d="M11 32H7.5V35.5" stroke="#eb235c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'award':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path
            d="M24 6L26.5 8.5L30 8L31.5 11L35 11.5L35.5 15L38.5 16.5L38 20L40.5 22.5L39 25.5L40.5 28.5L38 31L38.5 34.5L35.5 36L35 39.5L31.5 40L30 43L26.5 42.5L24 45L21.5 42.5L18 43L16.5 40L13 39.5L12.5 36L9.5 34.5L10 31L7.5 28.5L9 25.5L7.5 22.5L10 20L9.5 16.5L12.5 15L13 11.5L16.5 11L18 8L21.5 8.5L24 6Z"
            stroke="#eb235c"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="25" r="10" stroke="#eb235c" strokeWidth="2" />
          <path
            d="M19.5 25L22.5 28L28.5 21.5"
            stroke="#eb235c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 36L15 45L20 43L24 46"
            stroke="#eb235c"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 36L33 45L28 43L24 46"
            stroke="#eb235c"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'shield':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path
            d="M24 7L38 12V24C38 33 32 39.5 24 43C16 39.5 10 33 10 24V12L24 7Z"
            stroke="#eb235c"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="27" r="8" stroke="#eb235c" strokeWidth="2" fill="#fde9ef" />
          <path
            d="M27 21.5V32.5M29.5 23.5H25.8C24.8 23.5 24 24.2 24 25.1C24 26 24.8 26.7 25.8 26.7H28.2C29.2 26.7 30 27.4 30 28.3C30 29.2 29.2 30 28.2 30H24.5"
            stroke="#eb235c"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'eco':
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          {/* Top Leaf */}
          <path
            d="M24 7C30 7 35 11 34 18C33 21 29 23 24 21C20 19 20 14 21 11C22 9 23 7.5 24 7Z"
            stroke="#eb235c"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M23.5 10C25 14 27.5 17 31 18.5" stroke="#eb235c" strokeWidth="2" strokeLinecap="round" />

          {/* Right Leaf */}
          <path
            d="M37 25C38 31 36 37 30 38C26 39 23 36 22 31C21 27 24 24 28 23C31 22 35 23 37 25Z"
            stroke="#eb235c"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M35 26.5C32.5 30.5 29 33 25 34" stroke="#eb235c" strokeWidth="2" strokeLinecap="round" />

          {/* Left Leaf */}
          <path
            d="M13 29C11 23 15 17 21 17C24 17 26 20 25 25C24 29 21 32 17 32C14 32 13 30.5 13 29Z"
            stroke="#eb235c"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M14.5 28C18 27 21.5 26 23 22" stroke="#eb235c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'arrow':
      return (
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'close':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );

    case 'menu':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      );

    default:
      return null;
  }
}
