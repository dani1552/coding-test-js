const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const t = +input[0];

for (let i = 1; i <= t; i++) {
  let ps = input[i].trim();
  let stack = [];
  let valid = true;

  for (let ch of ps) {
    if (ch === "(") {
      stack.push(ch);
    } else {
      if (stack.length === 0) {
        valid = false;
        break;
      }
      stack.pop();
    }
  }

  console.log(valid && stack.length === 0 ? "YES" : "NO");
}
