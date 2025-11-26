const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const n = +input[0];
const m = +input[1];

const seq = [];
const result = [];

function backtrack(start) {
  if (seq.length === m) {
    result.push(seq.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    seq.push(i);
    backtrack(i);
    seq.pop();
  }
}

backtrack(1);
console.log(result.join("\n"));
