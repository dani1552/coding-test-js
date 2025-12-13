const fs = require("fs");
const [a, b, c] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let arr = [a, b, c].sort((x, y) => x - y);
let [x, y, z] = arr;

if (x + y > z) {
  console.log(x + y + z);
} else {
  console.log(x + y + (x + y - 1));
}