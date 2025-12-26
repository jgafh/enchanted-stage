import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Music, Play, Video } from 'lucide-react';

const platforms = [
  {
    id: 'spotify',
    icon: Music,
    labelKey: 'music.spotify',
    url: 'https://open.spotify.com/artist/4y9Mmm7crOffimBs5GUw2l',
    color: 'from-[#1DB954]/20 to-transparent',
    hoverColor: 'hover:border-[#1DB954]/50',
  },
  {
    id: 'youtube',
    icon: Play,
    labelKey: 'music.youtube',
    url: 'https://www.youtube.com/@meihoffartist',
    color: 'from-[#FF0000]/20 to-transparent',
    hoverColor: 'hover:border-[#FF0000]/50',
  },
  {
    id: 'tiktok',
    icon: Video,
    labelKey: 'music.tiktok',
    url: 'https://www.tiktok.com/@meihoffartist',
    color: 'from-[#00f2ea]/20 to-transparent',
    hoverColor: 'hover:border-[#00f2ea]/50',
  },
];

export const MusicSection = () => {
  const { t } = useLanguage();

  return (
    <section id="music" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-mauve/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4">
              {t('music.title')}
            </h2>
            <p className="font-body text-cream/60 max-w-xl mx-auto">
              {t('music.subtitle')}
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </div>

          {/* Platform cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-8 rounded-sm bg-card border border-border/30 ${platform.hoverColor} transition-all duration-500 hover:shadow-lg hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm`} />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                      <Icon className="w-7 h-7 text-cream/70 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <span className="font-body text-sm tracking-wider text-cream/80 group-hover:text-cream transition-colors duration-300">
                      {t(platform.labelKey)}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          
        </div>
      </div>
    </section>
  );
};
