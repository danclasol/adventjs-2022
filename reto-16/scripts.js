function fixLetter(letter) {
  return letter
    .trim()
    .replaceAll("santa", "Santa")
    .replaceAll("claus", "Claus")
    .replace(/([\?])\1+/g, "?")
    .replace(/([\!])\1+/g, "!")
    .replace(/([ ])\1+/g, " ")
    .replace(/^[a-zA-Z]/, (x) => x.toUpperCase())
    .replace(/(\w\s)([\,\.\?\!])/g, (x) => x.replace(" ", ""))
    .replace(/[\,.\?\!](\w)/g, (x) => x.slice(0, 1) + " " + x.slice(1))
    .replace(/[.\?\!](\s\w)/g, (x) => x.slice(0, 2) + x.at(-1).toUpperCase())
    .replace(/[a-zA-Z]$/, (x) => x + ".");
}

console.log(
  fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
  )
);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

// fixLetter(
// "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
// );
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
