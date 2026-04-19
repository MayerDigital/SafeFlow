function standardOptions() {
  return [
    { label: "150 x 150 mm", price: 10.0 },
    { label: "200 x 200 mm", price: 12.5 }
  ];
}

function signOptions() {
  return [
    { label: "150 x 150 mm", price: 10.0 },
    { label: "200 x 200 mm", price: 12.5 },
    { label: "150 x 150 mm Fahnenschild", price: 15.0 },
    { label: "200 x 200 mm Fahnenschild", price: 20.0 },
    { label: "150 x 150 mm Nasenschild", price: 15.0 },
    { label: "200 x 200 mm Nasenschild", price: 20.0 }
  ];
}

export const products = [
  {
    id: "anleitern",
    title: "Anleitern",
    description: "Brandschutzzeichen Anleitern",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/anleitern.png",
    options: standardOptions()
  },
  {
    id: "fahrbarerfeuerloescher",
    title: "Fahrbarer Feuerlöscher",
    description: "Brandschutzzeichen Fahrbarer Feuerlöscher",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/fahrbarerfeuerloescher.png",
    options: standardOptions()
  },
  {
    id: "feuerloescher",
    title: "Feuerlöscher",
    description: "Brandschutzzeichen Feuerlöscher",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/feuerloescher.png",
    options: signOptions()
  },
  {
    id: "feuermelder",
    title: "Feuermelder",
    description: "Brandschutzzeichen Feuermelder",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/feuermelder.png",
    options: signOptions()
  },
  {
    id: "hausmelder",
    title: "Hausmelder",
    description: "Brandschutzzeichen Hausmelder",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/hausmelder.png",
    options: standardOptions()
  },
  {
    id: "loeschdecke",
    title: "Löschdecke",
    description: "Brandschutzzeichen Löschdecke",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/loeschdecke.png",
    options: standardOptions()
  },
  {
    id: "loeschmittel",
    title: "Löschmittel",
    description: "Brandschutzzeichen Löschmittel",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/loeschmittel.png",
    options: standardOptions()
  },
  {
    id: "loeschschlauch",
    title: "Löschschlauch",
    description: "Brandschutzzeichen Löschschlauch",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/loeschschlauch.png",
    options: signOptions()
  },
  {
    id: "nottelefon",
    title: "Nottelefon",
    description: "Brandschutzzeichen Nottelefon",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/nottelefon.png",
    options: standardOptions()
  },
  {
    id: "roterpfeillinks",
    title: "Roter Pfeil links",
    description: "Brandschutzzeichen Roter Pfeil links",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/roterpfeillinks.png",
    options: standardOptions()
  },
  {
    id: "roterpfeiloben",
    title: "Roter Pfeil oben",
    description: "Brandschutzzeichen Roter Pfeil oben",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/roterpfeiloben.png",
    options: standardOptions()
  },
  {
    id: "roterpfeilrechts",
    title: "Roter Pfeil rechts",
    description: "Brandschutzzeichen Roter Pfeil rechts",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/roterpfeilrechts.png",
    options: standardOptions()
  },
  {
    id: "roterpfeilunten",
    title: "Roter Pfeil unten",
    description: "Brandschutzzeichen Roter Pfeil unten",
    category: "Brandschutz",
    image: "assets/icons/brandschutz/roterpfeilunten.png",
    options: standardOptions()
  },

  {
    id: "arzt",
    title: "Arzt",
    description: "Rettungszeichen Arzt",
    category: "Rettung",
    image: "assets/icons/rettung/arzt.png",
    options: standardOptions()
  },
  {
    id: "augenspuelung",
    title: "Augenspülung",
    description: "Rettungszeichen Augenspülung",
    category: "Rettung",
    image: "assets/icons/rettung/augenspuelung.png",
    options: standardOptions()
  },
  {
    id: "defibrillator",
    title: "Defibrillator",
    description: "Rettungszeichen Defibrillator",
    category: "Rettung",
    image: "assets/icons/rettung/defibrillator.png",
    options: signOptions()
  },
  {
    id: "erstehilfe",
    title: "Erste Hilfe",
    description: "Rettungszeichen Erste Hilfe",
    category: "Rettung",
    image: "assets/icons/rettung/erstehilfe.png",
    options: signOptions()
  },
  {
    id: "evakuierungsstuhl",
    title: "Evakuierungsstuhl",
    description: "Rettungszeichen Evakuierungsstuhl",
    category: "Rettung",
    image: "assets/icons/rettung/evakuierungsstuhl.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeillinksoben",
    title: "Grüner Pfeil links oben",
    description: "Rettungszeichen Grüner Pfeil links oben",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeillinksoben.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeillinksunten",
    title: "Grüner Pfeil links unten",
    description: "Rettungszeichen Grüner Pfeil links unten",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeillinksunten.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeiloben",
    title: "Grüner Pfeil oben",
    description: "Rettungszeichen Grüner Pfeil oben",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeiloben.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeilrechts",
    title: "Grüner Pfeil rechts",
    description: "Rettungszeichen Grüner Pfeil rechts",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeilrechts.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeilrechtsoben",
    title: "Grüner Pfeil rechts oben",
    description: "Rettungszeichen Grüner Pfeil rechts oben",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeilrechtsoben.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeilrechtsunten",
    title: "Grüner Pfeil rechts unten",
    description: "Rettungszeichen Grüner Pfeil rechts unten",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeilrechtsunten.png",
    options: standardOptions()
  },
  {
    id: "gruenerpfeilunten",
    title: "Grüner Pfeil unten",
    description: "Rettungszeichen Grüner Pfeil unten",
    category: "Rettung",
    image: "assets/icons/rettung/gruenerpfeilunten.png",
    options: standardOptions()
  },
  {
    id: "notausganglinks",
    title: "Notausgang links",
    description: "Rettungszeichen Notausgang links",
    category: "Rettung",
    image: "assets/icons/rettung/notausganglinks.png",
    options: standardOptions()
  },
  {
    id: "notausgangrechts",
    title: "Notausgang rechts",
    description: "Rettungszeichen Notausgang rechts",
    category: "Rettung",
    image: "assets/icons/rettung/notausgangrechts.png",
    options: standardOptions()
  },
  {
    id: "notausstieg",
    title: "Notausstieg",
    description: "Rettungszeichen Notausstieg",
    category: "Rettung",
    image: "assets/icons/rettung/notausstieg.png",
    options: standardOptions()
  },
  {
    id: "notausstiegleiter",
    title: "Notausstieg Leiter",
    description: "Rettungszeichen Notausstieg Leiter",
    category: "Rettung",
    image: "assets/icons/rettung/notausstiegleiter.png",
    options: standardOptions()
  },
  {
    id: "notdusche",
    title: "Notdusche",
    description: "Rettungszeichen Notdusche",
    category: "Rettung",
    image: "assets/icons/rettung/notdusche.png",
    options: standardOptions()
  },
  {
    id: "notliege",
    title: "Notliege",
    description: "Rettungszeichen Notliege",
    category: "Rettung",
    image: "assets/icons/rettung/notliege.png",
    options: standardOptions()
  },
  {
    id: "rettungstelefon",
    title: "Rettungstelefon",
    description: "Rettungszeichen Rettungstelefon",
    category: "Rettung",
    image: "assets/icons/rettung/rettungstelefon.png",
    options: standardOptions()
  },
  {
    id: "rollstuhllinks",
    title: "Rollstuhl links",
    description: "Rettungszeichen Rollstuhl links",
    category: "Rettung",
    image: "assets/icons/rettung/rollstuhllinks.png",
    options: [
      { label: "300 x 150 mm", price: 12.50 }
    ]
  },
  {
    id: "rollstuhlrechts",
    title: "Rollstuhl rechts",
    description: "Rettungszeichen Rollstuhl rechts",
    category: "Rettung",
    image: "assets/icons/rettung/rollstuhlrechts.png",
    options: [
      { label: "300 x 150 mm", price: 12.50 }
    ]
  },
  {
    id: "sammelplatz",
    title: "Sammelplatz",
    description: "Rettungszeichen Sammelplatz",
    category: "Rettung",
    image: "assets/icons/rettung/sammelplatz.png",
    options: [
      { label: "400 x 400 mm", price: 30.0 }
    ]
  }
];
