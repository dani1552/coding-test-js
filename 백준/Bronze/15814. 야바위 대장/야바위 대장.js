const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let s = input[0].split(""); 
const T = parseInt(input[1]);

for (let i = 0; i < T; i++) {
  const [A, B] = input[i + 2].split(" ").map(Number);

  // swap
  [s[A], s[B]] = [s[B], s[A]];
}

console.log(s.join(""));