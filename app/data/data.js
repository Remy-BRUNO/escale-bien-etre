export const homeData = {
  presentation: {
    picture: {
      url: "https://www.freepik.com/free-photo/spa-setting-with-lit-candle-fluffy-towels-fragrant-flowers-promotes-relaxation_134885162.htm#fromView=search&page=4&position=1&uuid=116ea015-5270-4abc-96b2-7b8997f46257",
      src: "/homePicture.webp",
    },
    title: "Pause douceur et sérénité...",
    subTitle: "En Savoie",
    description:
      "Une bulle de bien-être, un bonheur intense, un moment à soi de relaxation profonde et de lâcher-prise venez découvrir les bienfaits du massages entre mes mains douces et bienveillantes",
  },
  benefits: {
    title: "Les Prestations",

    outro:
      "A l'écoute, si vous le souhaitez nous choisirons ensemble et je saurai m'adapter à vos besoins et vous apporter un massage personnalisé!",
  },
}

export const giftCarddata = {
  title: "Carte cadeau",
  intro: "Offrir un massage… Le cadeau parfait pour toutes les occasions!",
  picture: {
    url: "https://www.freepik.com/free-photo/beautiful-gift-voucher-with-decoration_21843747.htm#fromView=search&page=1&position=29&uuid=d9e2d338-abdf-48de-808c-4fd9b6a7087c",
    src: "/giftCard.webp",
  },
  description: `Un plaisir bien-être à offrir. Au choix, Californien, pierres chaudes, ayurvédique, réflexologie... 
    Une carte cadeau massage, pour lui, pour elle, c'est une réussite assurée, un moment de plaisir garanti.
    Alors, en un clic, vous pouvez faire plaisir! C'est simple, faites votre choix, payez en ligne et imprimez votre bon chez vous ou munissez-vous de votre code unique lors de notre rendez-vous.`,
}

