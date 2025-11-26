const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const n = +input[0];
const m = +input[1];
const visited = Array(n + 1).fill(false);
const seq = [];
const output = [];

function backtrack(depth) {
  if (depth === m) {
    output.push(seq.join(" "));
    return;
  }

  for (let num = 1; num <= n; num++) {
    if (visited[num]) continue;

    visited[num] = true;
    seq.push(num);

    backtrack(depth + 1);

    seq.pop();
    visited[num] = false;
  }
}

backtrack(0);
console.log(output.join("\n"));