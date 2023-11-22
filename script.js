function parseDate(vlozenyDatum) {
    const rozdelenieDatumu = vlozenyDatum.split('.')

 const den = parseInt(rozdelenieDatumu[0], 10)
 const mesiac = parseInt(rozdelenieDatumu[1], 10)
 const rok = parseInt(rozdelenieDatumu[2], 10)

    const parsedDate = {
     den: den,
     mesiac: mesiac,
     rok: rok
 }

 return parsedDate
}

const vlozenyDatum = '17.11.2023'
const vyslednyDatum = parseDate(vlozenyDatum)

console.log(vyslednyDatum)