function getOptimalPath(path) {
  if (path.length === 1) return path[0][0];

  let result = path[0][0];
  path.shift(0);

  const childrenLeft = path.map((item) => item.slice(0, -1));
  const childrenRight = path.map((item) => item.slice(1));

  return (
    result +
    Math.min(getOptimalPath(childrenLeft), getOptimalPath(childrenRight))
  );
}

console.log(getOptimalPath([[1], [2, 3]])); // 2
// 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); // 5
//   [0],
//  [3, 4],
// [9, 8, 1]
// 0 -> 4 -> 1

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); // 8
// 1 -> 1 -> 5 -> 1
