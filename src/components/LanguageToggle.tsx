import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'fr' as const, label: 'FR' },
  { code: 'es' as const, label: 'ES' },
  { code: 'en' as const, label: 'EN' },
];

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/30 rounded-full p-1 backdrop-blur-sm border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "px-3 py-1.5 text-xs font-body font-medium tracking-wider rounded-full transition-all duration-300",
            language === lang.code
              ? "bg-gold text-burgundy"
              : "text-cream/70 hover:text-cream hover:bg-cream/10"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
