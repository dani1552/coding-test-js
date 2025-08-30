const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");

const A = input[0];
const B = input[1];

const sumDigits = (s) => [...s].reduce((acc, ch) => acc + BigInt(ch), 0n);

const answer = sumDigits(A) * sumDigits(B);
console.log(answer.toString());
