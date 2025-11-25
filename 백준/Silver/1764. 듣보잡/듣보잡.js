const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let dontsee = new Set();
let dontlook = [];

for (let i = 1; i <= n; i++) {
  dontsee.add(input[i]);
}

for (let j = n + 1; j <= n + m; j++) {
  if (dontsee.has(input[j])) dontlook.push(input[j]);
}

console.log(dontlook.length);
console.log(dontlook.sort().join("\n"));