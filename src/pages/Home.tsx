import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Phone, MapPin, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light to-secondary-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-full">
                <Heart className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
           <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
               Cabinet Du Moulin
          </h1>
              <p className="text-2xl md:text-2xl text-muted-foreground mb-8">
              Laurie Nowacki et Marion Thibaud
              </p>

            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              {t('home.mission')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  {t('home.cta')}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                06 25 42 89 76
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos services de soins infirmiers professionnels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('services.pansements')}</h3>
                <p className="text-muted-foreground">Soins de plaies et pansements spécialisés</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('services.injections')}</h3>
                <p className="text-muted-foreground">Injections et vaccinations sécurisées</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('services.domicile')}</h3>
                <p className="text-muted-foreground">Soins personnalisés à votre domicile</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Voir tous nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nurses Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.nurses.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe dévouée et expérimentée à votre service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Laurie : <br /> Infirmière diplômée d'État</h3>
                <p className="text-muted-foreground">
                  Spécialisée dans les soins à domicile avec plus de 10 ans d'expérience 
                  dans l'accompagnement des patients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Manon : <br /> Infirmière diplômée d'État</h3>
                <p className="text-muted-foreground">
                  Experte en soins post-opératoires et suivis médicaux personnalisés, 
                  formée aux dernières techniques de soins.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Quick */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin de soins infirmiers ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour une prise en charge rapide et professionnelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                06 25 42 89 76
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Localisation</h3>
              <p className="text-muted-foreground">
                41bis avenue Charles de Gaulle<br />
                85340 Olonne-sur-Mer
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horaires</h3>
              <p className="text-muted-foreground">
                {t('contact.hours.text')}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre engagement</h3>
              <p className="text-muted-foreground">
                Soins de qualité dans le respect et l'écoute
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};