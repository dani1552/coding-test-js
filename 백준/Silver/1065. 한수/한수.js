const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").trim());

let count = 0;

for (let i = 1; i <= N; i++) {
  // 1자리, 2자리는 무조건 한수
  if (i < 100) {
    count++;
    continue;
  }

  const digits = String(i).split("").map(Number);
  const diff = digits[1] - digits[0];
  let isHansoo = true;

  for (let j = 2; j < digits.length; j++) {
    if (digits[j] - digits[j - 1] !== diff) {
      isHansoo = false;
      break;
    }
  }

  if (isHansoo) count++;
}

console.log(count);
