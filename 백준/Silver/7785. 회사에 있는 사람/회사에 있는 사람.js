const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let n = input[0];
let m = new Map();

for (let i = 1; i <= n; i++) {
  let [name, log] = input[i].split(" ");

  if (log === "enter") {
    m.set(name, 1);
  } else {
    m.delete(name);
  }
}

let answer = Array.from(m.keys()).sort().reverse();
console.log(answer.join("\n"));