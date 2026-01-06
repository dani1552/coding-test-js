const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);

let idx = 1;
let result = [];

for (let t = 0; t < T; t++) {
  const str = input[idx++];
  let score = 0;
  let streak = 0;

  for (const ch of str) {
    if (ch === "O") {
      streak++;
      score += streak;
    } else {
      streak = 0;
    }
  }

  result.push(score);
}

console.log(result.join("\n"));
