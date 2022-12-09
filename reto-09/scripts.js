function countTime(leds) {
  let result = 0;

  while (leds.some((item) => item === 0)) {
    result += 7;

    const currentLeds = [...leds];

    leds.forEach((item, index) => {
      if (item === 1) return;

      leds[index] = currentLeds.at(index - 1);
    });
  }

  return result;
}

const leds = [0, 1, 1, 0, 1];
console.log(countTime(leds)); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1
