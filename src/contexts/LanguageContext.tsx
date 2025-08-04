import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Soins & Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact & RDV',
    
    // Home page
    'home.title': 'Cabinet du Moulin',
    'home.subtitle': 'Soins infirmiers à domicile et au cabinet',
    'home.mission': 'Notre mission est de vous accompagner avec professionnalisme et bienveillance dans vos soins de santé.',
    'home.nurses.title': 'Nos infirmières',
    'home.cta': 'Prendre rendez-vous',
    
    // Services
    'services.title': 'Nos Soins & Services',
    'services.pansements': 'Pansements et soins de plaies',
    'services.injections': 'Injections et vaccinations',
    'services.prelevement': 'Prises de sang et prélèvements',
    'services.perfusions': 'Perfusions et traitements IV',
    'services.postop': 'Suivi post-opératoire',
    'services.domicile': 'Soins à domicile',
    
    // About
    'about.title': 'À propos de nous',
    'about.approach': 'Notre approche humaine',
    'about.description': 'Nous privilégions une approche personnalisée et humaine, en offrant des soins de qualité dans le respect et l\'écoute de chaque patient.',
    
    // Contact
    'contact.title': 'Contact & Prise de rendez-vous',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.doctolib': 'Prendre RDV via Doctolib',
    'contact.hours': 'Horaires',
    'contact.hours.text': 'Sur rendez-vous uniquement, à domicile ou au cabinet',
    
    // Footer
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité médicale (RGPD)',
    'footer.copyright': '© 2024 Cabinet du Moulin - Tous droits réservés',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Care & Services',
    'nav.about': 'About',
    'nav.contact': 'Contact & Appointment',
    
    // Home page
    'home.title': 'Nursing Practice',
    'home.subtitle': 'Home and office nursing care',
    'home.mission': 'Our mission is to support you with professionalism and kindness in your healthcare needs.',
    'home.nurses.title': 'Our nurses',
    'home.cta': 'Book an appointment',
    
    // Services
    'services.title': 'Our Care & Services',
    'services.pansements': 'Wound dressing and care',
    'services.injections': 'Injections and vaccinations',
    'services.prelevement': 'Blood draws and sampling',
    'services.perfusions': 'IV infusions and treatments',
    'services.postop': 'Post-operative follow-up',
    'services.domicile': 'Home care',
    
    // About
    'about.title': 'About us',
    'about.approach': 'Our human approach',
    'about.description': 'We prioritize a personalized and human approach, offering quality care with respect and attention to each patient.',
    
    // Contact
    'contact.title': 'Contact & Appointment booking',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.doctolib': 'Book via Doctolib',
    'contact.hours': 'Hours',
    'contact.hours.text': 'By appointment only, at home or in the office',
    
    // Footer
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Medical confidentiality (GDPR)',
    'footer.copyright': '© 2024 Nursing Practice - All rights reserved',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};