const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

let result = [];

for (let n of input) {
  if (n === -1) break;

  let divisors = [1];
  let sum = 1;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      sum += i;

      if (i !== n / i) {
        divisors.push(n / i);
        sum += n / i;
      }
    }
  }

  divisors.sort((a, b) => a - b);

  if (sum === n) {
    result.push(`${n} = ${divisors.join(" + ")}`);
  } else {
    result.push(`${n} is NOT perfect.`);
  }
}

console.log(result.join("\n"));
