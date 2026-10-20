import { SourceItem, PipelineStep, FactMetric, ExistingBrick, DataCategoryRow, SimulationProfile } from '../types.ts';

export const ARTICLE_METADATA = {
  title: "Être retrouvé en gare : faciliter le transport des personnes à mobilité réduite",
  subtitle: "À partir du billet acheté, que peut-on savoir d'un voyageur à mobilité réduite pour lui faciliter la gare ? Ce que la SNCF a déjà déployé, ce que le Cloud et l'Edge peuvent ajouter, et les freins à lever.",
  kicker: "Article · Accessibilité · Cloud et Edge",
  context: "Cas d'étude SNCF · Octobre 2026",
  author: "Rayan Taguemount",
  affiliation: "Euridis Business School",
  problematic: "Comment fédérer les services d'accessibilité existants (Assist'enGare, état des équipements, SNCF Connect) dans une plateforme cloud qui personnalise le parcours en gare selon le profil du voyageur PMR ?"
};

export const KEY_FACTS: FactMetric[] = [
  {
    value: "3 000",
    label: "Gares au total sur le réseau",
    detail: "Selon les chiffres de l'annonce officielle (2016)"
  },
  {
    value: "≈ 740",
    label: "Gares à aménager prioritaires",
    detail: "Au titre des schémas directeurs nationaux et régionaux"
  },
  {
    value: "5 millions",
    label: "Voyageurs handicapés en autonomie",
    detail: "Personnes voyageant chaque année sans accompagnement direct"
  },
  {
    value: "850 000",
    label: "Prestations d'assistance par an",
    detail: "Voyageurs nécessitant une prise en charge humaine dédiée"
  }
];

export const EXISTING_BRICKS: ExistingBrick[] = [
  {
    title: "Assist'enGare",
    description: "Plateforme unique de réservation de l'assistance en gare, portée par SNCF Gares & Connexions et SNCF Connect. Elle est accessible pour l'ensemble des transporteurs européens, avec la possibilité de joindre un centre de relation client dédié.",
    sourceTag: "DMA, 28/05/2024 · Ouidou"
  },
  {
    title: "État des équipements en temps réel",
    description: "Les voyageurs peuvent connaître l'état opérationnel des ascenseurs et des escaliers mécaniques. Les applications SNCF Connect et Ma Gare SNCF délivrent aussi une information précieuse aux PMR : accès aux quais sans escaliers, ascenseurs de substitution, correspondances douces.",
    sourceTag: "DMA, 28/05/2024 · SNCF Gares & Connexions"
  },
  {
    title: "Guidage et plans intérieurs",
    description: "Ma Gare SNCF propose une modélisation intérieure des gares et le calcul d'itinéraires, avec ou sans géolocalisation. Des balises Bluetooth ont été déployées dès 2019 avec des itinéraires adaptés aux besoins des PMR. Depuis février 2023, Wemap cartographie l'intérieur des gares sur OpenStreetMap pour la solution de guidage.",
    sourceTag: "02/10/2019 · 28/02/2022 · OpenStreetMap Wiki"
  },
  {
    title: "Smart Station",
    description: "Supervision centralisée des gares par des capteurs connectés (IoT), pour identifier en temps réel les équipements en panne (ascenseurs, escaliers, portes) et prioriser les interventions techniques. Le projet était opérationnel dans 300 gares dès 2022.",
    sourceTag: "SNCF Gares & Connexions, 14/09/2022"
  }
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    step: 1,
    zoneId: 'phone',
    zoneLabel: 'Téléphone du voyageur',
    title: 'Voyageur PMR',
    dataDescription: 'Achète son billet, déclare son besoin, accepte le partage consenti',
    goal: 'Lancer la demande d\'assistance et de guidage',
    annotation: 'Billet & besoin',
    details: 'Le point d\'entrée est l\'application du voyageur (ex. SNCF Connect). L\'usager renseigne son besoin spécifique (fauteuil électrique, non-voyant, malentendant) et valide explicitement le partage temporaire de sa position.'
  },
  {
    step: 2,
    zoneId: 'cloud',
    zoneLabel: 'Dans le Cloud',
    title: 'Donnée client',
    dataDescription: 'Billet Lyon → Paris, train 6612, voiture 12, fauteuil roulant',
    goal: 'Savoir qui voyage, où et quand',
    details: 'Centralisation de l\'information de réservation. La plateforme sait quel train transportera le voyageur, son heure précise d\'arrivée et son numéro de voiture.'
  },
  {
    step: 3,
    zoneId: 'cloud',
    zoneLabel: 'Dans le Cloud',
    title: 'Traitement de la donnée',
    dataDescription: 'Billet croisé avec les horaires en temps réel et le plan topologique de la gare',
    goal: 'Déduire où il sera précisément : Quai B, repère voiture 12',
    details: 'Le Cloud croise le diagramme d\'occupation des voies, le retard éventuel du train et le plan intérieur pour pré-calculer le point de rendez-vous exact.'
  },
  {
    step: 4,
    zoneId: 'cloud',
    zoneLabel: 'Cloud sécurisé (RGPD)',
    title: 'Spécificité de la donnée',
    dataDescription: 'Handicap = donnée hautement sensible au sens du RGPD, accès strictement restreint',
    goal: 'Adapter l\'alerte, sécuriser le transfert, programmer l\'effacement immédiat',
    isSensitive: true,
    annotation: 'Alerte vers la gare',
    details: 'Donnée de santé/vulnérabilité soumise à des mesures de chiffrement fort. Seuls les agents habilités pour cette mission spécifique reçoivent l\'information utile, sans conservation superflue.'
  },
  {
    step: 5,
    zoneId: 'edge',
    zoneLabel: 'En gare (Edge)',
    title: 'Position en gare',
    dataDescription: 'Edge : balises Bluetooth Low Energy, position précise, avec accord',
    goal: 'Retrouver le voyageur en direct, même en sous-sol sans GPS',
    details: 'Traitement local sur les serveurs Edge de la gare. Les balises Bluetooth et caméras optiques (sans reconnaissance faciale) affinent la position relative du voyageur dans le hall ou sur le quai.'
  },
  {
    step: 6,
    zoneId: 'edge',
    zoneLabel: 'Appli de l\'agent (Gare)',
    title: 'Avertissement du collaborateur',
    dataDescription: 'Train TGV, Quai B, voiture 12, repère précis, type d\'assistance',
    goal: 'Savoir exactement où se positionner sur le quai avant l\'arrêt du train',
    details: 'L\'agent d\'assistance reçoit une notification contextuelle sur son terminal professionnel 10 minutes avant l\'arrivée, avec l\'équipement de transfert approprié (ex. rampe d\'accès PMR).'
  },
  {
    step: 7,
    zoneId: 'edge',
    zoneLabel: 'Service personnalisé (En gare)',
    title: 'Service personnalisé & Clôture',
    dataDescription: 'Prise en charge confirmée par l\'agent d\'escale et le voyageur',
    goal: 'Aide sur mesure, accompagnement jusqu\'à la sortie ou correspondance, puis effacement des données',
    details: 'Une fois la mission validée par l\'agent, les données de géolocalisation en temps réel sont purgées de la mémoire locale conformément au principe de minimisation.'
  }
];

