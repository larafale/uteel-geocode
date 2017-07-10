import { geocode, inRadius, LLToObject } from '../source'

// geocode('1060 West Addison Street', console.log)
// geocode('43.5262719, 5.4484675', console.log)


const center = LLToObject('43.5262719, 5.4484675')
const marker = LLToObject('43.5418485, 5.463309499999999')

console.log(inRadius(center, marker, 2.2))