import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  ExternalLink
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Nous sommes à votre disposition pour répondre à vos questions <br />
              et organiser vos soins
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Pour toute urgence ou question, n&apos;hésitez pas à nous contacter directement.
              </h2>
            </div>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t('contact.address')}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Adresse */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=41bis+avenue+Charles+de+Gaulle+85340+LES+SABLES+D'OLONNE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-foreground hover:underline"
                  >
                    41bis avenue Charles de Gaulle<br />
                    85340 LES SABLES D&apos;OLONNE - Olonne-sur-Mer
                  </a>
                </div>

                {/* Téléphone */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href="tel:+33625428976"
                      className="text-lg font-semibold text-foreground hover:underline"
                    >
                      06 25 42 89 76
                    </a>
                  </div>
                  <a
                    href="tel:+33625428976"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-4 py-2 text-white text-sm font-medium hover:bg-primary-dark"
                  >
                    <Phone className="h-4 w-4" />
                    Appeler maintenant
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:cabide85340@gmail.com"
                      className="text-lg font-semibold text-foreground hover:underline"
                    >
                      cabide85340@gmail.com
                    </a>
                  </div>
                  <a
                    href="mailto:cabide85340@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-primary text-primary px-4 py-2 text-sm font-medium hover:bg-primary/10"
                  >
                    <Mail className="h-4 w-4" />
                    Envoyer un email
                  </a>
                </div>

                {/* Lien Facebook */}
                <div className="mt-4">
                  <a
                    href="https://www.facebook.com/people/Infirmières-Du-Moulin/61569228755153/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline gap-2"
                  >
                    <FaFacebook className="w-5 h-5" />
                    Suivez-nous sur Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{t('contact.hours')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">
                  {t('contact.hours.text')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Appointment and Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Prendre rendez-vous
              </h2>
            </div>

            {/* Doctolib */}
            <Card className="p-8 bg-primary text-primary-foreground">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Réservation en ligne</h3>
                <p className="text-lg mb-6 opacity-90">
                  Prenez rendez-vous rapidement et facilement via notre plateforme Doctolib
                </p>
                {/* Bouton cliquable Doctolib */}
                <a
                  href="https://www.doctolib.fr/cabinet-infirmier/les-sables-d-olonne/cabinet-infirmier-laurie-nowacki-manon-thibaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mx-auto px-6 py-3 rounded-md bg-secondary text-primary hover:bg-secondary-dark hover:text-primary-foreground transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  {t('contact.doctolib')}
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl">Notre localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.992216848036!2d-1.7738952!3d46.5062185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48045d541561452b%3A0x6b3846765d099ef9!2s41%20b%20Av.%20Charles%20de%20Gaulle%2C%2085340%20Les%20Sables-d'Olonne!5e0!3m2!1sfr!2sfr!4v1690900000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 flex justify-center items-center gap-2"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/41+b+Av.+Charles+de+Gaulle,+85340+Les+Sables-d'Olonne/@46.5062185,-1.7738952,16z/data=!3m1!4b1!4m6!3m5!1s0x48045d541561452b:0x6b3846765d099ef9!8m2!3d46.5062148!4d-1.7713203!16s%2Fg%2F11nnl0cz8j?entry=ttu",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Ouvrir dans Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
