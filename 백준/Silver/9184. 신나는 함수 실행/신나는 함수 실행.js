const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(undefined))
);

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (dp[a][b][c] !== undefined) return dp[a][b][c];

  if (a < b && b < c) {
    return (dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
  }

  return (dp[a][b][c] =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1));
}

let output = "";

for (let line of input) {
  const [a, b, c] = line.split(" ").map(Number);
  if (a === -1 && b === -1 && c === -1) break;

  const result = w(a, b, c);
  output += `w(${a}, ${b}, ${c}) = ${result}\n`;
}

console.log(output.trim());
