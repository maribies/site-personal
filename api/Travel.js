const states = {
  WashingtonDC: {
    name: "Washington DC",
    lat: 38.9072,
    lng: -77.0369
  },
  Pennsylvania: {
    name: "Pennsylvania",
    lat: 40.75,
    lng: -77.75
  },
  NewYork: {
    name: "New York",
    lat: 40.7128,
    lng: -74.0060
  },
  NewJersey: {
    name: "New Jersey",
    lat: 40.7128,
    lng: -74.0060
  },
  Connecticut: {
    name: "Connecticut",
    lat: 41.6000,
    lng: -72.6997
  },
  Massachusetts: {
    name: "Massachusetts",
    lat: 42.2373,
    lng: -71.5314
  },
  Virginia: {
    name: "Virginia",
    lat: 37.5407,
    lng: -77.4360
  },
  WestVirginia: {
    name: "West Virginia",
    lat: 38.4912,
    lng: -80.9545
  },
  Maryland: {
    name: "Maryland",
    lat: 39.0458,
    lng: -76.6413
  },
  Delaware: {
    name: "Delaware",
    lat: 39.3185,
    lng: -75.5071
  },
  NorthCarolina: {
    name: "North Carolina",
    lat: 35.7596,
    lng: -79.0193
  },
  SouthCarolina: {
    name: "South Carolina",
    lat: 34.0007,
    lng: -81.0348
  },
  Tennessee: {
    name: "Tennessee",
    lat: 35.7596,
    lng: -79.0193
  },
  Georgia: {
    name: "Georgia",
    lat: 33.76,
    lng: -84.39
  },
  Florida: {
    name: "Florida",
    lat: 27.9944,
    lng: -81.7603
  },
  Arkansas: {
    name: "Arkansas",
    lat: 34.7465,
    lng: -92.2896
  },
  Kansas: {
    name: "Kansas",
    lat: 38.5266,
    lng: -96.7265
  },
  Texas: {
    name: "Texas",
    lat: 31.9686,
    lng: -99.9018
  },
  California: {
    name: "California",
    lat: 36.7783,
    lng: -119.4179
  },
  Arizona: {
    name: "Arizona",
    lat: 33.4484,
    lng: -112.0740
  },
  Minnesota: {
    name: "Minnesota",
    lat: 44.9778,
    lng: -93.2650
  },
  NewMexico: {
    name: "New Mexico",
    lat: 34.5199,
    lng: -105.8700
  },
  Washington: {
    name: "Washington",
    lat: 47.7511,
    lng: -120.7401
  },
  Nevada: {
    name: "Nevada",
    lat: 38.8029,
    lng: -116.4194
  },
  RhodeIsland: {
    name: "Rhode Island",
    lat: 41.5801,
    lng: -71.5002
  },
  Louisiana: {
    name: "Louisiana",
    lat: 30.9843,
    lng: -91.9623
  },
  Wisconsin: {
    name: "Wisconsin",
    lat: 44.2563,
    lng: -89.6385
  },
  Illinois: {
    name: "Illinois",
    lat: 40.6331,
    lng: -89.3985
  },
  Vermont: {
    name: "Vermont",
    lat: 44.5588,
    lng: -73.7101
  },
  Colorado: {
    name: "Colorado",
    lat: 39.5501,
    lng: -105.7821
  },
}

