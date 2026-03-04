const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let temp = "";

for (let i of input) {
  if ("a" <= i && i <= "z") {
    temp += i.toUpperCase();
  } else if ("A" <= i && i <= "Z") {
    temp += i.toLowerCase();
  }
}

console.log(temp);