export const DATA_CATEGORIES: DataCategoryRow[] = [
  {
    name: "Plans et accès de la gare",
    location: ["Cloud"],
    purpose: "Calculer un itinéraire accessible et alternatif en amont",
    isSensitive: false
  },
  {
    name: "État des équipements (ascenseurs, escaliers mécaniques)",
    location: ["Edge", "Cloud"],
    purpose: "Éviter l'ascenseur en panne, alerter la maintenance et recalculer le cheminement",
    isSensitive: false
  },
  {
    name: "Billet : train, voiture, horaires, quai",
    location: ["Cloud"],
    purpose: "Savoir à quelle voie et quelle porte le voyageur descendra",
    isSensitive: false
  },
  {
    name: "Profil et besoin spécifique du voyageur",
    location: ["Cloud sécurisé"],
    purpose: "Adapter l'aide matérielle (rampe, fauteuil, guidage visuel). Donnée sensible soumise au RGPD",
    isSensitive: true
  },
  {
    name: "Position en gare (indoor)",
    location: ["Edge"],
    purpose: "Retrouver le voyageur en direct sur place, avec son consentement univoque",
    isSensitive: false
  },
  {
    name: "Demande d'assistance Assist'enGare",
    location: ["Cloud"],
    purpose: "Relier la réservation ferroviaire et la prise en charge humaine",
    isSensitive: false
  }
];

export const SIMULATION_PROFILES: SimulationProfile[] = [
  {
    id: 'marc',
    name: 'Marc V.',
    handicapType: 'Fauteuil roulant électrique',
    train: 'TGV INOUI 6612',
    origin: 'Lyon Part-Dieu (12h38)',
    destination: 'Paris Gare de Lyon (14h32)',
    arrivalPlatform: 'Quai B (Voie 13)',
    carriage: 'Voiture 12 (Place 45)',
    specificNeed: 'Rampe élévatrice de quai + guidage vers sortie Rue de Bercy',
    estimatedArrival: '14h32'
  },
  {
    id: 'eleonore',
    name: 'Éléonore D.',
    handicapType: 'Déficience visuelle sévère (canne blanche)',
    train: 'TER 891004',
    origin: 'Dijon Ville (14h15)',
    destination: 'Paris Bercy (17h04)',
    arrivalPlatform: 'Quai A (Voie 4)',
    carriage: 'Voiture 3 (Place 21)',
    specificNeed: 'Accompagnement physique jusqu\'au métro ligne 14',
    estimatedArrival: '17h04'
  },
  {
    id: 'thomas',
    name: 'Thomas L.',
    handicapType: 'Mobilité réduite temporaire (béquilles, entorse grave)',
    train: 'Ouigo 7831',
    origin: 'Marseille Saint-Charles (08h10)',
    destination: 'Lyon Saint-Exupéry (09h50)',
    arrivalPlatform: 'Quai 1 (Voie A)',
    carriage: 'Voiture 7 (Place 82)',
    specificNeed: 'Aide au portage bagage lourd + fauteuil de transit d\'appoint',
    estimatedArrival: '09h50'
  }
];

