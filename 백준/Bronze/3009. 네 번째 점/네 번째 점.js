const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let xcount = [];
let ycount = [];

for (let i of input) {
  const [x, y] = i.split(" ").map(Number);
  xcount.push(x);
  ycount.push(y);
}

console.log(
  xcount.filter((x) => xcount.indexOf(x) === xcount.lastIndexOf(x))[0],
  ycount.filter((y) => ycount.indexOf(y) === ycount.lastIndexOf(y))[0]
);