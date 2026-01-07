const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const people = +input[0];

let shirts = input[1].split(" ").map(Number);
let [t, p] = input[2].split(" ").map(Number);

let shirtsCount = 0;

for (let s of shirts) {
  if (s === 0) continue;
  if (s < t) {
    shirtsCount += 1;
  } else {
    shirtsCount += Math.ceil(s / t);
  }
}

console.log(shirtsCount);
console.log(Math.floor(people / p), people % p);
