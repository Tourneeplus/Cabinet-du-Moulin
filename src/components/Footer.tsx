import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-background rounded-full">
                <Heart className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-bold">Cabinet du Moulin</h3>
                <p className="text-sm opacity-75">Olonne-sur-Mer</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Soins infirmiers professionnels à domicile et au cabinet, 
              avec bienveillance et expertise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-75 hover:opacity-100 transition-opacity">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 opacity-75" />
                <span className="opacity-75">
                  41bis avenue Charles de Gaulle<br />
                  85340 Olonne-sur-Mer
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-75" />
                <span className="opacity-75">06 25 42 89 76</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="opacity-75">cabide85340@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.hours')}</h4>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="h-4 w-4 mt-0.5 opacity-75" />
              <span className="opacity-75">
                {t('contact.hours.text')}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6">
              <Link to="/legal" className="hover:opacity-100 transition-opacity">
                {t('footer.legal')}
              </Link>
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};