const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").trim());

let result = [];

// 위쪽
for (let i = 1; i <= N; i++) {
  const stars = "*".repeat(i);
  const spaces = " ".repeat(2 * (N - i));
  result.push(stars + spaces + stars);
}

// 아래쪽
for (let i = N - 1; i >= 1; i--) {
  const stars = "*".repeat(i);
  const spaces = " ".repeat(2 * (N - i));
  result.push(stars + spaces + stars);
}

console.log(result.join("\n"));
