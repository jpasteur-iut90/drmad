// utils formatage

// retourne "date at heure" en gérant string ISO ou objet { $date }
function formatDateTime(date) { // date = string ISO || un objet $date
  let iso
  if (date && date.$date) { // 1 - date est non null, 2 - date est un objet { $date }
    iso = date.$date // on extrait { $date }
  } else iso = date

  const d = new Date(iso) // Nouvelle date js
  if (isNaN(d.getTime())) { // si date invalide
    return ''
  }
  const day = d.toLocaleDateString('en-EN') // ex: 05/30/2023
  const time = d.toLocaleTimeString('en-EN') // ex: 19:09:29
  return `${day} at ${time}` // ex: 30/05/2023 at 19:09:29
}


function formatAmount(nb) { // nb = nombre positif ou négatif
  const formatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }) // trouvé sur internet pour formattage €
  return formatter.format(nb) // ex: -10 000,50 € au lieu de -10000,50
}

export { formatAmount, formatDateTime };
