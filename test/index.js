import { geocode, inRadius, LLToObject } from '../source'

const test = async () => {
  const location1 = await geocode('1060 West Addison Street')
  const location2 = await geocode('43.5262719, 5.4484675')
  console.log(location1, location2)
  
  const center = '43.5262719, 5.4484675'
  const marker = '43.5418485, 5.463309499999999'
  console.log(inRadius(center, marker, 2.2))
}

// test()



