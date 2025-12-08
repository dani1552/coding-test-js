const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
let answer = 0;
let set = new Set();

for (let i = 1; i <= N; i++) {
  const line = input[i].trim();

  if (line === "ENTER") {
    answer += set.size;
    set.clear(); 
  } else {
    set.add(line);
  }
}

answer += set.size;

console.log(answer);