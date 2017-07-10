# Geocoding utility

### Install
```
npm i uteel-geocode
```

### Usage
```js
import { geocode } from 'uteel-geocode'


// with "address"
geocode('1060 West Addison Street', (err, location) => {})

// with "latlng"
geocode('43.5262719, 5.4484675', (err, location) => {})


//  location => {
//    address: '20 Cours Mirabeau, 13100 Aix-en-Provence, France',
//    place_id: 'ChIJZdvVzpeNyRIR7TBCZQeHwUY',
//    latlng: '43.5262719,5.4484675',
//    street_number: '20',
//    street: 'Cours Mirabeau',
//    city: 'Aix-en-Provence',
//    state: 'Bouches-du-Rhône',
//    region: 'Provence-Alpes-Côte d\'Azur',
//    country: 'France',
//    country_code: 'FR',
//    zipcode: '13100'
//  }
```

### Infos
The `location` object returned contain at most 11 keys

### Test
```
npm test
```
