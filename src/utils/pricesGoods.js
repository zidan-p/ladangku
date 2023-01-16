
let daerah = [
  "Aceh", 
  "Bali", 
  "Banten", 
  "Bengkulu", 
  "DKI Yogyakarta", 
  "DKI Jakarta", 
  "Gorontalo", 
  "Jambi", 
  "Jawa Barat", 
  "Jawa Tengah", 
  "Jawa Timur", 
  "Kalimantan Barat", 
  "Kalimantan Selatan", 
  "Kalimantan Tengah", 
  "Kalimantan Timur", 
  "Kalimantan Utara", 
  "Kepulauan Bangka Belitung", 
  "Kepulauan Riau", 
  "Lampung", 
  "Maluku", 
  "Maluku Utara", 
  "Nusa Tenggara Barat", 
  "Nusa Tenggara Timur", 
  "Papua", 
  "Papua Barat", 
  "Riau", 
  "Sulawesi Barat", 
  "Sulawesi Selatan", 
  "Sulawesi Tengah", 
  "Sulawesi Tenggara", 
  "Sulawesi Utara", 
  "Sumatera Barat", 
  "Sumatera Selatan", 
  "Sumatera Utara"
]

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}

let dagang = [
  "cabai",
  "bawang merah",
  "bawang putih",
  "terong",
  "sawi",
  "kol"
]

console.log();


export function generateGoodsPrice(){
    return daerah.map((dar) => {
        return {name : dar, 
            dataComodity : dagang.map(
                dag => {
                  return {
                    name : dag,
                    price : Math.round(generateRandom(10_000, 100_000) / 1000) * 1000
                  }
                }
            )
        }
    })
}









