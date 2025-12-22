import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/70 via-burgundy/80 to-burgundy" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-mauve/5 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold/90 mb-6 opacity-0 animate-fade-up">
            {t('hero.subtitle')}
          </p>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream mb-6 opacity-0 animate-fade-up delay-100">
            <span className="block">Mei Hoff</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl italic text-gold/80 mt-4">
              {t('hero.headline')}
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <Button variant="hero" asChild>
              <a href="#booking">{t('hero.cta.booking')}</a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#about">{t('hero.cta.discover')}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-cream/50 hover:text-gold transition-colors duration-300"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
