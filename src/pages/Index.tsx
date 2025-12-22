import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { MusicSection } from '@/components/MusicSection';
import { AwardsSection } from '@/components/AwardsSection';
import { BookingSection } from '@/components/BookingSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <AwardsSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default Index;
