function decorateTree(base) {
  const DECORATION_OPTIONS = {
    PP: "P",
    BB: "B",
    RR: "R",
    BP: "R",
    PB: "R",
    RP: "B",
    PR: "B",
    BR: "P",
    RB: "P",
  };

  const treeHeight = base.split(" ").length;
  let result = [base.split(" ")];

  for (let i = 1; i < treeHeight; i++) {
    const subarray = [];

    for (let j = 0; j < treeHeight - i; j++) {
      subarray.push(
        DECORATION_OPTIONS[result[i - 1][j] + result[i - 1][j + 1]]
      );
    }

    result.push(subarray);
  }

  return result.map((item) => item.join(" ")).reverse();
}

console.log(decorateTree("B P R P"));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// console.log(decorateTree("B B"));
// [
// 'B',
// 'B B'
// ]