export const benefitsData = {
  presentation: {
    title: "Les Prestations",
    subtitle: "Déroulement d'une séance",
    intro: `Une séance de massage pratiquée par mes soins, par passion et bienveillance débute par un accueil chaleureux. 
    Avant le début de la séance, un moment d'échange ensemble sera réalisé pour comprendre vos préférences, vos besoins spécifiques et les zones à cibler pendant le massage.
    Vous serez invité à vous allonger sur ma table confortable de massage, généralement dévêtu pour certains soins et recouvert d'une serviette douce, assurant un confort et un respect de l'intimité maximale.
    Vous plongerez dans une bulle de bien-être, laissez-vous guider et porter par mes gestes amples, souples, enveloppants, stimulants et doux...
    
    Une ambiance et un massage cocooning rien que pour vous!
    Au plaisir de vous voir à mes côtés et de vous apporter le meilleur accompagnement bien-être!`,
  },
  ambiances: {
    title: "Les ambiances",
    intro: "",
    ambianceData: [
      {
        id: 1,
        title: "Massage du monde",
        intro: "Californien - Ayurvédique - Polynésien (Lomi Lomi).",
        picture: {
          url: "https://www.freepik.com/free-photo/beauty-spa_10788414.htm",
          src: "/massage-du-monde.webp",
        },
        description:
          "Les bienfaits du massage sont connus depuis des millénaires. Au 4 coins du monde se développent des techniques qui apportent le repos et le bien-être. Découvrez les principaux massages du monde. Un voyage sensoriel dont vous reviendrez détendu!",
      },
      {
        id: 2,
        title: "Massage Eveil & Sens",
        intro:
          "Aux pierres chaudes - Aux tampons herbeux - Aux bols Kansu - A la bougie - A l'huile chaude.",
        picture: {
          url: "https://www.freepik.com/free-photo/beautiful-arrangement-with-spa-stones-candles_5530864.htm",
          src: "/massage-eveil.webp",
        },
        description: `Le corps et l'esprit perçoit la chaleur, la pression, la couleur, le son et l'odeur.
          Vivre vos 5 sens à travers un massage vous éveille, vous apporte un instant magique et mémorable!`,
      },
      {
        id: 3,
        title: "Massage découverte",
        intro: "Instant pour soi - Modelage  liftant visage & buste.",
        picture: {
          url: "https://www.freepik.com/free-photo/young-woman-relax-luxury-spa_5953915.htm",
          src: "/massage-decouverte.webp",
        },
        description:
          "Un instant pour soi, une ambiance, une musique, vous avez besoin d'être relaxé et cocooné, ce massage personnalisé est fait pour vous!",
      },
      {
        id: 4,
        title: "Massage Énergétique",
        intro:
          "Réflexologie plantaire - Réflexologie palmaire - Tui Na minceur - Shiatsu - Amma Assi.",
        picture: {
          url: "https://www.freepik.com/free-photo/young-woman-relaxing-spa-salon_8224720.htm",
          src: "/massage-energetique.webp",
        },
        description:
          "L'énergie circule dans tout notre corps par le biais des méridiens. Le massage énergétique permet de stimuler les méridiens afin d'améliorer la circulation du fluide énergétique. Vous cherchez à harmoniser votre corps et votre esprit, une relaxation profonde, c'est ce massage qu'il vous convient! ",
      },
    ],
  },
  massages: [
    // massage du monde
    {
      environment: "massage du monde",
      massageId: 1,
      title: "Massage californien",
      intro: "Moment de détente intense relaxant et apaisant.",
      picture: {
        url: "https://www.freepik.com/free-photo/beauty-spa_10788395.htm#fromView=search&page=1&position=42&uuid=116ea015-5270-4abc-96b2-7b8997f46257",
        src: "/californien.webp",
      },

      description:
        "Ce massage offre une relaxation intense et profonde à travers des mouvements doux et enveloppant avec de légères pressions sur les muscles pour apaiser les tensions musculaires du quotidien.",
      prices: { firstPrice: "1h - 70€", secondPrice: "1h30 - 90€" },
    },
    {
      environment: "massage du monde",
      massageId: 1,
      title: "Massage Ayurvédique",
      intro: "Moment de relaxation, de ressourcement et de lâcher-prise.",
      picture: {
        url: "https://www.freepik.com/free-photo/honey-pouring-woman-s-naked-back-spa-salon_8224567.htm#fromView=search&page=1&position=18&uuid=51ad8ac2-3b92-4f04-a62a-b3fde5875a85",
        src: "/ayurvédique.webp",
      },

      description:
        "Ce massage de relaxation et de lâcher-prise offre un relâchement des tensions musculaires et nerveuses, améliore la libre circulation de l'énergie, draine et élimine les toxines accumulées dans notre corps.",
      prices: { firstPrice: "1h - 70€", secondPrice: "1h30 - 90€" },
    },
    {
      environment: "massage du monde",
      massageId: 1,
      title: "Massage Polynésien (Lomi Lomi)",
      intro: "Moment de sensation de bien-être, de relaxation immédiate.",
      picture: {
        url: "https://fr.freepik.com/photos-gratuite/femme-relaxante-cure-thermale_18411318.htm#fromView=search&page=1&position=1&uuid=b44fcdc8-f6a8-4b32-8356-b47726d8e2dd",
        src: "/polynesien.webp",
      },

      description:
        "Ce massage par des mouvements amples et soyeux offre une sensation de bien-être immédiat, de vague et de relaxation profonde. Il stimule la circulation sanguine et lymphatique permettant une bonne élimination des toxines et une belle harmonie du corps.",
      prices: { firstPrice: "1h - 70€", secondPrice: "1h30 - 90€" },
    },
    // massage eveil & sens
    {
      environment: "massage eveil & sens",
      massageId: 2,
      title: "Massage aux pierres chaudes",
      intro: "Moment chaleureux, d'évasion et de délassement.",
      picture: {
        url: "https://www.freepik.com/free-photo/woman-getting-massage-back-by-hot-stones_16181271.htm#fromView=search&page=2&position=6&uuid=34bd09ab-f3d5-47a5-9826-d5d2b17f74ee",
        src: "/pierres.webp",
      },

      description:
        "Ce massage offre de nombreux bienfaits. Une détente globale et musculaire du corps due à la chaleur des pierres. Soulage les douleurs, réduit le stress les tensions nerveuses, améliore la circulation sanguine, élimine les toxines apporte de bonnes energie.",
      prices: { firstPrice: "1h - 85€", secondPrice: "1h30 - 105€" },
    },
    {
      environment: "massage eveil & sens",
      massageId: 2,
      title: "Modelage aux tampons herbeux",
      intro: "Moment de détente, d'éveil des sens, de senteurs.",
      picture: {
        url: "https://www.freepik.com/free-photo/young-woman-having-back-shoulder-massage_10741092.htm#fromView=search&page=8&position=50&uuid=8f8f9445-53e7-46a4-a9e1-7373c9680d69",
        src: "/herbeux.webp",
      },

      description:
        "Ce modelage offre une sensation de douceur, de détente intense et profonde par ces huiles et ces diverses plantes aromatiques et médicinales chaudes. Apaise et lève les blocages musculaires, assouplit la peau, réduit le stress, améliore le sommeil et apporte une bonne circulation du sang. Le parfum des herbes aromatiques procure une relaxation totale du corps et de l'esprit et transmet un équilibre complet.",
      prices: { firstPrice: "1h - 70€", secondPrice: "1h30 - 90€" },
    },
    {
      environment: "massage eveil & sens",
      massageId: 2,
      title: "Massage aux Bols Kansu",
      intro: "Moment de calme, de sérénité.",
      picture: {
        url: "https://www.freepik.com/free-photo/people-enjoying-yoga-retreat_26313340.htm#fromView=search&page=1&position=6&uuid=2a80fb57-6a28-49ba-abeb-ac2af1c7e814",
        src: "/kansu.webp",
      },

      description: `Cette pratique de massage à l'aide de Bols Kansu fabriqué de matières généreuses cuivre, bronze, zinc, or et argent apporte un calme et une sérénité profonde. Il diminue angoisse, agitation et nervosité ainsi que le manque d'énergie. Il rétablit l'équilibre et l'harmonie dans le corps et l'esprit. Il contribue également à un sommeil de meilleur qualité. Il peut être associé à un massage ayurvédique.`,
      prices: {
        firstPrice: `<u>pied/main</u> 30min - 40€`,
        secondPrice: `<u>option Ayurvédique</u> 1h - 85€`,
      },
    },
    {
      environment: "massage eveil & sens",
      massageId: 2,
      title: "Massage à la bougie",
      intro: "Moment doux  et fondant une  relaxation inoubliable.",
      picture: {
        url: "https://www.freepik.com/free-photo/high-angle-man-holding-candle_38173013.htm#fromView=search&page=4&position=31&uuid=7060f957-6d67-43a2-821d-e1a8240320c1",
        src: "/bougies.webp",
      },

      description:
        "Cette pratique de massage inoubliable et chaleureuse offre une relaxation douce, fondante et enveloppante et une détente musculaire de votre corps.",
      prices: { firstPrice: "1h - 70€", secondPrice: "1h30 - 90€" },
    },
    {
      environment: "massage eveil & sens",
      massageId: 2,
      title: "Massage à l'huile chaude",
      intro: "Moment harmonieux,  magique et de douceur.",
      picture: {
        url: "bhttps://www.freepik.com/free-photo/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort_9028019.htm#fromView=search&page=1&position=11&uuid=bda36e58-d138-4d56-8dbd-03117a71e8a4",
        src: "/huiles.webp",
      },

      description:
        "Ce modelage offre une sensation de chaleur et de douceur sur votre peau. Il relâche les tensions musculaires, régénère, apporte une bonne souplesse de votre peau, détend votre esprit et apporte une légèreté à votre corps.",
      prices: { firstPrice: "1h - 70€", secondPrice: "1h30 - 90€" },
    },
    // massage decouverte
    {
      environment: "massage découverte",
      massageId: 3,
      title: "Massage instant pour soi",
      intro:
        "Moment de détente sur la zone précieuse du corps de votre choix (dos, cou, épaule, jambe, pied, bras...).",
      picture: {
        url: "https://www.freepik.com/free-photo/medical-massage-leg-physiotherapy-center_1492593.htm#fromView=search&page=1&position=52&uuid=9a255c76-b9af-4524-882e-6b0909b30d3e",
        src: "/instant.webp",
      },

      description: `Ces instants massages offrent une détente personnalisée et une relaxation intense sur les parties du corps souhaitées par des mouvements de votre choix (doux, enveloppant stimulant, drainant...). 
        “A l'écoute de vos besoins“`,
      prices: { firstPrice: "30 min - 40€", secondPrice: "1h - 60€" },
    },
    {
      environment: "massage découverte",
      massageId: 3,
      title: "Modelage liftant visage & buste",
      intro: "Une parenthèse de douceur, les yeux fermés...",
      picture: {
        url: "https://www.freepik.com/free-photo/close-up-hand-massaging-cheeks_12892500.htm#fromView=search&page=4&position=9&uuid=5f441877-1fc4-463f-b9f6-2d2627f97838",
        src: "/visage.webp",
      },

      description: `Une relaxation du visage mais pas seulement, il permet une bonne circulation sanguine avec un objectif liftant rafraîchissant et hydratant. 
        A l'aide de globe, de roller (jade, quartz rose, d'améthyste), pierres chaudes/froides, d'une huile ou une crème de votre choix, vous sortirez avec le teint plus rayonnant.`,
      prices: { firstPrice: "30 min - 40€", secondPrice: "1h - 60€" },
    },
    // massage énergétique
    {
      environment: "massage énergétique",
      massageId: 4,
      title: "Réflexologie Plantaire",
      intro: "Moment de détente et d'apaisement du corp par le pied.",
      picture: {
        url: "https://www.freepik.com/free-photo/foot-massage-woman-spa_5953928.htm#fromView=search&page=2&position=34&uuid=be0647cf-5d7d-4d1f-a424-5c2446ec8a00",
        src: "/plantaire.webp",
      },

      description:
        "La réflexologie plantaire est une méthode thérapeutique par le biais d'un massage et pressions qui utilise le processus d'auto guérison naturel du corps. Chaque zone du pied correspond à un organe ou à une partie du corps. Cette pratique soulage le corps par le pied.",
      prices: {
        firstPrice: "50 min - 55€",
        secondPrice: "Forfait 3 séances 125€",
      },
    },
    {
      environment: "massage énergétique",
      massageId: 4,
      title: "Réflexologie Palmaire",
      intro: "Moment de douceur et de sérénité par la main.",
      picture: {
        url: "https://www.freepik.com/free-photo/holding-hands-clapping-like-friends-close-up-shot-female-kid-s-hands-doing-different-things-together-family-home-education-childhood-charity-concept-mother-son-daughter-wealth_14584527.htm#fromView=search&page=1&position=40&uuid=90bd21b0-529e-4e35-b9fa-86ebe96b9a54",
        src: "/palmaire.webp",
      },

      description:
        "La réflexologie palmaire est une pratique thérapeutique qui active les points réflexes situé sur les mains. Un massage doux et stimulant qui aidera à soulager et harmoniser les principales fonctions physiologiques du corps et réduire le stress. Apaiser les tensions de corps par la main!",
      prices: {
        firstPrice: "50 min - 55€",
        secondPrice: "Forfait 3 séances 125€",
      },
    },
    {
      environment: "massage énergétique",
      massageId: 4,
      title: "Massage Tui Na minceur",
      intro: "Moment de légèreté, de relaxation et de confiance en soi.",
      picture: {
        url: "https://www.freepik.com/free-photo/close-up-hand-holding-cup_12066690.htm#fromView=search&page=1&position=8&uuid=f6fc2b43-3c6a-4505-a7b1-606b51835e13",
        src: "/minceur.webp",
      },

      description:
        "Issu de la médecine traditionnelle chinoise, ce massage minceur est pratiqué à l'aide de ventouse, d'un petit rouleau et par divers mouvements bien précis sur de nombreux points d'acupressions. Cette méthode naturelle agit sur les tissus sous cutanés et les amas graisseux. Il aidera à retrouver un corps léger.",
      prices: { firstPrice: "1h - 70€", secondPrice: "Forfait 3 séances 180€" },
    },
    {
      environment: "massage énergétique",
      massageId: 4,
      title: "Le shiatsu",
      intro: "Moment de relâchement, de vitalité et de détente.",
      picture: {
        url: "https://www.freepik.com/free-photo/young-woman-relaxing-spa-salon_8224724.htm#fromView=search&page=1&position=34&uuid=51ad8ac2-3b92-4f04-a62a-b3fde5875a85",
        src: "/shiatsu.webp",
      },

      description:
        "Cette pratique de massothérapie d'origine japonaise, utilisant des pressions des étirements des légères mobilisations, permet de libérer les tensions, les raideurs musculaires, réduire l'inconfort. Retrouver une énergie, de la tonicité et de la vitalité dans l'ensemble du corps.",
      prices: { firstPrice: "1h - 60€", secondPrice: "Forfait 3 séances 150€" },
    },
    {
      environment: "massage énergétique",
      massageId: 4,
      title: "Massage Amma Assi",
      intro:
        "Moment de décontraction et de libérations du stress du quotidien.",
      picture: {
        url: "https://www.freepik.com/free-photo/side-view-hands-massaging-woman-s-back_26412513.htm#fromView=search&page=1&position=0&uuid=ea2a7aae-09a3-4abf-a97c-0531a776c65c",
        src: "/amma.webp",
      },

      description:
        "Ce massage dynamisant et énergisant s'effectue à l'aide d'étirements de pressions de balayage, il calme et soulage les tensions musculaires et procure un bien-être et une profonde détente dans votre travail et vie de tous les jours.",
      prices: { firstPrice: "30 min - 40€", secondPrice: "" },
    },
  ],
}

