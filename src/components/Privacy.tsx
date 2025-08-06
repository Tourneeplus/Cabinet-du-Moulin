import React from "react";

const Privacy = () => {
  return (
    <main className="container mx-auto px-4 py-12 text-sm leading-relaxed text-foreground">
      <h1 className="text-2xl font-bold mb-6">Politique de confidentialité</h1>

      <section className="mb-6">
        <h2 className="font-semibold">1. Collecte des données</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Aucun formulaire ou service tiers n’enregistre vos informations sans que vous en soyez informé.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">2. Utilisation des données</h2>
        <p>
          Les données éventuellement collectées sont utilisées uniquement dans le cadre du bon fonctionnement du site et de la relation patient-soignant.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">3. Cookies</h2>
        <p>
          Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site sont utilisés. Aucun cookie de publicité ou de tracking n’est employé.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">4. Sécurité</h2>
        <p>
          Toutes les précautions sont prises pour protéger vos données personnelles. Le site utilise le protocole HTTPS et applique des normes de sécurité conformes aux recommandations de la CNIL.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">5. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : <strong>cabide85340@gmail.com</strong>.
        </p>
      </section>
    </main>
  );
};

export default Privacy;
