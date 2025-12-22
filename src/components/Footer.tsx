import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-cream mb-1">Mei Hoff</h3>
            <p className="font-body text-sm text-cream/50 italic">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-cream/40">
            © {currentYear} Mei Hoff. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
