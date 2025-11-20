const fs = require("fs");
const input = +fs.readFileSync(0, "utf8").trim();

let count = 0;
let num = 666;

while (true) {
  if (String(num).includes("666")) {
    count++;

    if (count === input) {
      console.log(num);
      break;
    }
  }
  num++;
}
