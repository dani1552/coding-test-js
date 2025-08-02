const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let line of input) {
  const [a, b, c] = line.split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) break;

  const sides = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = sides;

  if (x + y <= z) {
    console.log("Invalid");
  } else if (x === y && y === z) {
    console.log("Equilateral");
  } else if (x === y || x === z || y === z) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
