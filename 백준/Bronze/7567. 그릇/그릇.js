const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("");

let bowl = 10;
for (let i = 1; i < input.length; i++) {
  bowl += input[i] === input[i - 1] ? 5 : 10;
}
console.log(bowl);
