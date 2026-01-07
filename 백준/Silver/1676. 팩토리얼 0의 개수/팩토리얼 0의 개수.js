const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8").trim());

let count = 0;
let x = n;

while (x > 0) {
  x = Math.floor(x / 5);
  count += x;
}

console.log(count);
