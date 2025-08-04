import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Heart, 
  Syringe, 
  Droplet, 
  Stethoscope, 
  Bandage, 
  Home,
  Shield,
  Clock,
  Users,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bandage,
      title: t('services.pansements'),
      description: "Soins de plaies simples et complexes, pansements spécialisés, surveillance de cicatrisation",
      details: ["Pansements post - opératoires", "Ulcères", "Brûlures", "Pansements avec méchage"]
    },
    {
      icon: Syringe,
      title: t('services.injections'),
      description: "Injections intramusculaires, sous-cutanées, vaccinations selon prescription médicale",
      details: ["Vaccins", "Insuline", "Anticoagulants", "Traitements spécialisés"]
    },
    {
      icon: Droplet,
      title: t('services.prelevement'),
      description: "Prélèvements sanguins, analyses biologiques sur prescription médicale",
      details: ["Bilans sanguins", "Glycémie", "INR", "ECBU"]
    },
    {
      icon: Heart,
      title: t('services.perfusions'),
      description: "Pose et surveillance de perfusions, traitements intraveineux",
      details: ["Perfusions de réhydratation", "Chimiothérapie", "Antibiotiques", "Antalgiques post - opératoires"]
    },
    {
      icon: Stethoscope,
      title: t('services.postop'),
      description: "Surveillance post-opératoire, soins spécialisés après chirurgie",
      details: ["Surveillance des constantes", "Soins de cicatrice", "Éducation patient", "Coordination médicale"]
    },
    {
      icon: Home,
      title: t('services.domicile'),
      description: "Tous nos soins peuvent être réalisés à votre domicile dans un environnement familier",
      details: ["Confort du domicile", "Horaires adaptés", "Matériel professionnel", "Suivi personnalisé"]
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Une gamme complète de soins infirmiers professionnels, 
              adaptés à vos besoins spécifiques
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pourquoi choisir le Cabinet du Moulin ?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sécurité & Qualité</h3>
                <p className="text-muted-foreground">
                  Respect strict des protocoles d'hygiène et de sécurité. 
                  Matériel médical stérilisé et conforme aux normes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Disponibilité</h3>
                <p className="text-muted-foreground">
                  Prise de rendez-vous rapide et flexible. 
                  Soins d'urgence selon disponibilité.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Approche Humaine</h3>
                <p className="text-muted-foreground">
                  Écoute, bienveillance et accompagnement personnalisé 
                  pour chaque patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'informations ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques. 
              Nous sommes là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/about">
                  En savoir plus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};