function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let max = 0;
  let totalGifts = 0;

  const giftsList = giftsCities.filter((item) => item <= maxGifts);
  giftsList.sort((a, b) => b - a);

  for (let i = 0; i < giftsList.length; i++) {
    const newSum = totalGifts + giftsList[i];

    if (max < maxCities && newSum <= maxGifts && newSum !== maxGifts - 1) {
      max++;
      totalGifts += giftsList[i];
    }
  }

  return totalGifts;
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 2;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // 20
