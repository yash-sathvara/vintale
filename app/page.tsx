import HeroStoryTrack from '@/components/HeroStoryTrack';
import { CartProvider } from '@/components/CartProvider';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <CartProvider>
      <SmoothScroll>
        <main id="main" className="relative mx-auto bg-white shadow-2xl">
          {/* HeroStoryTrack houses all 5 sections with the unified continuous bottle animation */}
          <HeroStoryTrack />
        </main>
      </SmoothScroll>
    </CartProvider>
  );
}
