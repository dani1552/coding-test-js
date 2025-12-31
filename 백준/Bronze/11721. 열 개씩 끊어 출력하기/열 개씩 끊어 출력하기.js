const fs = require("fs");
const str = fs.readFileSync(0, "utf8").trim();

let result = "";

for (let i = 0; i < str.length; i += 10) {
  result += str.slice(i, i + 10) + "\n";
}

console.log(result);
