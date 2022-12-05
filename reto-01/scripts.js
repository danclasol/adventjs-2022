function wrapping(gifts) {
  return gifts.map((gift) => {
    const cover = "*".repeat(gift.length + 2);
    const bottom = `\n*${gift}*\n`;

    return cover + bottom + cover;
  });
}

const gifts = ["cat", "game", "socks"];
console.log(wrapping(gifts));
