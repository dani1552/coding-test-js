const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let score = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

//   [ 100, 98, 93, 85, 76 ]
console.log(score[K - 1]);
