const fs = require("fs");
const input = Number(fs.readFileSync(0, "utf8").trim());

let origin = input;
let cur = input;
let count = 0;

do {
  const tens = Math.floor(cur / 10);
  const ones = cur % 10;
  const sum = tens + ones;

  cur = ones * 10 + (sum % 10);
  count++;
} while (cur !== origin);

console.log(count);
