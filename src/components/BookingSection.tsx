import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    url: 'https://www.instagram.com/meihoffartist/',
    label: 'Instagram',
  },
];

export const BookingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-mauve/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4">
            {t('booking.title')}
          </h2>
          <p className="font-display text-xl md:text-2xl text-gold/80 italic mb-6">
            {t('booking.subtitle')}
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          
          <p className="font-body text-cream/70 max-w-xl mx-auto mb-12 leading-relaxed">
            {t('booking.description')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="gold" size="xl" asChild>
              <a 
                href="https://wa.me/+50366801471" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {t('booking.cta.whatsapp')}
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a 
                href="mailto:hoffmannmireille88@gmail.com"
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                {t('booking.cta.email')}
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="border-t border-border/30 pt-12">
            <p className="font-body text-sm text-cream/50 uppercase tracking-widest mb-6">
              {t('booking.follow')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/meihoffartist/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@meihoffartist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/4y9Mmm7crOffimBs5GUw2l"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@meihoffartist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
