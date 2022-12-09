function createCube(size) {
  let top = "";
  let bottom = "";

  for (let i = 1; i <= size; i++) {
    top += `${" ".repeat(size - i)}${"/\\".repeat(i)}${"_\\".repeat(size)}\n`;

    bottom += `${" ".repeat(i - 1)}${`\\/`.repeat(size - i + 1)}${`_/`.repeat(
      size
    )}\n`;
  }

  return (top + bottom).slice(0, -1);
}

const cube = createCube(2);
console.log(cube);

console.log(createCube(4));