export const SOURCES_LIST: SourceItem[] = [
  {
    id: 1,
    title: "Emmanuel Thys, SNCF Connect & Tech : « Nous sommes 100% sur des architectures d'infrastructure-as-code »",
    author: "Reynald Fléchaux, Le Monde Informatique",
    date: "11/09/2024",
    url: "https://www.lemondeinformatique.fr/actualites/lire-emmanuel-thys-sncf-connect-et-tech--nous-sommes-100-sur-des-architectures-d-infrastructure-as-code-94671.html",
    notes: "Migration sur AWS en 18 mois, 3 zones, Kubernetes et pics info voyageur."
  },
  {
    id: 2,
    title: "Driving digital and IT transformation for SNCF, the railway company",
    author: "Sopra Steria (Étude de cas)",
    date: "05/03/2021",
    url: "https://www.soprasteria.co.uk/insights/client-success-stories/details/driving-digital-transformation-for-sncf-the-railway-company",
    notes: "Objectif de migration de 90% des 1 425 applications du groupe vers le cloud."
  },
  {
    id: 3,
    title: "Accessibilité SNCF - Webinaire de la Délégation Ministérielle à l'Accessibilité (DMA)",
    author: "Délégation Ministérielle à l'Accessibilité & SNCF",
    date: "28/05/2024",
    url: "https://www.ecologie.gouv.fr/sites/default/files/documents/Accessibilit%C3%A9%20SNCF%20-%20Webinaire%20DMA%2028%20mai%202024_VDEF%20diffusable.pdf",
    notes: "Bilan des schémas directeurs, Assist'enGare et déploiement des équipements."
  },
  {
    id: 4,
    title: "Digitalisation accélérée des gares grâce à Smart Station",
    author: "SNCF Gares & Connexions",
    date: "14/09/2022",
    url: "https://www.garesetconnexions.sncf/fr/actualites/digitalisation-acceleree-gares-grace-smart-station",
    notes: "Supervision par capteurs connectés IoT déployée dans 300 gares en 2022."
  },
  {
    id: 5,
    title: "Smart Station : des gares plus modernes et plus efficaces",
    author: "SNCF Gares & Connexions",
    date: "05/02/2021",
    url: "https://www.garesetconnexions.sncf/fr/actualites/smart-station-gares-plus-modernes-plus-efficaces",
    notes: "Maintenance prédictive des escaliers mécaniques et ascenseurs."
  },
  {
    id: 6,
    title: "Des balises Bluetooth déployées dans les gares",
    author: "SNCF Gares & Connexions",
    date: "02/10/2019",
    url: "https://www.garesetconnexions.sncf/de/node/274",
    notes: "Guidage indoor pour les personnes en situation de handicap."
  },
  {
    id: 7,
    title: "Challenge d'open innovation : localisation et guidage indoor",
    author: "SNCF Gares & Connexions et Cap Digital",
    date: "28/02/2022",
    url: "https://www.garesetconnexions.sncf/fr/actualite/challenge-optimiser-experience-gare",
    notes: "Expérimentations de positionnement indoor haute précision."
  },
  {
    id: 8,
    title: "Accessibilité : politique d'inclusion de SNCF Gares & Connexions",
    author: "SNCF Gares & Connexions (Page officielle)",
    date: "Date non indiquée",
    url: "https://www.garesetconnexions.sncf/fr/humain",
    notes: "Engagements de service et démarches d'accessibilité universelle."
  },
  {
    id: 9,
    title: "France/Gares SNCF : cartographie collaborative des équipements et cheminements",
    author: "OpenStreetMap Wiki & Wemap",
    date: "Février 2023",
    url: "https://wiki.openstreetmap.org/wiki/France/Gares_SNCF",
    notes: "Projet de modélisation détaillée de l'intérieur des gares sur OSM."
  },
  {
    id: 10,
    title: "SNCF Gares & Connexions, plateforme unique : Assist'enGare",
    author: "Ouidou (Référence projet)",
    date: "Date non indiquée",
    url: "https://ouidou.fr/?p=17072",
    notes: "Développement du guichet unique pour tous les transporteurs ferroviaires."
  },
  {
    id: 11,
    title: "Géolocalisation et applications mobiles : quelles règles de conformité ?",
    author: "CNIL (Commission Nationale de l'Informatique et des Libertés)",
    date: "07/07/2026",
    url: "https://cnil.fr/fr/geolocalisation-applications-mobiles-quelles-regles",
    notes: "Consentement libre, univoque et proportionné pour le tracking géographique."
  },
  {
    id: 12,
    title: "La CNIL valide le stockage des données de santé chez Microsoft",
    author: "Siècle Digital",
    date: "07/02/2024",
    url: "https://siecledigital.fr/2024/02/07/la-cnil-valide-le-stockage-des-donnees-de-sante-chez-microsoft/",
    notes: "Autorisation triennale EMC2/PNDS chez Azure et débat sur l'hébergement hors UE."
  },
  {
    id: 13,
    title: "Handicap : la SNCF s'engage à rendre 160 gares accessibles",
    author: "Reprise AFP par Tendance Ouest",
    date: "30/11/2016",
    url: "https://www.tendanceouest.com/actualite-203779-handicap-la-sncf-s-engage-a-rendre-160-gares-accessibles",
    notes: "Schéma directeur national 2016-2024, 740 gares au total, 3 milliards d'euros."
  },
  {
    id: 14,
    title: "La SNCF déploie des jumeaux numériques de ses gares",
    author: "Le Monde Informatique",
    date: "Date non indiquée",
    url: "https://www.lemondeinformatique.fr/actualites/lire-la-sncf-deploie-des-jumeaux-numeriques-de-ses-gares-98422.html",
    notes: "Articulation Edge (cartes Nvidia RTX sur site) et Cloud (GPU Microsoft Azure)."
  },
  {
    id: 15,
    title: "Indoor mapping for smarter train stations: how SNCF Transilien improves traveler experience",
    author: "Jawg (Blog technique)",
    date: "Date non indiquée",
    url: "https://blog.jawg.io/indoor-mapping-for-smarter-train-stations-how-sncf-transilien-improve-traveler-experience/",
    notes: "Cartographie vectorielle des cheminements en gare et correspondances."
  },
  {
    id: 16,
    title: "Le Beacon arrive en gare pour assister les voyageurs",
    author: "L'Écho Touristique",
    date: "Date non indiquée",
    url: "https://www.lechotouristique.com/article/le-beacon-arrive-en-gare,69654",
    notes: "Premières expérimentations de micro-localisation par balises radio."
  },
  {
    id: 17,
    title: "Edge computing and IoT on the railway infrastructure: case of Deutsche Bahn",
    author: "Preprint scientifique",
    date: "Avril 2026 (arXiv 2604.19377)",
    url: "https://arxiv.org/pdf/2604.19377",
    notes: "1 300 capteurs sur 650 aiguillages connectés en 5G vers des nœuds Edge locaux."
  }
];

