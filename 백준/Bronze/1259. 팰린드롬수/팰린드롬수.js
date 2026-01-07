const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i of input) {
  if (i === "0") return;

  console.log(i === i.split("").reverse().join("") ? "yes" : "no");
}
