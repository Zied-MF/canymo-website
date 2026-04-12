import surpoids from './surpoids-chien-dangers'
import exercice from './exercice-selon-race'
import nutrition from './nutrition-chien-mythes'
import age from './age-chien-sante'
import regle333 from './regle-333-adoption-chien'

const months = {
  janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12,
}

function parseDate(str) {
  const [day, month, year] = str.toLowerCase().split(' ')
  return new Date(+year, (months[month] || 1) - 1, +day)
}

const all = [surpoids, exercice, nutrition, age, regle333]

export const articles = all.sort((a, b) => parseDate(b.date) - parseDate(a.date))
