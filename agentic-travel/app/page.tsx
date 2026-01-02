import styles from "./page.module.css";

const flightPlan = [
  {
    route: "Oran (ORN) → Alger (ALG)",
    duration: "1 h 05 • Air Algérie",
    tips: "Prendre un vol du soir pour passer la nuit à Alger et se reposer avant le long courrier.",
  },
  {
    route: "Alger (ALG) → Doha (DOH)",
    duration: "6 h 40 • Qatar Airways",
    tips: "Choisir la connexion de 01h40 pour limiter l'attente. Qatar offre 25 kg de bagage en soute.",
  },
  {
    route: "Doha (DOH) → Hanoï (HAN)",
    duration: "7 h 45 • Qatar Airways",
    tips: "Prévoir une réservation d'hôtel dès la première nuit pour le contrôle d'immigration vietnamien.",
  },
];

const itinerary = [
  {
    title: "Jour 1 · Départ d'Oran",
    location: "Oran → Alger",
    highlights: [
      "Formalités : vérifier passeport (validité 6 mois) et impression du visa électronique.",
      "Vol en fin de journée, nuit à l'hôtel ibis Alger Aéroport (navette gratuite).",
    ],
  },
  {
    title: "Jour 2 · Envol vers le Vietnam",
    location: "Alger → Doha → Hanoï",
    highlights: [
      "Enregistrement 3 h avant le départ international.",
      "Transit rapide à Doha : profiter des douches gratuites ou du quiet room.",
      "Arrivée à Hanoï tôt le matin du Jour 3, transfert privé réservé à l'avance (20 €).",
    ],
  },
  {
    title: "Jour 3 · Hanoï authentique",
    location: "Hanoï",
    highlights: [
      "Check-in à l'hôtel La Siesta Classic Ma May (quartier historique).",
      "Visites : lac Hoàn Kiếm, vieux quartier, street food tour guidé.",
      "Spectacle de marionnettes sur l'eau à 18 h.",
    ],
  },
  {
    title: "Jour 4 · Culture et street-food",
    location: "Hanoï",
    highlights: [
      "Matin : mausolée d'Hô-Chi-Minh et pagode au pilier unique.",
      "Après-midi : café aux œufs, train street, cours de cuisine vietnamienne.",
    ],
  },
  {
    title: "Jour 5 · Croisière baie d'Ha Long",
    location: "Baie d'Ha Long",
    highlights: [
      "Transfert navette premium (2 h 30).",
      "Croisière 2 jours/1 nuit (Indochina Sails) avec cabine balcon.",
      "Kayak dans les grottes karstiques et soirée calamars grillés.",
    ],
  },
  {
    title: "Jour 6 · Retour et vol vers Hué",
    location: "Baie d'Ha Long → Hué",
    highlights: [
      "Fin de croisière, retour à Hanoï.",
      "Vol domestique Vietnam Airlines vers Hué (1 h 15).",
      "Check-in à l'hôtel Azerai La Résidence sur la rivière des Parfums.",
    ],
  },
  {
    title: "Jour 7 · Citadelle impériale",
    location: "Hué",
    highlights: [
      "Visite guidée francophone de la citadelle et des tombeaux royaux.",
      "Croisière en bateau-dragon au coucher du soleil.",
    ],
  },
  {
    title: "Jour 8 · Route mandarine",
    location: "Hué → Hội An",
    highlights: [
      "Transfert privé en passant par le col des Nuages (Hai Van Pass).",
      "Arrêt aux plages de Lang Co.",
      "Arrivée à Hội An, check-in à l'hôtel Little Riverside.",
    ],
  },
  {
    title: "Jour 9 · Hội An patrimoine UNESCO",
    location: "Hội An",
    highlights: [
      "Visite du pont japonais, maisons ancestrales, ateliers de lanternes.",
      "Balade à vélo dans les rizières et cours de lanterne au coucher du soleil.",
    ],
  },
  {
    title: "Jour 10 · Détente & cuisine",
    location: "Hội An",
    highlights: [
      "Matinée plage à An Bang.",
      "Cours de cuisine avec marché local, déjeuner inclus.",
      "Soirée barbecue sur la rivière Thu Bồn.",
    ],
  },
  {
    title: "Jour 11 · Vol vers Hồ Chí Minh-Ville",
    location: "Da Nang → HCMC",
    highlights: [
      "Navette vers l'aéroport de Da Nang (45 min).",
      "Vol Vietnam Airlines vers HCMC (1 h 40).",
      "Check-in à l'hôtel Fusion Suites Saigon (petit déjeuner inclus).",
    ],
  },
  {
    title: "Jour 12 · Vibrations urbaines",
    location: "Hồ Chí Minh-Ville",
    highlights: [
      "Visite guidée francophone : palais de la Réunification, Poste centrale, cathédrale Notre-Dame.",
      "Street food tour en scooter avec pilote (soirée).",
    ],
  },
  {
    title: "Jour 13 · Delta du Mékong",
    location: "Mỹ Tho & Bến Tre",
    highlights: [
      "Excursion journée : bateau sur le Mékong, îlots fruits tropicaux.",
      "Déjeuner chez l'habitant, balade en sampan dans les canaux.",
    ],
  },
  {
    title: "Jour 14 · Retour vers l'Algérie",
    location: "HCMC → Doha → Alger → Oran",
    highlights: [
      "Derniers achats au marché Ben Thanh.",
      "Vol retour Qatar Airways, arrivée à Oran Jour 15.",
    ],
  },
];