export const pricesData = [
  {
    title: "Massage du monde",
    massages: [
      {
        massageId: 1,
        name: "Californien Ayurvédique Polynésien (Lomi Lomi)",
        price: ["1h - 70€", "1h30 - 90€"],
      },
    ],
  },
  {
    title: "Massage Eveil & Sens",
    massages: [
      {
        massageId: 2,
        name: "Aux pierres chaudes",
        price: ["1h - 85€", "1h30 - 105€"],
      },
      {
        massageId: 2,
        name: "Aux tampons herbeux",
        price: ["1h - 70€", "1h30 - 90€"],
      },
      {
        massageId: 2,
        name: "Aux Bols Kansu",
        price: [
          `pied/main 
        30min - 40€`,
          `option Ayurvédique 
          1h - 85€`,
        ],
      },
      { massageId: 2, name: "à la bougie", price: ["1h - 70€", "1h30 - 90€"] },
      {
        massageId: 2,
        name: "à l'huile chaude",
        price: ["1h - 70€", "1h30 - 90€"],
      },
    ],
  },
  {
    title: "Massage découverte",
    massages: [
      {
        massageId: 3,
        name: "Instant pour soi Modelage liftant visage & buste",
        price: ["30 min - 40€", "1h - 60€"],
      },
    ],
  },
  {
    title: "Massage Énergétique",
    massages: [
      {
        massageId: 4,
        name: "Réflexologie Plantaire Réflexologie Palmaire",
        price: ["50 min - 55€", "Forfait 3 séances 125€"],
      },
      {
        massageId: 4,
        name: "Tui Na minceur",
        price: ["1h - 70€", "Forfait 3 séances 180€"],
      },
      {
        massageId: 4,
        name: "Shiatsu",
        price: ["1h - 60€", "Forfait 3 séances 150€"],
      },
      { massageId: 4, name: "Amma Assi", price: ["30 min - 40€"] },
    ],
  },
]

export const aboutData = {
  title: `À propos de 
  Escale Bien-être Massage`,
  picture: "/portrait.webp",
  description: `Sarah Laurent, praticienne certifiée en massage bien-être, vous accueille chaleureusement sur son site. Avec plus de 20 ans d'expérience dans le domaine de la santé, elle propose des massages relaxants, apaisants et dynamisants à son domicile à Bassens et en institut à Chambéry, en Savoie.
    Découvrez son espace cocooning et profitez de son savoir-faire et de son écoute bienveillante pour une véritable escale bien-être.`,
  info: `Séances sur rendez-vous
  du Lundi au Samedi de 9h à 18h.

À mon domicile : 53 rue Simone Veil 73000 Bassens.
Ou en institut au : 4 Rue des Trois Dauphins, 73000 Chambéry

Pour prendre RDV, par téléphone :

06.28.77.04.21

Vous pouvez également me contacter par mail.`,
}
