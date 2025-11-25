const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let mine = input[1].split(" ");
let your = input[3].split(" ");
let card = new Map();
let result = [];

for (let m of mine) {
  card.set(m, (card.get(m) || 0) + 1);
}

for (let y of your) {
  if (card.get(y)) result.push(card.get(y));
  else result.push(0);
}

console.log(result.join(" "));