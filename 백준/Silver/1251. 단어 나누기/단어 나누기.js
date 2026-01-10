const fs = require("fs");
const S = fs.readFileSync(0, "utf8").trim();

const n = S.length;
let answer = null;

const reverse = (str) => str.split("").reverse().join("");

for (let i = 1; i <= n - 2; i++) {
  for (let j = i + 1; j <= n - 1; j++) {
    const a = S.slice(0, i);
    const b = S.slice(i, j);
    const c = S.slice(j);

    const candidate = reverse(a) + reverse(b) + reverse(c);

    if (answer === null || candidate < answer) {
      answer = candidate;
    }
  }
}

console.log(answer);
