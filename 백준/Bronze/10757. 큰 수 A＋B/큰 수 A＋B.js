const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const result = A + B;
console.log(result.toString());