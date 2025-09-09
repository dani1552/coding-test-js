const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

const N = Number(input);

const points = (2 ** N + 1) ** 2;

console.log(points);
