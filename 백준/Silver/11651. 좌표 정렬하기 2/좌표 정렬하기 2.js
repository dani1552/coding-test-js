const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let array = input.slice(1).map((p) => p.split(" ").map(Number));
array.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

console.log(array.map((p) => p.join(" ")).join("\n"));
