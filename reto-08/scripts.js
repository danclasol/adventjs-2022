function checkPart(part) {
  const letters = part.split("");

  if (part === part.split("").reverse().join("")) return true;

  for (const letter of letters) {
    const partStr = part.replace(letter, "");
    const reverseStr = partStr.split("").reverse().join("");

    if (partStr === reverseStr) return true;
  }

  return false;
}

console.log("uwu", checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log("miidim", checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log("midu", checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
