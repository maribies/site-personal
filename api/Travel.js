const countries = {
  France: {
    Paris: {
      name: 'Paris',
      lat: 48.856614,
      lng: 2.3522219,
      // TODO: add images
    }
  },
  Portugal: {
    Porto: {
      name: 'Porto',
      lat: 41.14961,
      lng: -8.61099,
      // TODO: add images
    },
    Lisbon: {
      name: 'Lisbon',
      lat: 38.71667,
      lng: -9.13333,
      // TODO: add images
    }
  }
}

export const Travel = {
  countries,
  totalCountries: Object.keys(countries).length,
};