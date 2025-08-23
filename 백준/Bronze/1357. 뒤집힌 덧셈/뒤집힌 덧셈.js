const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function rev(n) {
  return Number(n.toString().split("").reverse().join(""));
}

const x = rev(input[0]);
const y = rev(input[1]);

const result = rev(x + y);
console.log(result);