export const RAW_STANDALONE_HTML = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Être retrouvé en gare : faciliter le transport des personnes à mobilité réduite</title>
<meta name="description" content="Article sur l'accessibilité PMR en gare : ce que la SNCF a déjà déployé, le rôle du Cloud et de l'Edge, le parcours de la donnée et les freins à lever.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
--bg:#F7F8FA; --surface:#FFFFFF; --ink:#14202B; --muted:#4A5B6B;
--line:#3C5468; --border:#C5D0DB;
--accent:#1F4E8C; --accent-soft:#E6EEF9;
--phone:#EAEEF3; --cloud:#E2ECFB; --edge:#E3F2E8; --edge-ink:#1F6B43;
--warn:#C77700; --warn-soft:#FFF7E8; --warn-ink:#8A5200;
--radius:14px;
}
@media (prefers-color-scheme: dark){
:root{
--bg:#0F1720; --surface:#16212C; --ink:#E8EEF4; --muted:#A9B7C4;
--line:#8FA5B8; --border:#2F4152;
--accent:#7DB2F0; --accent-soft:#18283A;
--phone:#1A2531; --cloud:#17283F; --edge:#15291E; --edge-ink:#7FD3A2;
--warn:#E5A33A; --warn-soft:#2D2414; --warn-ink:#F0B960;
}
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:76px}
@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Figtree,system-ui,-apple-system,"Segoe UI",sans-serif;font-size:17px;line-height:1.7}
h1,h2,h3{line-height:1.2;margin:0}
a{color:var(--accent)}
a:focus-visible,button:focus-visible,[tabindex]:focus-visible{outline:3px solid var(--warn);outline-offset:3px;border-radius:4px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
.skip{position:absolute;left:12px;top:-60px;background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:8px;z-index:50;text-decoration:none}
.skip:focus{top:12px}
.wrap{max-width:760px;margin:0 auto;padding:0 20px}
.wide{max-width:1120px;margin:0 auto;padding:0 20px}

.top{position:sticky;top:0;z-index:40;background:var(--surface);border-bottom:1px solid var(--border)}
.top .wide{display:flex;align-items:center;gap:20px;min-height:56px}
.brand{font-weight:700;text-decoration:none;color:var(--ink);white-space:nowrap}
.top nav{overflow-x:auto;flex:1}
.top ul{display:flex;gap:4px;list-style:none;margin:0;padding:0;white-space:nowrap}
.top a.nl{display:block;padding:8px 12px;border-radius:999px;text-decoration:none;color:var(--muted);font-size:15px;font-weight:500}
.top a.nl:hover,.top a.nl[aria-current="true"]{background:var(--accent-soft);color:var(--accent)}

.hero{padding:56px 0 40px}
.kicker{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:16px}
.hero h1{font-size:clamp(30px,5.2vw,50px);font-weight:700;letter-spacing:-.01em;max-width:18ch}
.hero .chapo{font-size:clamp(18px,2.4vw,21px);color:var(--muted);max-width:60ch;margin:20px 0 0}
.meta{margin:20px 0 0;font-size:14px;color:var(--muted)}
.problem{margin-top:32px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:22px 24px;max-width:820px}
.problem h2{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:8px}
.problem p{margin:0;font-size:19px;font-weight:600;line-height:1.5}

section.block{padding:44px 0}
section.block + section.block{border-top:1px solid var(--border)}
section.block h2{font-size:clamp(24px,3.4vw,32px);font-weight:700;margin-bottom:16px;letter-spacing:-.005em}
section.block h3{font-size:19px;margin:28px 0 8px}
section.block p{margin:0 0 16px}
.lead{font-size:19px;color:var(--muted)}
ul.plain{padding-left:20px;margin:0 0 16px}
ul.plain li{margin-bottom:8px}
.src{font-size:13px;color:var(--muted);margin-top:-6px}

.facts{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin:20px 0 8px;padding:0;list-style:none}
.facts li{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px}
.facts strong{display:block;font-size:26px;line-height:1.1;color:var(--accent);margin-bottom:6px}
.facts span{font-size:14px;color:var(--muted);line-height:1.4;display:block}

.bricks{display:grid;gap:14px;margin:20px 0;padding:0;list-style:none}
.brick{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px}
.brick h3{margin:0 0 6px;font-size:17px}
.brick p{margin:0;font-size:15.5px;color:var(--muted);line-height:1.55}
.brick .tag{display:inline-block;font-size:12px;font-weight:600;padding:2px 10px;border-radius:999px;background:var(--accent-soft);color:var(--accent);margin-top:10px}

.callout{background:var(--warn-soft);border:1px solid var(--warn);border-radius:var(--radius);padding:16px 18px;margin:20px 0;font-size:16px}
.callout strong{color:var(--warn-ink)}

/* schéma */
.schema{margin:28px 0 8px}
.lanes{display:grid;gap:28px}
.lane{--gap:40px;list-style:none;margin:0;padding:52px 24px 28px;border-radius:16px;position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));column-gap:var(--gap);align-items:stretch}
.lane::before{content:attr(data-label);position:absolute;top:16px;left:24px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.lane.phone{background:var(--phone)}
.lane.cloud{background:var(--cloud)}
.lane.edge{background:var(--edge)}
.card{position:relative;z-index:2;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:6px}
.card h3{margin:0;font-size:16px;line-height:1.25}
.card p{margin:0;font-size:14px;line-height:1.45}
.card b{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:1px}
.card .ic{width:28px;height:28px;stroke:var(--accent);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;margin-bottom:2px}
.card.edgec .ic{stroke:var(--edge-ink)}
.card.sens{background:var(--warn-soft);border:2px solid var(--warn);padding:15px}
.card.sens .ic{stroke:var(--warn-ink)}
.zone{display:none;align-self:flex-start;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:2px 8px;border-radius:999px;background:var(--accent-soft);color:var(--accent)}
.c1{grid-column:1}.c2{grid-column:2}.c3{grid-column:3}.c4{grid-column:4}.c5{grid-column:5}
.card.right::after{content:"";position:absolute;top:50%;left:100%;width:calc(var(--gap) - 8px);height:2px;margin-top:-1px;background:var(--line)}
.card.right::before{content:"";position:absolute;top:50%;margin-top:-6px;left:calc(100% + var(--gap) - 8px);border-left:8px solid var(--line);border-top:6px solid transparent;border-bottom:6px solid transparent}
.card.down::after{content:"";position:absolute;left:80%;top:100%;width:2px;height:100px;background:var(--line)}
.card.down::before{content:"";position:absolute;left:calc(80% - 5px);top:calc(100% + 100px);border-top:8px solid var(--line);border-left:6px solid transparent;border-right:6px solid transparent}
.note{position:absolute;left:calc(80% + 14px);top:calc(100% + 38px);font-size:12px;line-height:1.2;color:var(--muted);white-space:nowrap}
.keyidea{grid-column:2 / -1;align-self:center;padding:0 12px}
.keyidea p{margin:0;font-size:22px;font-weight:700;line-height:1.3;max-width:34ch}
.keyidea span{display:block;margin-top:8px;font-size:15px;color:var(--muted);font-weight:400}
.legend{display:flex;flex-wrap:wrap;gap:8px 20px;font-size:14px;color:var(--muted);margin:16px 0 0}
.legend i{display:inline-block;width:14px;height:14px;border-radius:4px;vertical-align:-2px;margin-right:6px;border:1px solid var(--border)}
.legend .l-warn{background:var(--warn-soft);border:2px solid var(--warn)}
.legend .l-cloud{background:var(--cloud)}
.legend .l-edge{background:var(--edge)}
.legend .l-phone{background:var(--phone)}

@media (max-width: 899px){
.lanes{gap:0}
.lane{display:block;background:none!important;padding:0}
.lane::before{display:none}
.card{margin:0 0 56px}
.lanes .lane:last-child .card:last-child{margin-bottom:0}
.zone{display:inline-block}
.card.right::after,.card.down::after{left:50%;top:100%;width:2px;height:48px;margin:0 0 0 -1px}
.card.right::before,.card.down::before{left:calc(50% - 6px);top:calc(100% + 48px);margin:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid var(--line);border-bottom:0}
.keyidea,.note{display:none}
}

/* tableau */
.tablewrap{overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);margin:16px 0}
table{border-collapse:collapse;width:100%;min-width:620px;font-size:15px;line-height:1.5}
caption{text-align:left;padding:14px 16px 0;font-weight:600}
th,td{text-align:left;padding:12px 16px;border-bottom:1px solid var(--border);vertical-align:top}
th{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
tr:last-child td{border-bottom:0}
.pill{display:inline-block;font-size:12px;font-weight:600;padding:2px 9px;border-radius:999px;white-space:nowrap}
.pill.c{background:var(--cloud);color:var(--accent)}
.pill.e{background:var(--edge);color:var(--edge-ink)}
.pill.s{background:var(--warn-soft);color:var(--warn-ink);border:1px solid var(--warn)}

.sources ol{padding-left:22px;margin:0}
.sources li{margin-bottom:12px;font-size:15.5px;line-height:1.5;overflow-wrap:anywhere}
.sources span{display:block;font-size:13.5px;color:var(--muted)}

footer{border-top:1px solid var(--border);padding:32px 0 48px;font-size:14px;color:var(--muted)}
footer p{margin:0 0 8px}
</style>
</head>
<body>
<a class="skip" href="#contenu">Aller au contenu</a>

<header class="top">
<div class="wide">
<a class="brand" href="#top">Accès PMR en gare</a>
<nav aria-label="Sommaire de l'article">
<ul>
<li><a class="nl" href="#constat">Constat</a></li>
<li><a class="nl" href="#existant">Existant</a></li>
<li><a class="nl" href="#idee">Notre idée</a></li>
<li><a class="nl" href="#schema">Schéma</a></li>
<li><a class="nl" href="#cloud">Cloud</a></li>
<li><a class="nl" href="#edge">Edge</a></li>
<li><a class="nl" href="#donnees">Données</a></li>
<li><a class="nl" href="#freins">Freins</a></li>
<li><a class="nl" href="#sources">Sources</a></li>
</ul>
</nav>
</div>
</header>

<main id="contenu">
<div id="top" class="hero">
<div class="wide">
<span class="kicker">Article · Accessibilité · Cloud et Edge</span>
<h1>Être retrouvé en gare : faciliter le transport des personnes à mobilité réduite</h1>
<p class="chapo">À partir du billet acheté, que peut-on savoir d'un voyageur à mobilité réduite pour lui faciliter la gare ? Ce que la SNCF a déjà déployé, ce que le Cloud et l'Edge peuvent ajouter, et les freins à lever.</p>
<p class="meta">Cas SNCF · Octobre 2026 · Rédigé par : Rayan Taguemount</p>
<div class="problem">
<h2>Problématique</h2>
<p>Comment fédérer les services d'accessibilité existants (Assist'enGare, état des équipements, SNCF Connect) dans une plateforme cloud qui personnalise le parcours en gare selon le profil du voyageur PMR ?</p>
</div>
</div>
</div>

