const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").trim());

let result = "";

for (let i = 1; i <= N; i++) {
  const spaces = " ".repeat(N - i);
  const stars = "*".repeat(2 * i - 1);
  result += spaces + stars + "\n";
}

console.log(result);