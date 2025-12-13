const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const M = input[0];
const N = input[1];

let isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

let sum = 0;
let minPrime = Infinity;

for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    sum += i;
    if (minPrime === Infinity) minPrime = i;
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minPrime);
}
