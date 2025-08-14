const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const totalPrice = Number(input[0]);
const n = Number(input[1]) + 1;
let myPrice = 0;

for (let i = 2; i <= n; i++) {
  let [price, count] = input[i].split(" ");
  myPrice += Number(price) * Number(count);
}

console.log(totalPrice === myPrice ? "Yes" : "No");