<div class="wrap">

<section class="block" id="constat" aria-labelledby="h-constat">
<h2 id="h-constat">Un réseau immense, une accessibilité progressive</h2>
<p class="lead">La loi handicap de 2005 prévoyait que les lieux et les transports publics soient accessibles avant le 1er janvier 2015. Pour les gares, le chemin est plus long que prévu.</p>
<p>En 2016, la SNCF et l'État ont signé le schéma directeur national d'accessibilité : 160 gares nationales à rendre accessibles d'ici 2024, auxquelles s'ajoutent des schémas régionaux pour 370 gares desservies par TER et 209 en Île-de-France. Au total, près de 740 gares à aménager, pour un investissement estimé à environ 3 milliards d'euros. Sur 3 000 gares, un peu moins d'une sur deux devait donc être accessible en 2024.</p>
<ul class="facts" aria-label="Chiffres cités lors de l'annonce de 2016">
<li><strong>3 000</strong><span>gares au total, selon les chiffres de l'époque</span></li>
<li><strong>≈ 740</strong><span>gares à aménager au titre des schémas directeurs</span></li>
<li><strong>5 millions</strong><span>de personnes en situation de handicap voyagent chaque année en autonomie</span></li>
<li><strong>850 000</strong><span>personnes ont besoin d'une prestation d'assistance</span></li>
</ul>
<p class="src">Source : annonce du 30/11/2016, reprise de l'AFP par Tendance Ouest. Chiffres de 2016, à actualiser avant toute utilisation officielle.</p>
<p>Tant que toutes les gares ne seront pas accessibles, l'assistance humaine reste centrale. La vraie question devient alors : comment l'agent sait-il qui arrive, quand, et où le retrouver ?</p>
</section>

<section class="block" id="existant" aria-labelledby="h-existant">
<h2 id="h-existant">Ce qui existe déjà</h2>
<p class="lead">La SNCF a posé plusieurs briques. Notre plateforme ne part pas de zéro : elle doit s'appuyer dessus.</p>
<ul class="bricks">
<li class="brick">
<h3>Assist'enGare</h3>
<p>Plateforme unique de réservation de l'assistance en gare, portée par SNCF Gares & Connexions et SNCF Connect. Elle est accessible pour l'ensemble des transporteurs européens, avec la possibilité de joindre un centre de relation client.</p>
<span class="tag">DMA, 28/05/2024 · Ouidou</span>
</li>
<li class="brick">
<h3>État des équipements en temps réel</h3>
<p>Les voyageurs peuvent connaître l'état des ascenseurs et des escaliers mécaniques. Les applications SNCF Connect et Ma Gare SNCF délivrent aussi une information utile aux PMR : accès aux quais sans escaliers, ascenseurs, correspondances.</p>
<span class="tag">DMA, 28/05/2024 · SNCF Gares & Connexions</span>
</li>
<li class="brick">
<h3>Guidage et plans intérieurs</h3>
<p>Ma Gare SNCF propose une modélisation intérieure des gares et le calcul d'itinéraires, avec ou sans géolocalisation. Des balises Bluetooth ont été déployées dès 2019, avec des itinéraires qui s'adaptent notamment aux besoins des PMR. Depuis février 2023, Wemap cartographie l'intérieur des gares sur OpenStreetMap pour la solution de guidage.</p>
<span class="tag">02/10/2019 · 28/02/2022 · OpenStreetMap Wiki</span>
</li>
<li class="brick">
<h3>Smart Station</h3>
<p>Supervision centralisée des gares par des capteurs, pour identifier en temps réel les équipements en panne et prioriser les interventions. Le projet était opérationnel dans 300 gares en 2022.</p>
<span class="tag">SNCF Gares & Connexions, 14/09/2022</span>
</li>
</ul>
<div class="callout">
<strong>Ce qui manque, à notre connaissance.</strong> Dans les sources consultées, nous n'avons pas trouvé de plan de gare personnalisé selon le type de handicap, ni de suivi de la position du voyageur par l'agent d'assistance. Cela reste à confirmer avant de l'affirmer.
</div>
</section>

