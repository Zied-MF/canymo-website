import surpoids from './surpoids-chien-dangers'
import exercice from './exercice-selon-race'
import nutrition from './nutrition-chien-mythes'
import age from './age-chien-sante'
import regle333 from './regle-333-adoption-chien'
import monChienNeMangePlusCausesEtQuandSinquieter from './mon-chien-ne-mange-plus-causes-et-quand-sinquieter'

// Fonction pour parser les dates en français
const months = {
  'janvier': '01', 'février': '02', 'fevrier': '02', 'mars': '03', 'avril': '04',
  'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08', 'aout': '08',
  'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12', 'decembre': '12'
}

function parseDate(dateStr) {
  if (!dateStr) return new Date(0)
  const parts = dateStr.toLowerCase().split(' ')
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0')
    const month = months[parts[1]] || '01'
    const year = parts[2]
    return new Date(`${year}-${month}-${day}`)
  }
  return new Date(0)
}

// Articles triés du plus récent au plus ancien
const allArticles = [surpoids, exercice, nutrition, age, regle333, monChienNeMangePlusCausesEtQuandSinquieter]
export const articles = allArticles.sort((a, b) => parseDate(b.date) - parseDate(a.date))
