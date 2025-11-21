const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (let line of input) {
  if (line === ".") break;

  let stack = [];
  let balanced = true;

  for (let ch of line) {
    if (ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.pop() !== "(") balanced = false;
    } else if (ch === "]") {
      if (stack.pop() !== "[") balanced = false;
    }

    if (!balanced) break;
  }

  console.log(balanced && stack.length === 0 ? "yes" : "no");
}