<section class="block" id="idee" aria-labelledby="h-idee">
<h2 id="h-idee">Notre idée : une couche qui relie l'existant</h2>
<p>Plutôt que de recréer un service, nous proposons une plateforme qui regroupe quatre fonctions autour du voyageur à mobilité réduite :</p>
<ul class="plain">
<li>les <strong>plans et les accès</strong> de la gare, adaptés à son besoin (fauteuil, malvoyant, etc.) ;</li>
<li>l'<strong>état des équipements</strong> en temps réel, pour éviter l'ascenseur en panne ;</li>
<li>la <strong>demande d'assistance</strong>, reliée à Assist'enGare ;</li>
<li>une <strong>localisation consentie</strong>, pour que l'agent le retrouve sans le chercher.</li>
</ul>
<p>Le point de départ est simple : le billet acheté. Il dit quel train, quelle voiture et quel besoin. Croisé avec les horaires et le plan de la gare d'arrivée, il indique où le voyageur sera. Les balises en gare affinent ensuite sa position réelle.</p>
</section>

</div>

<section class="block" id="schema" aria-labelledby="h-schema" style="border-top:1px solid var(--border)">
<div class="wide">
<h2 id="h-schema">Le parcours de la donnée, étape par étape</h2>
<p class="lead" style="max-width:62ch">Où se trouve la donnée, où elle passe, où elle va, et à quoi elle sert. Lecture de gauche à droite et de haut en bas.</p>

<figure class="schema" aria-labelledby="schema-cap" style="margin-left:0;margin-right:0">
<figcaption id="schema-cap" class="sr">Schéma en sept étapes : du voyageur PMR au service personnalisé en gare, en passant par le Cloud et l'Edge.</figcaption>
<div class="lanes">

<ol class="lane phone" data-label="Téléphone du voyageur" aria-label="Zone : téléphone du voyageur" style="list-style:none">
<li class="card c1 down">
<span class="zone">Téléphone</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/></svg>
<h3><span class="sr">Étape 1 : </span>Voyageur PMR</h3>
<p><b>Donnée</b>Achète son billet, déclare son besoin, accepte le partage</p>
<p><b>But</b>Lancer la demande</p>
<span class="note" aria-hidden="true">billet et besoin</span>
</li>
<li class="keyidea">
<p>Le billet acheté permet de savoir où retrouver le voyageur</p>
<span>Exemple : arrivée à 14h32, quai B, voiture 12, besoin fauteuil roulant</span>
</li>
</ol>

<ol class="lane cloud" data-label="Dans le Cloud" aria-label="Zone : Cloud" style="list-style:none">
<li class="card c1 right">
<span class="zone">Cloud</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>
<h3><span class="sr">Étape 2 : </span>Donnée client</h3>
<p><b>Donnée</b>Billet Lyon → Paris, voiture 12, fauteuil roulant</p>
<p><b>But</b>Savoir qui voyage, où et quand</p>
</li>
<li class="card c2 right">
<span class="zone">Cloud</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" r="1.8"/><path d="M10 7.5v6h5l2.5 5"/><path d="M10 10.5h4"/><path d="M7.5 12.5a5 5 0 1 0 6 7"/></svg>
<h3><span class="sr">Étape 3 : </span>Traitement de la donnée</h3>
<p><b>Donnée</b>Billet croisé avec horaires et plan de gare</p>
<p><b>But</b>Déduire où il sera : quai B, voiture 12</p>
</li>
<li class="card c3 down sens">
<span class="zone">Cloud sécurisé</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 21.5 20h-19z"/><path d="M12 10v5"/><path d="M12 17.5v.5"/></svg>
<h3><span class="sr">Étape 4 : </span>Spécificité de la donnée</h3>
<p><b>Donnée</b>Handicap = donnée sensible, accès limité</p>
<p><b>But</b>Adapter l'alerte, prévoir l'effacement</p>
<span class="note" aria-hidden="true">alerte vers la gare</span>
</li>
</ol>

<ol class="lane edge" data-label="En gare : Edge et appli de l'agent" aria-label="Zone : en gare, Edge et application de l'agent" style="list-style:none">
<li class="card c3 right edgec">
<span class="zone">Edge</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>
<h3><span class="sr">Étape 5 : </span>Position en gare</h3>
<p><b>Donnée</b>Edge : balises, position précise, avec accord</p>
<p><b>But</b>Le retrouver en direct</p>
</li>
<li class="card c4 right edgec">
<span class="zone">Appli de l'agent</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16.5v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>
<h3><span class="sr">Étape 6 : </span>Avertissement du collaborateur</h3>
<p><b>Donnée</b>Train, quai B, voiture 12, position, besoin</p>
<p><b>But</b>Savoir où aller</p>
</li>
<li class="card c5 edgec">
<span class="zone">En gare</span>
<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 11l2.2 2.2L22 9.5"/></svg>
<h3><span class="sr">Étape 7 : </span>Service personnalisé</h3>
<p><b>Donnée</b>Prise en charge confirmée par l'agent</p>
<p><b>But</b>Aide sur mesure, puis effacement</p>
</li>
</ol>

</div>
<div class="legend" aria-label="Légende">
<span><i class="l-phone"></i>Téléphone</span>
<span><i class="l-cloud"></i>Cloud</span>
<span><i class="l-edge"></i>Edge et agent, en gare</span>
<span><i class="l-warn"></i>Donnée sensible (handicap)</span>
</div>
</figure>

<div class="wrap" style="padding:0;margin:24px 0 0;max-width:760px;margin-left:0">
<p>L'exemple (Lyon, Paris, quai B, voiture 12, 14h32) est illustratif. Il montre la logique : le billet et les horaires disent où le voyageur devrait être, les balises confirment où il est vraiment, et l'agent reçoit uniquement ce dont il a besoin pour intervenir.</p>
<p class="src">Schéma de proposition, construit sur les briques existantes de la SNCF. Ce n'est pas un système déjà déployé.</p>
</div>
</div>
</section>

<div class="wrap">

<section class="block" id="cloud" aria-labelledby="h-cloud">
<h2 id="h-cloud">Le Cloud : le socle partagé</h2>
<p class="lead">Le Cloud héberge ce qui doit être commun à toutes les gares et accessible partout.</p>
<p>La SNCF y est déjà largement engagée. SNCF Connect & Tech a terminé en 2021 sa migration sur le cloud AWS, une opération bouclée en 18 mois. L'hébergement se fait sur trois zones AWS, avec une mise à l'échelle automatique grâce à Kubernetes. L'équipe a aussi défini des configurations prêtes à activer pour les pics, dont une orientée information voyageurs.</p>
<p class="src">Source : Reynald Fléchaux, Le Monde Informatique, 11/09/2024, interview d'Emmanuel Thys.</p>
<p>À l'échelle du groupe, l'objectif affiché était de migrer 90 % des 1 425 applications vers le cloud, avec une stratégie multi-cloud (AWS, Microsoft Azure, IBM Cloud).</p>
<p class="src">Source : Sopra Steria, étude de cas SNCF, 05/03/2021.</p>
<h3>Dans notre proposition, le Cloud sert à :</h3>
<ul class="plain">
<li>stocker les plans, les accès et les profils de besoins de toutes les gares ;</li>
<li>croiser le billet avec les horaires et calculer un itinéraire accessible ;</li>
<li>conserver l'historique et superviser plusieurs gares à la fois ;</li>
<li>se brancher sur Assist'enGare et sur SNCF Connect, sans les reconstruire.</li>
</ul>
</section>

