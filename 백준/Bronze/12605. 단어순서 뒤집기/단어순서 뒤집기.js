const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

N = input[0];
let answer = [];
for (let i = 1; i <= N; i++) {
  const reversed = input[i].trim().split(" ").reverse().join(" ");
  answer.push(`Case #${i}: ${reversed}`);
}

console.log(answer.join("\n"));
