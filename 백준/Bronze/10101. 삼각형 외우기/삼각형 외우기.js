const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [x, y, z] = input.map(Number).sort((a, b) => a - b);

if (x + y + z !== 180) {
  console.log("Error");
} else if (x === y && y === z) {
  console.log("Equilateral");
} else if (x === y || y === z) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
