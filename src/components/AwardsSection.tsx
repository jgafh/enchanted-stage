import { useLanguage } from '@/contexts/LanguageContext';
import { Award, GraduationCap, Building2, Newspaper } from 'lucide-react';

const awards = [
  {
    icon: Award,
    titleKey: 'awards.bolivia.title',
    descKey: 'awards.bolivia.desc',
    accent: 'gold',
  },
  {
    icon: GraduationCap,
    titleKey: 'awards.vocal.title',
    descKey: 'awards.vocal.desc',
    accent: 'mauve',
  },
  {
    icon: Building2,
    titleKey: 'awards.events.title',
    descKey: 'awards.events.desc',
    accent: 'cream',
  },
  {
    icon: Newspaper,
    titleKey: 'awards.press.title',
    descKey: 'awards.press.desc',
    accent: 'gold',
  },
];

export const AwardsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="awards" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4">
              {t('awards.title')}
            </h2>
            <p className="font-body text-cream/60 max-w-xl mx-auto">
              {t('awards.subtitle')}
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </div>

          {/* Awards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              const accentColors = {
                gold: 'border-l-gold text-gold',
                mauve: 'border-l-mauve text-mauve',
                cream: 'border-l-cream text-cream',
              };
              
              return (
                <div
                  key={index}
                  className={`group p-6 bg-card rounded-sm border border-border/30 border-l-4 ${accentColors[award.accent as keyof typeof accentColors].split(' ')[0]} hover:bg-muted/30 transition-all duration-500`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${accentColors[award.accent as keyof typeof accentColors].split(' ')[1]}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                        {t(award.titleKey)}
                      </h3>
                      <p className="font-body text-sm text-cream/60">
                        {t(award.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