// TODO: add images to each
const countries = {
  Australia: {
    Cairns: {
      name: 'Cairns',
      lat: -16.9,
      lng: 145.7,
    },
    Sydney: {
      name: 'Sydney',
      lat: -33.9,
      lng: 151.2,
    },
    Tasmania: {
      name: 'Tasmania',
      lat: -42.9,
      lng: 147.3,
    },
  },
  Austria: {
    Vienna: {
      name: 'Vienna',
      lat: 48.2,
      lng: 16.37,
    },
  },
  Belgium: {
    Brussels: {
      name: 'Brussels',
      lat: 50.85,
      lng: 4.35,
    }
  },
  Cambodia: {
    SiemReap: {
      name: 'Siem Reap',
      lat: 13.4,
      lng: 103.85,
    },
  },
  Canada: {
    NiagraFalls: {
      name: 'Niagra Falls',
      lat: 49.1,
      lng: -123.1,
    },
    Montreal: {
      name: 'Montreal',
      lat: 45.5,
      lng: -73.58333,
    },
  },
  CzechRepublic: {
    Prague: {
      name: 'Prague',
      lat: 50.08333,
      lng: 14.46667,
    }
  },
  Egypt: {
    Cairo: {
      name: 'Cairo',
      lat: 30.05,
      lng: 31.25,
    },
    Luxor: {
      name: 'Luxor',
      lat: 25.7,
      lng: 32.65,
    },
  },
  England: {
    London: {
      name: 'London',
      lat: 51.5,
      lng: -0.08333,
    },
  },
  France: {
    Antibes: {
      name: 'Antibes',
      lat: 43.55,
      lng: 7.11667,
    },
    AixEnProvence: {
      name: 'Aix-en-Provence',
      lat: 43.53,
      lng: 5.45,
    },
    Bordeaux: {
      name: 'Bordeaux',
      lat: 44.85,
      lng: -0.55,
    },
    BeynacEtCazencac: {
      name: 'Beynac-et-Cazencac',
      lat: 44.84,
      lng: 1.14,
    },
    Cannes: {
      name: 'Cannes',
      lat: 43.55,
      lng: 7.01667,
    },
    CastelnaudLaChapelle: {
      name: 'Castelnaud-la-Chapelle',
      lat: 44.81,
      lng: 1.148,
    },
    Domme: {
      name: 'Domme',
      lat: 44.80,
      lng: 1.21,
    },
    Eze: {
      name: 'Eze',
      lat: 44.8,
      lng: 1.33,
    },
    Grasse: {
      name: 'Grasse',
      lat: 43.65,
      lng: 6.92,
    },
    LaRoqueGageac: {
      name: 'La Roque-Gageac',
      lat: 44.83,
      lng: 1.19,
    },
    Nice: {
      name: 'Nice',
      lat: 43.7,
      lng: 7.26667,
    },
    Paris: {
      name: 'Paris',
      lat: 48.856614,
      lng: 2.3522219,
    },
    SaintEmilion: {
      name: 'Saint-Émilion',
      lat: 44.89,
      lng: -0.156,
    },
    SarlatLaCaneda: {
      name: 'Sarlat-la-Canéda',
      lat: 44.88,
      lng: 1.21,
    },
    SaintJeanCapFerrat: {
      name: 'Saint-Jean-Cap-Ferrat',
      lat: 43.695,
      lng: 7.328,
    },
    SaintTropez: {
      name: 'Saint-Tropez',
      lat: 43.274,
      lng: 6.638,
    },
    Vezac: {
      name: 'Vézac',
      lat: 44.83,
      lng: 1.18,
    }
  },
  Greece: {
    Athens: {
      name: 'Athens',
      lat: 37.98333,
      lng: 23.71667,
    },
    Naxos: {
      name: 'Naxos',
      lat: 37.1,
      lng: 25.4,
    },
  },
  Germany: {
    Dachau: {
      name: 'Dachau',
      lat: 48.26667,
      lng: 11.43333,
    },
    Munich: {
      name: 'Munich',
      lat: 48.1351,
      lng: 11.5820,
    },
    Schwangau: {
      name: 'Schwangau',
      lat: 48.56667,
      lng: 11.46667,
    },
  },
  HongKong: {
    HongKong: {
      name: 'Hong Kong',
      lat: 22.3,
      lng: 114.2,
    },
  },
  Indonesia: {
    Bali: {
      name: 'Bali',
      lat: -8.34,
      lng: 115.1,
    }
  },
  Ireland: {
    Dublin: {
      name: 'Dublin',
      lat: 53.33333,
      lng: -6.25,
    }
  },
  Italy: {
    Como: {
      name: 'Como',
      lat: 45.81,
      lng: 9.06,
    },
    Malcesine: {
      name: 'Malcesine',
      lat: 45.75,
      lng: 9.65,
    },
    Milan: {
      name: 'Milan',
      lat: 45.45,
      lng: 9.18,
    },
    Rome: {
      name: 'Rome',
      lat: 41.9,
      lng: 12.5,
    },
    Stresa: {
      name: 'Stresa',
      lat: 45.75,
      lng: 9.65,
    },
    Venice: {
      name: 'Venice',
      lat: 45.43,
      lng: 12.33,
    },
    Ventimiglia: {
      name: 'Ventimiglia',
      lat: 45.43,
      lng: 12.33,
    },
  },
  Japan: {
    Okinawa: {
      name: 'Okinawa',
      lat: 26.33333,
      lng: 127.8,
    },
    Tokyo: {
      name: 'Tokyo',
      lat: 35.683333,
      lng: 139.75,
    }
  },
  Jamaica: {
    Negril: {
      name: 'Negril',
      lat: 18.13333,
      lng: -78.43333,
    }
  },
  Portugal: {
    Amarante: {
      name: 'Amarante',
      lat: 41.23333,
      lng: -8.68333,
    },
    Aveiro: {
      name: 'Aveiro',
      lat: 40.63333,
      lng: -8.65,
    },
    Azores: {
      name: 'Azores',
      lat: 37.13333,
      lng: -25.06667,
    },
    Braga: {
      name: 'Braga',
      lat: 41.56667,
      lng: -8.41667,
    },
    CharnecaDeCaparica: {
      name: 'Charneca de Caparica',
      lat: 41.13333,
      lng: -8.33333,
    },
    Coimbra: {
      name: 'Coimbra',
      lat: 40.2,
      lng: -8.41667,
    },
    Ericeira: {
      name: 'Ericeira',
      lat: 38.36667,
      lng: -9.41667,
    },
    Esposende: {
      name: 'Esposende',
      lat: 41.53333,
      lng: -8.81667,
    },
    Evora: {
      name: 'Evora',
      lat: 38.56667,
      lng: -7.9,
    },
    Fatima: {
      name: 'Fátima',
      lat: 38.71667,
      lng: -9.13333,
    },
    Faro: {
      name: 'Faro',
      lat: 37.01667,
      lng: -7.93333,
    },
    FigueiraDeCasteloRodrigo: {
      name: 'Figueira de Castelo Rodrigo',
      lat: 41.26667,
      lng: -8.33333,
    },
    Geres: {
      name: 'Gerês',
      lat: 41.9,
      lng: -8.28333,
    },
    Guimaraes: {
      name: 'Guimarães',
      lat: 41.4,
      lng: -8.29999,
    },
    Lagos: {
      name: 'Lagos',
      lat: 37.1,
      lng: -8.66667,
    },
    Lisbon: {
      name: 'Lisbon',
      lat: 38.71667,
      lng: -9.13333,
    },
    Miranda: {
      name: 'Miranda',
      lat: 38.71667,
      lng: -9.13333,
    },
    Nazare: {
      name: 'Nazare',
      lat: 38.71667,
      lng: -9.13333,
    },
    Nespereira: {
      name: 'Nespereira',
      lat: 38.71667,
      lng: -9.13333,
    },
    Obidos: {
      name: 'Óbidos',
      lat: 39.36667,
      lng: -9.16667,
    },
    Peniche: {
      name: 'Peniche',
      lat: 39.21667,
      lng: -9.38333,
    },
    Pinhao: {
      name: 'Pinhão',
      lat: 41.13333,
      lng: -8.36667,
    },
    Piodao: {
      name: 'Piódão',
      lat: 38.71667,
      lng: -9.13333,
    },
    PonteDeLima: {
      name: 'Ponte de Lima',
      lat: 38.71667,
      lng: -9.13333,
    },
    Porto: {
      name: 'Porto',
      lat: 41.14961,
      lng: -8.61099,
    },
    Regua: {
      name: 'Régua',
      lat: 38.71667,
      lng: -9.13333,
    },
    Sintra: {
      name: 'Sintra',
      lat: 38.8,
      lng: -9.38333,
    },
    VianaDoCastelo: {
      name: 'Viana do Castelo',
      lat: 41.7,
      lng: -8.83333,
    },
  },
  Macau: {
    Macau: {
      name: 'Macau',
      lat: 22.2,
      lng: 113.55,
    },
  },
  Malaysia: {
    KualaLumpur: {
      name: 'Kuala Lumpur',
      lat: 3.16667,
      lng: 101.7,
    },
  },
  Mexico: {
    ChichenItza: {
      Cancun: {
        name: 'Cancun',
        lat: 20.66667,
        lng: -88.56667,
      },
      name: 'Chichén Itzá',
      lat: 20.66667,
      lng: -88.56667,
    },
    Chicxulub: {
      name: 'Chicxulub Pueblo',
      lat: 20.18333,
      lng: -89.01667,
    },
    Merida: {
      name: 'Merida',
      lat: 20.96667,
      lng: -89.61667,
    },
    Progresso: {
      name: 'Progresso',
      lat: 21.31667,
      lng: -89.68333,
    }
  },
  Monaco: {
    Monaco: {
      name: 'Monaco',
      lat: 43.73333,
      lng: 7.41667,
    }
  },
  Netherlands: {
    Amsterdam: {
      name: 'Amsterdam',
      lat: 52.36667,
      lng: 4.9,
    },
    Gouda: {
      name: 'Gouda',
      lat: 52.01667,
      lng: 4.71667,
    },
  },
  NewZealand: {
    Auckland: {
      name: 'Auckland',
      lat: -36.85,
      lng: 174.76667,
    },
    Christchurch: {
      name: 'Christchurch',
      lat: -43.53333,
      lng: 172.63333,
    },
    Hobbiton: {
      name: 'Hobbiton',
      lat: -43.53333,
      lng: 172.63333,
    },
    Martinborough: {
      name: 'Martinborough',
      lat: -42.95,
      lng: 171.6,
    },
    MilfordSound: {
      name: 'Milford Sound',
      lat: -44.65,
      lng: 167.9,
    },
    MountCook: {
      name: 'Mount Cook',
      lat: -43.53333,
      lng: 172.63333,
    },
    MountSunday: {
      name: 'Mount Sunday',
      lat: -43.53333,
      lng: 172.63333,
    },
    Queenstown: {
      name: 'Queenstown',
      lat: -45.0,
      lng: 168.7,
    },
    Rotorua: {
      name: 'Rotorua',
      lat: -38.2,
      lng: 176.0,
    },
    Taupo: {
      name: 'Taupo',
      lat: -38.7,
      lng: 176.0,
    },
    Tongariro: {
      name: 'Tongariro',
      lat: -38.2,
      lng: 175.0,
    },
    WaihekeIsland: {
      name: 'Waiheke Island',
      lat: -36.85,
      lng: 174.76667,
    },
    Wellington: {
      name: 'Wellington',
      lat: -41.3,
      lng: 174.8,
    },
  },
  Singapore: {
    Singapore: {
      name: 'Singapore',
      lat: 1.35,
      lng: 103.8,
    },
  },
  SouthAfrica: {
    Johannesburg: {
      name: 'Johannesburg',
      lat: -26.2,
      lng: 28.03333,
    },
    KrugerPark: {
      name: 'Kruger Park',
      lat: -26.2,
      lng: 28.03333,
    },
  },
  Spain: {
    Barcelona: {
      name: 'Barcelona',
      lat: 41.38333,
      lng: 2.18333,
    },
    Brinas: {
      name: 'Brinas',
      lat: 37.95,
      lng: -4.76667,
    },
    Ibiza: {
      name: 'Ibiza',
      lat: 38.9,
      lng: 1.43333,
    },
    Madrid: {
      name: 'Madrid',
      lat: 40.4,
      lng: -3.68333,
    },
    Malaga: {
      name: 'Malaga',
      lat: 36.71667,
      lng: -4.43333,
    },
    Sevilla: {
      name: 'Sevilla',
      lat: 37.38333,
      lng: -5.96667,
    },
    Toledo: {
      name: 'Toledo',
      lat: 39.85,
      lng: -4.01667,
    }
  },
  Switzerland: {
    Grisons: {
      name: 'Grisons',
      lat: 46.5,
      lng: 7.45,
    }
  },
  Taiwan: {
    Taipei: {
      name: 'Taipei',
      lat: 25.03333,
      lng: 121.55,
    },
  },
  Thailand: {
    Bangkok: {
      name: 'Bangkok',
      lat: 13.75,
      lng: 100.51667,
    },
    ChiangMai: {
      name: 'Chiang Mai',
      lat: 18.8,
      lng: 98.96667,
    },
  },
  UnitedArabEmirates: {
    Dubai: {
      name: 'Dubai',
      lat: 25.25,
      lng: 55.3,
    }
  },
  UnitedStates: {
    ...states
  }
}

export const Travel = {
  countries,
  totalCountries: Object.keys(countries).length,
};