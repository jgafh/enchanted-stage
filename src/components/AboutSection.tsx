import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mauve/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6">
              {t('about.title')}
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image placeholder - artistic representation */}
            <div className="relative group">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gradient-to-br from-muted to-card border border-border/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-mauve/20 flex items-center justify-center border border-gold/30">
                      <span className="font-display text-5xl text-gold">M</span>
                    </div>
                    <p className="font-display text-xl text-cream/50 italic">Photo artistique</p>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/20 rounded-sm -z-10 group-hover:border-gold/40 transition-colors duration-500" />
            </div>

            {/* Biography text */}
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-3xl text-gold/90 italic leading-relaxed">
                {t('about.intro')}
              </p>
              
              <div className="space-y-4 font-body text-cream/70 leading-relaxed">
                <p>{t('about.bio.p1')}</p>
                <p>{t('about.bio.p2')}</p>
                <p>{t('about.bio.p3')}</p>
              </div>

              {/* Artistic concept highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-muted/50 to-transparent border-l-2 border-gold">
                <p className="font-display text-lg text-cream/90 italic">
                  "L'enveloppe enchantée"
                </p>
                <p className="font-body text-sm text-cream/60 mt-2">
                  — Concept artistique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
