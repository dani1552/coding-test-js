const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const asc = [1,2,3,4,5,6,7,8];
const desc = [8,7,6,5,4,3,2,1];

if (input.every((v, i) => v === asc[i])) {
  console.log("ascending");
} else if (input.every((v, i) => v === desc[i])) {
  console.log("descending");
} else {
  console.log("mixed");
}