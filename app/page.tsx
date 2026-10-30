import HeroStoryTrack from '@/components/HeroStoryTrack';
import WineVault from '@/components/WineVault';
import MomentsPromo from '@/components/MomentsPromo';
import { CartProvider } from '@/components/CartProvider';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <CartProvider>
      <SmoothScroll>
        <main id="main" className="relative mx-auto bg-white shadow-2xl">
          {/* HeroStoryTrack contains HeritageHero + StorySection + BenefitsSection with the continuous bottle animation */}
          <HeroStoryTrack />
          <WineVault />
          <MomentsPromo />
        </main>
      </SmoothScroll>
    </CartProvider>
  );
}
