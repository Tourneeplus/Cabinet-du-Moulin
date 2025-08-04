import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Heart, 
  Award, 
  Users, 
  Home,
  Clock,
  Shield,
  Stethoscope,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import teamNurses from "@/assets/team-nurses.jpg";

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez notre équipe dévouée et notre philosophie de soins
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t('about.approach')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              {t('about.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 text-left">
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Bienveillance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Nous plaçons l'humain au centre de nos préoccupations. 
                    Chaque patient est unique et mérite une attention particulière, 
                    dans le respect de sa dignité et de ses besoins spécifiques.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-left">
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Excellence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Nous nous engageons à fournir des soins de la plus haute qualité, 
                    en nous tenant constamment informées des dernières pratiques 
                    et technologies médicales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre équipe
              </h2>
              <p className="text-xl text-muted-foreground">
                Deux infirmières diplômées d'État expérimentées et passionnées
              </p>
              
              <div className="mt-12 mb-16">
                <img 
                  src={teamNurses} 
                  alt="Notre équipe d'infirmières" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Laurie Nowacki</h3>
                    <p className="text-primary font-medium">Infirmière diplômée d'État</p>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Formation</p>
                        <p className="text-muted-foreground text-sm">
                          Diplôme d'État d'infirmière (2005)<br />
                          Spécialisation en soins des enfants et des adultes
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Stethoscope className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Spécialités</p>
                        <p className="text-muted-foreground text-sm">
                          Une vraie légende de la piqûre précise. 20 ans de métier, autant de thés, et toujours pas allergique aux réveils à 5h du mat’.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Expérience</p>
                        <p className="text-muted-foreground text-sm">
                          Son secret ? Une organisation au cordeau et un GPS intégré pour retrouver n’importe quel domicile… même dans un lotissement sans numéro !


                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Manon Thibaud</h3>
                    <p className="text-secondary font-medium">Infirmière diplômée d'État</p>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Formation</p>
                        <p className="text-muted-foreground text-sm">
                          Diplôme d'État d'infirmière (2015)<br />
                          Formation continue pour tous types de soins
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Stethoscope className="h-5 w-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Spécialités</p>
                        <p className="text-muted-foreground text-sm">
                          La relève dynamique ! Elle pique aussi bien qu’elle rigole (et croyez-nous, c’est beaucoup).
                          </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-1" />
                      <div>
                        <p className="font-medium">Expérience</p>
                        <p className="text-muted-foreground text-sm">
                          Son secret ? Toujours de bonne humeur, sauf quand la tablette du boulot décide de faire grève en plein bilan sanguin.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nos valeurs
              </h2>
              <p className="text-xl text-muted-foreground">
                Les principes qui guident notre pratique quotidienne
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confidentialité</h3>
                <p className="text-muted-foreground">
                  Respect absolu du secret médical et de la vie privée de nos patients.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Empathie</h3>
                <p className="text-muted-foreground">
                  Écoute active et compréhension des besoins émotionnels de chaque patient.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professionnelles</h3>
                <p className="text-muted-foreground">
                  Techniques à jour, formation continue et respect des protocoles.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proximité</h3>
                <p className="text-muted-foreground">
                  Présence rassurante et accompagnement dans la durée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rencontrons-nous
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nous serions ravies de faire votre connaissance et de discuter 
              de la meilleure façon de vous accompagner dans vos soins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/services">
                  Voir nos services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};