<section class="block" id="edge" aria-labelledby="h-edge">
<h2 id="h-edge">L'Edge : réagir sur place</h2>
<p class="lead">L'Edge désigne le traitement fait au plus près du terrain : dans la gare, sur les balises, sur le téléphone.</p>
<h3>Pourquoi il est indispensable ici</h3>
<ul class="plain">
<li><strong>Localisation.</strong> Le GPS est limité dans les gares souterraines : la SNCF a développé un système de positionnement visuel pour y répondre. Les balises Bluetooth, elles, fonctionnent sans GPS ni connexion Internet.</li>
<li><strong>Réaction immédiate.</strong> Prévenir un agent ou signaler un ascenseur en panne doit marcher même si le réseau faiblit (notre analyse).</li>
<li><strong>Confidentialité.</strong> Traiter la position au plus près évite de l'envoyer en continu vers le Cloud (notre proposition).</li>
</ul>
<h3>Des exemples réels</h3>
<ul class="plain">
<li><strong>SNCF, Smart Station</strong> : capteurs et transmetteurs radio dans 300 gares en 2022 (SNCF Gares & Connexions, 14/09/2022).</li>
<li><strong>SNCF, balises Bluetooth</strong> : guidage en gare via Ma Gare SNCF (SNCF Gares & Connexions, 02/10/2019).</li>
<li><strong>SNCF, jumeaux numériques des gares</strong> : traitement local sur site avec des cartes Nvidia RTX, et traitement dans le cloud sur des GPU Microsoft Azure. C'est exactement l'articulation Edge + Cloud (Le Monde Informatique, date non indiquée).</li>
<li><strong>Deutsche Bahn</strong> : plus de 1 300 capteurs sur 650 aiguillages envoient leurs données en 5G vers un nœud Edge. C'est de l'infrastructure de voie, pas de la gare (preprint arXiv 2604.19377).</li>
</ul>
<h3>Comment Edge et Cloud s'articulent</h3>
<p>Le capteur ou la balise envoie sa mesure à l'Edge de la gare, qui réagit tout de suite. Seules les données minimales remontent ensuite au Cloud, qui agrège, calcule et conserve. Le Cloud renvoie enfin l'itinéraire et les alertes à l'application du voyageur et à celle de l'agent.</p>
</section>

<section class="block" id="donnees" aria-labelledby="h-donnees">
<h2 id="h-donnees">Les données à traiter</h2>
<p>Toutes les données n'ont ni la même sensibilité ni le même emplacement.</p>
<div class="tablewrap" role="region" aria-label="Tableau des données à traiter" tabindex="0">
<table>
<caption>Données, emplacement et utilité</caption>
<thead><tr><th scope="col">Donnée</th><th scope="col">Où</th><th scope="col">À quoi elle sert</th></tr></thead>
<tbody>
<tr><th scope="row">Plans et accès de la gare</th><td><span class="pill c">Cloud</span></td><td>Calculer un itinéraire accessible</td></tr>
<tr><th scope="row">État des équipements</th><td><span class="pill e">Edge</span> <span class="pill c">Cloud</span></td><td>Éviter l'ascenseur en panne, prioriser les interventions</td></tr>
<tr><th scope="row">Billet : train, voiture, horaires, quai</th><td><span class="pill c">Cloud</span></td><td>Savoir où le voyageur sera</td></tr>
<tr><th scope="row">Profil et besoin du voyageur</th><td><span class="pill s">Cloud sécurisé</span></td><td>Adapter l'aide (rampe, accompagnement). Donnée sensible</td></tr>
<tr><th scope="row">Position en gare</th><td><span class="pill e">Edge</span></td><td>Retrouver le voyageur en direct, avec son accord</td></tr>
<tr><th scope="row">Demande d'assistance</th><td><span class="pill c">Cloud</span></td><td>Relier la réservation et la prise en charge</td></tr>
</tbody>
</table>
</div>
</section>

<section class="block" id="freins" aria-labelledby="h-freins">
<h2 id="h-freins">Les freins documentés</h2>
<h3>1. Le consentement pour la géolocalisation</h3>
<p>Selon la CNIL, les données de géolocalisation sont sensibles au regard de la vie privée, car elles sont souvent continues et précises. Un consentement libre, spécifique, éclairé et univoque est nécessaire quand elles ne sont pas strictement nécessaires au service. Il ne l'est pas quand elles le sont. Dans tous les cas, la minimisation des données et la durée de conservation restent à respecter.</p>
<p class="src">Source : CNIL, « Géolocalisation et applications mobiles », 07/07/2026.</p>
<p>Pour l'assistance PMR, la nécessité de la position est à argumenter. Le plus sûr est un accord simple, limité à la durée de la prise en charge.</p>

<h3>2. L'hébergement des données sensibles</h3>
<p>En 2024, la CNIL a autorisé Microsoft à héberger pendant trois ans les données du Système national des données de santé. Elle refusait jusque-là l'hébergement de données de santé chez des fournisseurs de cloud non européens, et a réaffirmé sa préférence pour des acteurs européens. Le profil d'un voyageur PMR est une donnée sensible, et SNCF Connect & Tech tourne sur AWS, un fournisseur américain.</p>
<p class="src">Source : Siècle Digital, 07/02/2024 (auteur non indiqué).</p>
<div class="callout">
<strong>Nuance.</strong> Les règles sur l'hébergement de données de santé (certification HDS, SecNumCloud) visent les données de santé. Leur application exacte à un simple profil PMR reste à confirmer, mais le RGPD protège de toute façon les données sensibles.
</div>

<h3>3. L'échelle du déploiement</h3>
<p>SNCF Gares & Connexions exploite 3 030 gares, de tailles et d'équipements très différents. Équiper et maintenir des balises et des serveurs locaux partout est un chantier long. Nous n'avons trouvé aucun chiffre public sur le coût de l'Edge à la SNCF, et nous préférons ne pas en inventer.</p>
<p class="src">Source : OpenStreetMap Wiki, « France/Gares SNCF ».</p>
</section>

