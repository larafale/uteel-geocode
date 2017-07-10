# Geocoding utility

### Install
```
npm i uteel-geocode
```

### Usage
```js
import { geocode } from 'uteel-geocode'


geocode('1060 West Addison Street', (err, location) => {

  console.log(location)
  //
  //  =>
  //
  // {
  //   place_id: 'ChIJId-a5bLTD4gRUkQO01DJTzA',
  //   latlng: '41.9474536,-87.6561341',
  //   street_number: '1060',
  //   street: 'West Addison Street',
  //   city: 'Chicago',
  //   state: 'Cook County',
  //   region: 'Illinois',
  //   country: 'United States',
  //   country_code: 'US',
  //   zipcode: '60613'
  // }
  
})

```