const budgetItems = [
  { category: "Vols internationaux (Qatar Airways)", amount: "950 €", detail: "Tarif A/R au départ d'Alger, bagage inclus." },
  { category: "Vols domestiques (Hanoï ↔ Hué ↔ HCMC)", amount: "210 €", detail: "Vietnam Airlines, classe économique flexible." },
  { category: "Hébergements (13 nuits)", amount: "780 €", detail: "Hôtels 4★ petit-déjeuner inclus." },
  { category: "Croisière baie d'Ha Long", amount: "230 €", detail: "Cabine balcon, pension complète." },
  { category: "Transferts & excursions", amount: "260 €", detail: "Guides francophones, Mekong, street food tour." },
  { category: "Budget repas", amount: "160 €", detail: "12 € / jour en moyenne." },
  { category: "Visa électronique (e-visa 90 jours)", amount: "50 €", detail: "Demande en ligne sur site officiel." },
];

const preparation = [
  "Passeport valide 6 mois après la date de retour.",
  "Visa électronique vietnamien (type e-visa, entrée multiple si escapade au Cambodge envisagée).",
  "Assurance voyage couvrant frais médicaux et annulation (ex : Chapka Cap Assistance).",
  "Vaccins à jour : hépatite A, DT Polio, typhoïde recommandée.",
  "Copie papier et numérique des réservations vols, hôtels, croisière, transferts.",
  "Application de traduction hors-ligne (Google Translate) avec pack vietnamien téléchargé.",
];

const packingList = [
  "Passeport + copie, visa imprimé, 2 photos d'identité.",
  "Dollars américains (USD) pour les dépenses importantes, dong vietnamien via retrait sur place.",
  "Tenues respirantes et modestes pour visites de temples.",
  "Imperméable léger et protection contre la pluie (mars à mai : saison chaude humide).",
  "Adaptateur prises type A/C (220V).",
  "Trousse de pharmacie : anti-moustiques, ORL, pansements, traitement digestif.",
  "Carte SIM locale eSIM (Holafly) ou modem Wi-Fi de poche.",
];

