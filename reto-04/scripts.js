function fitsInOneBox(boxes) {
  const checkFits = (box1, box2) => {
    if (box1.l < box2.l && box1.w < box2.w && box1.h < box2.h) {
      return -1;
    }

    return 1;
  };

  const result = boxes
    .sort((a, b) => checkFits(b, a))
    .some((item, index) => {
      if (index === 0) return;

      return checkFits(item, boxes[index - 1]) === 1;
    });

  return !result;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];

console.log(fitsInOneBox(boxes)); // false