<section class="block" id="conclusion" aria-labelledby="h-conclusion">
<h2 id="h-conclusion">Conclusion</h2>
<p>La SNCF dispose déjà de la réservation d'assistance, de l'état des équipements, des plans intérieurs et d'un socle cloud. Ce qui reste à construire, c'est le lien : faire du billet un point de départ pour retrouver le voyageur, avec l'Edge pour la précision et le Cloud pour la mémoire, le tout sous consentement.</p>
<h3>Prochaines étapes proposées</h3>
<ul class="plain">
<li>faire valider le traitement des données sensibles et de la position par un DPO ;</li>
<li>tester avec une gare pilote déjà équipée de balises ;</li>
<li>mesurer le gain pour l'agent et pour le voyageur avant tout déploiement large.</li>
</ul>
</section>

<section class="block sources" id="sources" aria-labelledby="h-sources">
<h2 id="h-sources">Sources</h2>
<ol>
<li><a href="https://www.lemondeinformatique.fr/actualites/lire-emmanuel-thys-sncf-connect-et-tech--nous-sommes-100-sur-des-architectures-d-infrastructure-as-code-94671.html" rel="noopener">Emmanuel Thys, SNCF Connect & Tech</a><span>Reynald Fléchaux, Le Monde Informatique, 11/09/2024</span></li>
<li><a href="https://www.soprasteria.co.uk/insights/client-success-stories/details/driving-digital-transformation-for-sncf-the-railway-company" rel="noopener">Driving digital and IT transformation for SNCF</a><span>Sopra Steria, 05/03/2021</span></li>
<li><a href="https://www.ecologie.gouv.fr/sites/default/files/documents/Accessibilit%C3%A9%20SNCF%20-%20Webinaire%20DMA%2028%20mai%202024_VDEF%20diffusable.pdf" rel="noopener">Accessibilité SNCF, webinaire DMA</a><span>Délégation Ministérielle à l'Accessibilité, avec SNCF, 28/05/2024</span></li>
<li><a href="https://www.garesetconnexions.sncf/fr/actualites/digitalisation-acceleree-gares-grace-smart-station" rel="noopener">Digitalisation accélérée des gares grâce à Smart Station</a><span>SNCF Gares & Connexions, 14/09/2022</span></li>
<li><a href="https://www.garesetconnexions.sncf/fr/actualites/smart-station-gares-plus-modernes-plus-efficaces" rel="noopener">Smart Station : des gares plus modernes et plus efficaces</a><span>SNCF Gares & Connexions, 05/02/2021</span></li>
<li><a href="https://www.garesetconnexions.sncf/de/node/274" rel="noopener">Des balises Bluetooth déployées dans les gares</a><span>SNCF Gares & Connexions, 02/10/2019</span></li>
<li><a href="https://www.garesetconnexions.sncf/fr/actualite/challenge-optimiser-experience-gare" rel="noopener">Challenge d'open innovation : localisation et guidage indoor</a><span>SNCF Gares & Connexions et Cap Digital, 28/02/2022</span></li>
<li><a href="https://www.garesetconnexions.sncf/fr/humain" rel="noopener">Accessibilité, SNCF Gares & Connexions</a><span>Date non indiquée</span></li>
<li><a href="https://wiki.openstreetmap.org/wiki/France/Gares_SNCF" rel="noopener">France/Gares SNCF</a><span>OpenStreetMap Wiki, projet démarré en février 2023</span></li>
<li><a href="https://ouidou.fr/?p=17072" rel="noopener">SNCF Gares & Connexions, plateforme unique (Assist'enGare)</a><span>Ouidou, page de référence, date non indiquée</span></li>
<li><a href="https://cnil.fr/fr/geolocalisation-applications-mobiles-quelles-regles" rel="noopener">Géolocalisation et applications mobiles : quelles règles ?</a><span>CNIL, 07/07/2026</span></li>
<li><a href="https://siecledigital.fr/2024/02/07/la-cnil-valide-le-stockage-des-donnees-de-sante-chez-microsoft/" rel="noopener">La CNIL valide le stockage des données de santé chez Microsoft</a><span>Siècle Digital, 07/02/2024</span></li>
<li><a href="https://www.tendanceouest.com/actualite-203779-handicap-la-sncf-s-engage-a-rendre-160-gares-accessibles" rel="noopener">Handicap : la SNCF s'engage à rendre 160 gares accessibles</a><span>Reprise AFP par Tendance Ouest, annonce du 30/11/2016</span></li>
<li><a href="https://www.lemondeinformatique.fr/actualites/lire-la-sncf-deploie-des-jumeaux-numeriques-de-ses-gares-98422.html" rel="noopener">La SNCF déploie des jumeaux numériques de ses gares</a><span>Le Monde Informatique, date non indiquée</span></li>
<li><a href="https://blog.jawg.io/indoor-mapping-for-smarter-train-stations-how-sncf-transilien-improve-traveler-experience/" rel="noopener">Indoor mapping for smarter train stations</a><span>Jawg (blog), date non indiquée</span></li>
<li><a href="https://www.lechotouristique.com/article/le-beacon-arrive-en-gare,69654" rel="noopener">Le Beacon arrive en gare</a><span>L'Echo Touristique, date non indiquée</span></li>
<li><a href="https://arxiv.org/pdf/2604.19377" rel="noopener">Edge et IoT sur le réseau Deutsche Bahn</a><span>Preprint arXiv 2604.19377</span></li>
</ol>
</section>

</div>
</main>

<footer>
<div class="wrap">
<p>Article de proposition réalisé dans le cadre d'un cas SNCF sur l'accessibilité PMR. Le schéma et l'exemple sont illustratifs et ne décrivent pas un système déjà déployé.</p>
<p>Certaines sources n'indiquent pas de date : elle est signalée comme telle. Les chiffres de 2016 sont à actualiser.</p>
</div>
</footer>

<script>
(function(){
var links = document.querySelectorAll('a.nl');
if(!('IntersectionObserver' in window) || !links.length) return;
var map = {};
links.forEach(function(a){ map[a.getAttribute('href').slice(1)] = a; });
var io = new IntersectionObserver(function(entries){
entries.forEach(function(e){
if(e.isIntersecting && map[e.target.id]){
links.forEach(function(l){ l.removeAttribute('aria-current'); });
map[e.target.id].setAttribute('aria-current','true');
}
});
}, { rootMargin: '-30% 0px -60% 0px' });
Object.keys(map).forEach(function(id){
var el = document.getElementById(id);
if(el) io.observe(el);
});
})();
<\\/script>
</body>
</html>`;