const seasons = [
  {
    name: "Mars - Mai (Haute saison recommandée)",
    points: [
      "Climat agréable au Nord (22-28°C) et début saison sèche au Sud.",
      "Idéal pour croisière Ha Long et activités en plein air à Hội An.",
    ],
  },
  {
    name: "Juin - Septembre",
    points: [
      "Chaleur humide et pluies tropicales, prévoir activités intérieures.",
      "Surveiller météo pour Ha Long et Delta du Mékong.",
    ],
  },
  {
    name: "Octobre - Février",
    points: [
      "Nord plus frais, Sud en pleine saison sèche.",
      "Prévoir veste légère pour Hanoï et Hué en soirée.",
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <p className={styles.badge}>Voyage sur-mesure · 14 jours</p>
        <h1>Itinéraire Oran (Algérie) → Vietnam</h1>
        <p className={styles.subtitle}>
          Détail complet des vols, itinéraire, budget et conseils pratiques pour un voyage
          équilibré entre culture, nature et gastronomie.
        </p>
        <div className={styles.heroGrid}>
          <div className={styles.heroCard}>
            <span className={styles.label}>Période conseillée</span>
            <strong>Mars 2025 · 14 jours</strong>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.label}>Budget estimatif</span>
            <strong>≈ 2 640 € / personne</strong>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.label}>Style</span>
            <strong>Circuit privé premium</strong>
          </div>
          <div className={styles.heroCard}>
            <span className={styles.label}>Températures</span>
            <strong>22° - 32°C</strong>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Plan de vols optimal</h2>
        <div className={styles.cardGrid}>
          {flightPlan.map((flight) => (
            <article key={flight.route} className={styles.card}>
              <h3>{flight.route}</h3>
              <p className={styles.cardMeta}>{flight.duration}</p>
              <p>{flight.tips}</p>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Astuce : réserver les segments internationaux au départ d&apos;Alger puis ajouter les navettes Oran ↔ Alger (train de nuit ou vol domestique).
          Prévoir 4 heures de battement minimum entre l&apos;arrivée à Alger et le vol Qatar Airways.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Itinéraire jour par jour</h2>
        <div className={styles.timeline}>
          {itinerary.map((day, index) => (
            <div key={day.title} className={styles.timelineItem}>
              <div className={styles.timelineIndex}>
                <span>{index + 1}</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>{day.title}</h3>
                  <span>{day.location}</span>
                </div>
                <ul>
                  {day.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Budget prévisionnel</h2>
        <div className={styles.budgetTable}>
          {budgetItems.map((item) => (
            <div key={item.category} className={styles.budgetRow}>
              <div>
                <h3>{item.category}</h3>
                <p>{item.detail}</p>
              </div>
              <strong>{item.amount}</strong>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Total estimé : <strong>2 640 €</strong> incluant une marge de 10 % pour imprévus. Les dépenses personnelles,
          souvenirs et pourboires (prévoir 80 €) ne sont pas inclus.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Formalités & préparatifs</h2>
        <div className={styles.split}>
          <div className={styles.splitCard}>
            <h3>Avant le départ</h3>
            <ul>
              {preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.splitCard}>
            <h3>Checklist bagages</h3>
            <ul>
              {packingList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.tips}>
          <div>
            <h4>Change & paiement</h4>
            <p>
              Le dong vietnamien (VND) se retire facilement aux distributeurs (limite 3 M VND). Garder des USD pour la
              croisière et les services privés. Les cartes Visa & Mastercard sont acceptées dans la plupart des hôtels.
            </p>
          </div>
          <div>
            <h4>Connexion & sécurité</h4>
            <p>
              Opter pour une eSIM dès l&apos;aéroport de Hanoï (Viettel ou MobiFone). Éviter de boire l&apos;eau du robinet,
              privilégier l&apos;eau scellée. Utiliser Grab pour les déplacements urbains.
            </p>
          </div>
          <div>
            <h4>Visa & immigration</h4>
            <p>
              L&apos;e-visa se demande sur <a href="https://immigration.gov.vn" target="_blank" rel="noreferrer">le site officiel</a>.
              Temps de traitement : 3 à 5 jours ouvrés. Imprimer deux exemplaires à présenter à l&apos;arrivée.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Quand partir ?</h2>
        <div className={styles.seasonGrid}>
          {seasons.map((season) => (
            <article key={season.name} className={styles.seasonCard}>
              <h3>{season.name}</h3>
              <ul>
                {season.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Prêt à réserver ?</h2>
          <p>
            Contactez votre agence locale partenaire (Vietnam Découverte) pour bloquer les vols Qatar Airways et finaliser
            l&apos;itinéraire privé. Délais recommandés : 3 mois avant le départ.
          </p>
          <a className={styles.ctaButton} href="mailto:contact@vietnam-decouverte.com">
            Demander un devis détaillé
          </a>
        </div>
      </section>
    </main>
  );
}
