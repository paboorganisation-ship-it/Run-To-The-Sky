import { slugify } from "@/lib/utils";

export interface Race {
  name: string;
  date: string;
  location: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  distance?: string;
  elevationGain?: string;
  slug: string;
  price: string; // Nouveau champ
  startAddress: string; // Nouveau champ
  finishAddress: string; // Nouveau champ
  aidStations: string; // Nouveau champ
  howToGetToStartLink: string; // Nouveau champ
  partnerAccommodationsLink: string; // Nouveau champ
}

export const races: Race[] = [
  {
    name: "Nice - Col d'Eze",
    date: "12 Octobre 2026",
    location: "Nice, Côte d'Azur",
    description: "Défiez-vous sur les pentes mythiques du Col d'Eze, une course épique au bord de la mer Méditerranée et au pied des Alpes.",
    fullDescription: `Le Col d'Eze est une ascension emblématique de la Côte d'Azur, célèbre pour ses vues imprenables sur la Méditerranée et son histoire liée au cyclisme professionnel. Cette course vous fera traverser des paysages méditerranéens typiques, avec des virages serrés et des pentes exigeantes. Le défi réside dans la gestion de l'effort sous le soleil azuréen, tout en profitant d'un panorama exceptionnel à chaque coup de pédale ou foulée. C'est une expérience unique qui combine la beauté du littoral et la rudesse de la montagne.`,
    imageUrl: "/images/Eze.jpg",
    distance: "12,6km",
    elevationGain: "507m d+",
    slug: slugify("Nice - Col d'Eze"),
    price: "45€",
    startAddress: "Promenade des Anglais, Nice",
    finishAddress: "Sommet du Col d'Eze",
    aidStations: "Km 5, Km 9",
    howToGetToStartLink: "#", // Lien placeholder
    partnerAccommodationsLink: "#", // Lien placeholder
  },
  {
    name: "Marseille - Col de l'Espigoulier",
    date: "20 Avril 2027",
    location: "Marseille, Provence",
    description: "Une course exigeante à travers les paysages provençaux, culminant au Col de l'Espigoulier.",
    fullDescription: `Le Col de l'Espigoulier, niché dans le massif de la Sainte-Baume, est un joyau de la Provence. Son ascension offre des vues spectaculaires sur la garrigue, les forêts de pins et, par temps clair, jusqu'à la mer. La route est sinueuse et technique, avec des passages raides qui mettront à l'épreuve votre endurance. Ce col est mythique pour son caractère sauvage et préservé, loin de l'agitation urbaine, offrant une immersion totale dans la nature provençale. C'est une course pour ceux qui aiment les défis au cœur d'une nature authentique.`,
    imageUrl: "/images/Espigoulier.jpg",
    distance: "11,2km",
    elevationGain: "574m d+",
    slug: slugify("Marseille - Col de l'Espigoulier"),
    price: "40€",
    startAddress: "Parc des Calanques, Marseille",
    finishAddress: "Sommet du Col de l'Espigoulier",
    aidStations: "Km 4, Km 8",
    howToGetToStartLink: "#", // Lien placeholder
    partnerAccommodationsLink: "#", // Lien placeholder
  },
  {
    name: "Annecy - Semnoz",
    date: "15 Juin 2027",
    location: "Annecy, Alpes",
    description: "Découvrez les panoramas exceptionnels du Semnoz avec vue sur le lac d'Annecy.",
    fullDescription: `Le Semnoz, "montagne d'Annecy", est un belvédère naturel offrant des vues à 360 degrés sur le lac d'Annecy, le Mont Blanc et les massifs environnants. L'ascension est progressive mais soutenue, traversant des alpages verdoyants et des forêts denses. Ce col est mythique pour sa proximité avec la ville d'Annecy et son accessibilité, tout en offrant un véritable défi montagnard. La récompense au sommet est un panorama à couper le souffle, faisant de cette course une expérience inoubliable pour les amoureux de la montagne et des grands espaces.`,
    imageUrl: "/images/Semnoz.jpg",
    distance: "17,4km",
    elevationGain: "1212m d+",
    slug: slugify("Annecy - Semnoz"),
    price: "55€",
    startAddress: "Bords du Lac d'Annecy",
    finishAddress: "Sommet du Semnoz",
    aidStations: "Km 6, Km 12",
    howToGetToStartLink: "#", // Lien placeholder
    partnerAccommodationsLink: "#", // Lien placeholder
  },
  {
    name: "Briançon - Col du Lautaret",
    date: "25 Juillet 2027",
    location: "Briançon, Hautes-Alpes",
    description: "Une ascension légendaire dans les Alpes, au cœur des paysages grandioses du Lautaret.",
    fullDescription: `Le Col du Lautaret est un passage historique et majestueux des Hautes-Alpes, reliant la vallée de la Romanche à celle de la Guisane. C'est un col de haute montagne, souvent balayé par le vent, offrant des paysages alpins grandioses et une flore exceptionnelle. Mythique pour son rôle de porte d'entrée vers le Col du Galibier et son histoire dans le Tour de France, le Lautaret est une ascension longue et régulière, idéale pour tester son endurance en altitude. La beauté sauvage et l'immensité des paysages en font une course mémorable.`,
    imageUrl: "/images/Lautaret.jpg",
    distance: "20km", // Exemple de distance
    elevationGain: "800m d+", // Exemple de dénivelé
    slug: slugify("Briançon - Col du Lautaret"),
    price: "60€",
    startAddress: "Centre ville de Briançon",
    finishAddress: "Col du Lautaret",
    aidStations: "Km 7, Km 14",
    howToGetToStartLink: "#", // Lien placeholder
    partnerAccommodationsLink: "#", // Lien placeholder
  },
  {
    name: "L'Alpe d'Huez",
    date: "15 Août 2027",
    location: "L'Alpe d'Huez, Isère",
    description: "Le défi mythique des 21 virages, une course emblématique pour les grimpeurs.",
    fullDescription: `L'Alpe d'Huez est sans doute l'ascension la plus célèbre du cyclisme mondial, avec ses 21 virages numérotés qui mènent à la station. Chaque virage est une histoire, un défi, et une opportunité de se mesurer aux légendes. La course est une véritable épreuve de force et de mental, avec des pentes raides et une ambiance électrique. C'est un col mythique non seulement pour son histoire sportive, mais aussi pour la sensation unique de gravir une icône, sous les encouragements des spectateurs. Une expérience à vivre absolument pour tout coureur.`,
    imageUrl: "/images/Alped'huez.jpg", // Chemin corrigé
    distance: "13.8km", // Exemple de distance
    elevationGain: "1071m d+", // Exemple de dénivelé
    slug: slugify("L'Alpe d'Huez"),
    price: "70€",
    startAddress: "Bourg d'Oisans",
    finishAddress: "L'Alpe d'Huez",
    aidStations: "Km 5, Km 10",
    howToGetToStartLink: "#", // Lien placeholder
    partnerAccommodationsLink: "#", // Lien placeholder
  },
  {
    name: "Clermont - Puy de Dôme",
    date: "10 Septembre 2027",
    location: "Clermont-Ferrand, Auvergne",
    description: "Une course emblématique au cœur de l'Auvergne, avec l'ascension du majestueux Puy de Dôme.",
    fullDescription: `Le Puy de Dôme, volcan emblématique de la chaîne des Puys, est un site naturel exceptionnel et un défi sportif de taille. Son ascension, autrefois empruntée par le Tour de France, est désormais réservée aux piétons et au train à crémaillère, rendant cette course encore plus exclusive. Le parcours offre des vues panoramiques sur le parc naturel des Volcans d'Auvergne. C'est un col mythique pour son histoire géologique, son importance culturelle et le défi unique qu'il représente, avec des pentes abruptes et un sommet souvent balayé par le vent.`,
    imageUrl: "/images/Galibier.jpg", // Utilisation de Galibier.jpg comme placeholder car pas de Puy de Dôme.jpg
    distance: "13.5km", // Exemple de distance
    elevationGain: "1000m d+", // Exemple de dénivelé
    slug: slugify("Clermont - Puy de Dôme"),
    price: "50€",
    startAddress: "Parking des Goules, Orcines",
    finishAddress: "Sommet du Puy de Dôme",
    aidStations: "Km 4, Km 8",
    howToGetToStartLink: "#", // Lien placeholder
    partnerAccommodationsLink: "#", // Lien placeholder
  },
];