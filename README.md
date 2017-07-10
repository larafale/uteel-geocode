# Geocoding utility

### Install
```
npm i uteel-geocode
```

### Usage
```js
import { geocode } from 'uteel-geocode'

geocode('1060 West Addison Street', (err, location) => {
  //  location => {
  //    place_id: 'ChIJId-a5bLTD4gRUkQO01DJTzA',
  //    latlng: '41.9474536,-87.6561341',
  //    street_number: '1060',
  //    street: 'West Addison Street',
  //    city: 'Chicago',
  //    state: 'Cook County',
  //    region: 'Illinois',
  //    country: 'United States',
  //    country_code: 'US',
  //    zipcode: '60613'
  //  }
})

geocode('43.5262719, 5.4484675', (err, location) => {
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
})


### Test
```
npm test
```


```
