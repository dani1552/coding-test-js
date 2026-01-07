const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

let a = +input[0];
let b = +input[1];

function gcd(x, y) {
  while (y !== 0) {
    let temp = x % y;
    x = y;
    y = temp;
  }
  return x;
}

const GCD = gcd(a, b);
const LCM = (a * b) / GCD;

console.log(GCD);
console.log(LCM);
