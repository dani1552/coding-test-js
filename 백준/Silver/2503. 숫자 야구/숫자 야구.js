const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const questions = input.slice(1).map((v) => v.split(" ").map(Number));

let answer = 0;

for (let i = 123; i <= 987; i++) {
  const s = i.toString();

  if (s.includes("0")) continue;
  if (new Set(s).size !== 3) continue;

  let valid = true;

  for (let [num, strike, ball] of questions) {
    const t = num.toString();

    let sCount = 0;
    let bCount = 0;

    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        if (s[a] === t[b]) {
          if (a === b) sCount++;
          else bCount++;
        }
      }
    }

    if (sCount !== strike || bCount !== ball) {
      valid = false;
      break;
    }
  }

  if (valid) answer++;
}

console.log(answer);
