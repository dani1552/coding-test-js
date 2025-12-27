const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let arr = Array.from({ length: 11 }).fill(0);
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;

for (let i = 4; i <= input.length + 7; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}

for (let j = 1; j < input.length; j++) {
  console.log(arr[input[j]]);
}