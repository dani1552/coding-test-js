const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];
const stack = [];
const result = [];

for (let i = 1; i <= n; i++) {
  const [cmd, x] = input[i].split(" ");

  switch (cmd) {
    case "1":
      stack.push(+x);
      break;
    case "2":
      result.push(stack.length ? stack.pop() : -1);
      break;
    case "3":
      result.push(stack.length);
      break;
    case "4":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "5":
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(result.join("\n"));