import React from "react";

const Legal = () => {
  const editors = [
    {
      name: "Laurie NOWACKI",
      ordinal: "2067312",
    },
    {
      name: "Manon THIBAUD",
      ordinal: "2210014",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 text-sm leading-relaxed text-foreground">
      <h1 className="text-2xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-6">
        <h2 className="font-semibold">Éditeurs du site</h2>
        {editors.map((editor, index) => (
          <p key={index} className="mb-4">
            <strong>Nom :</strong> {editor.name}<br />
            <strong>Profession :</strong> Infirmière diplômée d’État<br />
            <strong>Adresse professionnelle :</strong> 41bis avenue Charles de Gaulle, 85340 Olonne-sur-Mer<br />
            <strong>Téléphone :</strong> 06 25 42 89 76<br />
            <strong>Email :</strong> cabide85340@gmail.com<br />
            <strong>Numéro Ordinal :</strong> {editor.ordinal}
          </p>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Hébergeur du site</h2>
        <p>
          IONOS SARL – 7 place de la gare – BP 70109 – 57200 Sarreguemines Cedex – France<br />
          <a
            href="https://www.ionos.fr"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ionos.fr
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Données personnelles</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle sans consentement.
          Vous pouvez exercer vos droits de consultation, rectification ou
          suppression en nous contactant.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Cookies</h2>
        <p>
          Ce site n’utilise que des cookies techniques strictement nécessaires à son fonctionnement.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold">Conformité</h2>
        <p>
          Ce site respecte les obligations du code de la santé publique
          (articles R.4312-69 et R.4312-76), interdit toute publicité,
          et a été déclaré auprès du Conseil de l’Ordre compétent.
        </p>
      </section>

      <section>
        <h2 className="font-semibold">Lien utile</h2>
        <p>
          <a
            href="https://www.ordre-infirmiers.fr"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ordre National des Infirmiers
          </a>
        </p>
      </section>
    </main>
  );
};

export default Legal;
