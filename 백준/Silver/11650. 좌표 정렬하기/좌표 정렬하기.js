const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
// 5
// 3 4
// 1 1
// 1 -1
// 2 2
// 3 3
const points = input.slice(1).map((line) => line.split(" ").map(Number));
// [
//   [3, 4],
//   [1, 1],
//   [1, -1],
//   [2, 2],
//   [3, 3],
// ];

points.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

console.log(points.map((p) => p.join(" ")).join("\n"));
