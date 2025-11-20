const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const [a, b, c, d, e, f] = input;

const D = a * e - b * d;

const x = (c * e - b * f) / D;
const y = (a * f - c * d) / D;

console.log(x + 0, y + 0);
