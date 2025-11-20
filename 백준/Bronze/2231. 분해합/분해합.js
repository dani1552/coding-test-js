const fs = require("fs");
const input = +fs.readFileSync(0, "UTF8").trim();

function getSum(x) {
  return (
    x +
    String(x)
      .split("")
      .reduce((a, c) => a + Number(c), 0)
  );
}

let answer = 0;
for (let i = 1; i <= input; i++) {
  if (getSum(i) === input) {
    answer = i;
    break;
  }
}

console.log(answer);
