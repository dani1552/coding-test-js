const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const a = input[0];
const b = input[1];
const c = input[2];

// string
console.log(Number(a) + Number(b) - Number(c));

// number
console.log(a + b - Number(c));
