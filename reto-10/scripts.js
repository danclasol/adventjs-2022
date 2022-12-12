function checkJump(heights) {
  let goingUp = false;
  let topReached = false;
  let result = true;

  heights.forEach((item, index) => {
    const step = item - heights[index - 1];

    if (step > 0) {
      goingUp = true;

      if (topReached) result = false;
    }

    if (step < 0) {
      if (!goingUp) result = false;

      topReached = true;
    }
  });

  return result && topReached;
}

console.log(checkJump([1, 3, 8, 5, 2])); // true
console.log(checkJump([1, 7, 3, 5])); // false
