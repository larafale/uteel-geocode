import 'isomorphic-fetch'

const mapping = {}
// keys are on google response types
// modifier return array with our keys & value
mapping['locality'] = item => (['city', item.long_name])
mapping['route'] = item => (['street', item.long_name])
mapping['street_number'] = item => (['street_number', item.long_name])
mapping['postal_code'] = item => (['zipcode', item.long_name])
mapping['administrative_area_level_1'] = item => (['region', item.long_name])
mapping['administrative_area_level_2'] = item => (['state', item.long_name])
mapping['place_id'] = item => (['place_id', item.place_id])
mapping['country'] = [
  item => (['country', item.long_name]),
  item => (['country_code', item.short_name]),
]
mapping['street_address'] = [
  item => (['address', item.formatted_address]),
  item => (['place_id', item.place_id]),
  item => (['latlng', item.geometry && [item.geometry.location.lat, item.geometry.location.lng].join(',') ]),
]


const reducer = (acc, item) => {
  // if one of object types match our mapping
  // then add corresponding key:value to returned accessor
  item.types.forEach(type => {
    if(Object.keys(mapping).includes(type)){
      const field = mapping[type]
      const modifiers = typeof field == 'function' ? [field] : field
      modifiers.forEach(fn => {
        const key = fn(item)[0]
        const value = fn(item)[1]
        if(value) acc[key] = value
      })
    }
  })
  return acc
}

const parse = googleData => ([
    googleData.results[0]
  , ...googleData.results[0].address_components
])


export const geocode = (input, cb = ()=>{}) => {
  try{
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}`)
      .then(res => res.json())
      .then(data => parse(data).reduce(reducer, {}))
      .then(data => cb(null, data))
  }catch(e) {
    e && console.log(e)
    cb(true)
  }
}

geocode('1060 West Addison Street', console.log)



