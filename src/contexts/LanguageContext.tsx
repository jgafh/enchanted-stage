import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.music': 'Musique',
    'nav.awards': 'Distinctions',
    'nav.booking': 'Réservation',
    
    // Hero
    'hero.subtitle': 'Chanteuse • Pop Française • Jazz • Musiques du Monde',
    'hero.headline': 'L\'enveloppe enchantée',
    'hero.description': 'Une expérience scénique où chaque note, geste et silence enveloppe le public dans une atmosphère unique.',
    'hero.cta.booking': 'Réserver une prestation',
    'hero.cta.discover': 'Découvrir mon univers',
    
    // About
    'about.title': 'Mon Univers Créatif',
    'about.intro': 'Il existe des voix qui ne cherchent pas à remplir des stades, mais à toucher quelque chose de plus profond.',
    'about.bio.p1': 'Mei Hoff est une artiste française dont la voix voyage entre la pop poétique, le jazz et les musiques du monde, créant des expériences scéniques intimes et élégantes.',
    'about.bio.p2': 'Formée à Paris aux arts de la scène et à la technique vocale, elle a développé son parcours artistique entre l\'Europe et l\'Amérique latine, mêlant l\'élégance française à la chaleur culturelle latino-américaine.',
    'about.bio.p3': 'Lauréate du concours « Aquí Canta Bolivia » en catégorie internationale (2024), elle construit aujourd\'hui un univers musical sensible et puissant, guidé par son concept artistique : l\'enveloppe enchantée.',
    
    // Music
    'music.title': 'Musique & Vidéos',
    'music.subtitle': 'Explorez mon univers sonore à travers différentes plateformes',
    'music.spotify': 'Écouter sur Spotify',
    'music.youtube': 'Regarder sur YouTube',
    'music.tiktok': 'Suivre sur TikTok',
    
    // Awards
    'awards.title': 'Distinctions & Reconnaissances',
    'awards.subtitle': 'Un parcours marqué par l\'excellence artistique',
    'awards.bolivia.title': 'Lauréate « Aquí Canta Bolivia »',
    'awards.bolivia.desc': 'Catégorie Internationale – 2024',
    'awards.vocal.title': 'Professeur de Technique Vocale',
    'awards.vocal.desc': 'Titre officiel RNCP Niveau 2 – France',
    'awards.events.title': 'Événements Culturels Officiels',
    'awards.events.desc': 'Participations dans des ambassades et institutions',
    'awards.press.title': 'Presse Internationale',
    'awards.press.desc': 'Couverture dans La Manche Libre – France',
    
    // Booking
    'booking.title': 'Réservation & Contact',
    'booking.subtitle': 'Créons ensemble un moment inoubliable',
    'booking.description': 'Disponible pour événements culturels, festivals, ambassades, institutions et événements privés de haut niveau.',
    'booking.cta.whatsapp': 'Contacter via WhatsApp',
    'booking.cta.email': 'Envoyer un email',
    'booking.follow': 'Me suivre',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.tagline': 'L\'art de créer des moments enchantés',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.music': 'Música',
    'nav.awards': 'Distinciones',
    'nav.booking': 'Reservas',
    
    // Hero
    'hero.subtitle': 'Cantante • Pop Francesa • Jazz • Músicas del Mundo',
    'hero.headline': 'L\'enveloppe enchantée',
    'hero.description': 'Una experiencia escénica donde cada nota, gesto y silencio envuelve al público en una atmósfera única.',
    'hero.cta.booking': 'Reservar una presentación',
    'hero.cta.discover': 'Descubrir mi universo',
    
    // About
    'about.title': 'Mi Universo Creativo',
    'about.intro': 'Existen voces que no buscan llenar estadios, sino tocar algo más profundo.',
    'about.bio.p1': 'Mei Hoff es una artista francesa cuya voz viaja entre el pop poético, el jazz y las músicas del mundo, creando experiencias escénicas íntimas y elegantes.',
    'about.bio.p2': 'Formada en París en artes escénicas y técnica vocal, ha desarrollado su trayectoria artística entre Europa y América Latina, fusionando la elegancia francesa con la calidez cultural latinoamericana.',
    'about.bio.p3': 'Ganadora del concurso « Aquí Canta Bolivia » en categoría internacional (2024), construye hoy un universo musical sensible y poderoso, guiado por su concepto artístico: l\'enveloppe enchantée.',
    
    // Music
    'music.title': 'Música & Videos',
    'music.subtitle': 'Explora mi universo sonoro a través de diferentes plataformas',
    'music.spotify': 'Escuchar en Spotify',
    'music.youtube': 'Ver en YouTube',
    'music.tiktok': 'Seguir en TikTok',
    
    // Awards
    'awards.title': 'Distinciones & Reconocimientos',
    'awards.subtitle': 'Una trayectoria marcada por la excelencia artística',
    'awards.bolivia.title': 'Ganadora « Aquí Canta Bolivia »',
    'awards.bolivia.desc': 'Categoría Internacional – 2024',
    'awards.vocal.title': 'Profesora de Técnica Vocal',
    'awards.vocal.desc': 'Título oficial RNCP Nivel 2 – Francia',
    'awards.events.title': 'Eventos Culturales Oficiales',
    'awards.events.desc': 'Participaciones en embajadas e instituciones',
    'awards.press.title': 'Prensa Internacional',
    'awards.press.desc': 'Cobertura en La Manche Libre – Francia',
    
    // Booking
    'booking.title': 'Reservas & Contacto',
    'booking.subtitle': 'Creemos juntos un momento inolvidable',
    'booking.description': 'Disponible para eventos culturales, festivales, embajadas, instituciones y eventos privados de alto nivel.',
    'booking.cta.whatsapp': 'Contactar vía WhatsApp',
    'booking.cta.email': 'Enviar email',
    'booking.follow': 'Sígueme',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.tagline': 'El arte de crear momentos encantados',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.music': 'Music',
    'nav.awards': 'Awards',
    'nav.booking': 'Booking',
    
    // Hero
    'hero.subtitle': 'Singer • French Pop • Jazz • World Music',
    'hero.headline': 'L\'enveloppe enchantée',
    'hero.description': 'A stage experience where every note, gesture and silence envelops the audience in a unique atmosphere.',
    'hero.cta.booking': 'Book a Performance',
    'hero.cta.discover': 'Discover My Universe',
    
    // About
    'about.title': 'My Creative Universe',
    'about.intro': 'There are voices that don\'t seek to fill stadiums, but to touch something deeper.',
    'about.bio.p1': 'Mei Hoff is a French artist whose voice travels between poetic pop, jazz and world music, creating intimate and elegant stage experiences.',
    'about.bio.p2': 'Trained in Paris in performing arts and vocal technique, she has developed her artistic career between Europe and Latin America, blending French elegance with Latin American cultural warmth.',
    'about.bio.p3': 'Winner of the « Aquí Canta Bolivia » contest in the international category (2024), she is now building a sensitive and powerful musical universe, guided by her artistic concept: l\'enveloppe enchantée.',
    
    // Music
    'music.title': 'Music & Videos',
    'music.subtitle': 'Explore my sonic universe across different platforms',
    'music.spotify': 'Listen on Spotify',
    'music.youtube': 'Watch on YouTube',
    'music.tiktok': 'Follow on TikTok',
    
    // Awards
    'awards.title': 'Awards & Recognition',
    'awards.subtitle': 'A journey marked by artistic excellence',
    'awards.bolivia.title': 'Winner « Aquí Canta Bolivia »',
    'awards.bolivia.desc': 'International Category – 2024',
    'awards.vocal.title': 'Vocal Technique Teacher',
    'awards.vocal.desc': 'Official RNCP Level 2 Title – France',
    'awards.events.title': 'Official Cultural Events',
    'awards.events.desc': 'Performances at embassies and institutions',
    'awards.press.title': 'International Press',
    'awards.press.desc': 'Featured in La Manche Libre – France',
    
    // Booking
    'booking.title': 'Booking & Contact',
    'booking.subtitle': 'Let\'s create an unforgettable moment together',
    'booking.description': 'Available for cultural events, festivals, embassies, institutions and high-end private events.',
    'booking.cta.whatsapp': 'Contact via WhatsApp',
    'booking.cta.email': 'Send an Email',
    'booking.follow': 'Follow Me',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.tagline': 'The art of creating enchanted moments',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mei-hoff-language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('mei-hoff-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
