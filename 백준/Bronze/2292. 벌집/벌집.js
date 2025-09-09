const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").trim());

if (N === 1) {
  console.log(1);
} else {
  let k = 1;
  while (1 + 3 * k * (k - 1) < N) {
    k++;
  }
  console.log(k);
}