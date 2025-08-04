const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = new Array(N).fill(0);

for (let m = 1; m <= M; m++) {
  const [i, j, k] = input[m].split(" ").map(Number);

  for (let x = i - 1; x <= j - 1; x++) {
    arr[x] = k;
  }
}

console.log(arr.join(" "));
