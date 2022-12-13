function selectSleigh(distance, sleighs) {
  const BATERY_LIMIT = 20;

  const sleighsFiltered = sleighs.filter(
    (item) => distance * item.consumption <= BATERY_LIMIT
  );

  const sleighsSorted = sleighsFiltered.sort(
    (a, b) => b.consumption * distance - a.consumption * distance
  );

  return sleighsSorted.length === 0 ? null : sleighsSorted[0].name;
}

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.
