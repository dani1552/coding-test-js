const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let arr = Array(+input[0] + 1).fill(0);

arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= input[0]; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}

console.log(arr[input]);