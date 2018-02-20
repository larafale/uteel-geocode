# Geocoding utilities


### Install
```
npm i uteel-geocode
```

### geocode(input)
The number of returned attributes can vary depending on google maps api results. It can contains at most 11 keys.

```js
import { geocode } from 'uteel-geocode'

// with "address"
geocode('1060 West Addison Street').then(console.log)

// with "latlng"
geocode('43.5262719, 5.4484675').then(console.log)

//  {
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

### inRadius(center, marker, radius)

Check if a marker is within radius of a center point.


```js
import { inRadius } from 'uteel-geocode'

const center = '43.5262719, 5.4484675'
const marker = '42.876519, 5.2531983'
const radius = '10' // kilometers

inRadius(center, marker, radius) // true or false
```


### Test
```
npm test
```
