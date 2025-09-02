const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
let max_price = 0;

for (let i = 1; i <= n; i++) {
  let dice = input[i].split(" ").map(Number).sort((a, b) => a - b);
  let price = 0;

  const [a, b, c, d] = dice;

  if (a === b && b === c && c === d) {
    // 4개 같음
    price = 50000 + a * 5000;
  } else if (a === b && b === c) {
    // 앞 3개 같음
    price = 10000 + a * 1000;
  } else if (b === c && c === d) {
    // 뒤 3개 같음
    price = 10000 + b * 1000;
  } else if (a === b && c === d) {
    // 2쌍
    price = 2000 + a * 500 + c * 500;
  } else if (a === b || b === c || c === d) {
    // 1쌍
    const pair = a === b ? a : b === c ? b : c;
    price = 1000 + pair * 100;
  } else {
    // 모두 다름
    price = d * 100;
  }

  max_price = Math.max(max_price, price);
}

console.log(max_price);