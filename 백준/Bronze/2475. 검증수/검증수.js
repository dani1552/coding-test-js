const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let result = 0;
for (let i of input) {
  result += Math.pow(i, 2);
}

console.log(result % 10);