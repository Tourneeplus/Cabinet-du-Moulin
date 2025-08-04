import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  ExternalLink,
  Navigation
} from "lucide-react";

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
              Nous sommes à votre disposition pour répondre à vos questions 
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
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Nos coordonnées
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
  <CardContent>
    <p className="text-lg text-foreground mb-4">
      41bis avenue Charles de Gaulle<br />
      85340 Olonne-sur-Mer
    </p>

    {/* Bouton cliquable vers Google Maps */}
    <a
      href="https://www.google.com/maps/place/41+b+Av.+Charles+de+Gaulle,+85340+Les+Sables-d'Olonne/@46.5062185,-1.7738952,17z/data=!3m1!4b1!4m6!3m5!1s0x48045d541561452b:0x6b3846765d099ef9!8m2!3d46.5062148!4d-1.7713203!16s%2Fg%2F11nnl0cz8j?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" className="flex items-center gap-2">
        <Navigation className="h-4 w-4" />
        Voir sur Google Maps
      </Button>
    </a>
  </CardContent>
</Card>

                    <Card className="p-6">
  <CardHeader className="pb-4">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
        <Phone className="h-6 w-6 text-secondary" />
      </div>
      <CardTitle className="text-xl">{t('contact.phone')}</CardTitle>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-lg text-foreground mb-4">
      06 25 42 89 76
    </p>

    {/* Bouton d'appel */}
    <a href="tel:0625428976">
      <Button className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        Appeler maintenant
      </Button>
    </a>
  </CardContent>
</Card>

           
            
              <Card className="p-6">
             <CardHeader className="pb-4">
                 <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
                  </div>
             <CardTitle className="text-xl">{t('contact.email')}</CardTitle>
                 </div>
               </CardHeader>
               <CardContent>
                 <p className="text-lg text-foreground mb-4">
                    cabide85340@gmail.com
                 </p>

    {/* Lien mailto vers la messagerie */}
    <a href="mailto:cabide85340@gmail.com">
      <Button variant="outline" className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        Envoyer un email
      </Button>
    </a>
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

    {/* Lien vers votre page Doctolib */}
    <a
      href="https://www.doctolib.fr/cabinet-infirmier/les-sables-d-olonne/cabinet-infirmier-laurie-nowacki-manon-thibaud"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        size="lg"
        variant="secondary"
        className="flex items-center gap-2 mx-auto"
      >
        <Calendar className="h-5 w-5" />
        {t('contact.doctolib')}
        <ExternalLink className="h-4 w-4 ml-1" />
      </Button>
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.992216848036!2d-1.7738952!3d46.5062185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48045d541561452b%3A0x6b3846765d099ef9!2s41%20b%20Av.%20Charles%20de%20Gaulle%2C%2085340%20Les%20Sables-d&#39;Olonne!5e0!3m2!1sfr!2sfr!4v1690900000000!5m2!1sfr!2sfr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </CardContent>
</Card>

          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="p-8 bg-muted">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informations importantes
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Zone d'intervention</h4>
                  <p className="text-muted-foreground">
                    Nous intervenons à Olonne-sur-Mer et dans les communes environnantes. 
                    Contactez-nous pour vérifier si votre domicile est dans notre zone de couverture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Prise en charge</h4>
                  <p className="text-muted-foreground">
                    Tous nos soins sont remboursés par la Sécurité Sociale sur prescription médicale. 
                    Nous acceptons le tiers payant pour votre confort.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};