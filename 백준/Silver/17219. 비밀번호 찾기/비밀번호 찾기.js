const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const siteToPassword = new Map();

for (let i = 1; i <= n; i++) {
  const [site, password] = input[i].split(" ");
  siteToPassword.set(site, password);
}

let result = [];
for (let i = n + 1; i <= n + m; i++) {
  const querySite = input[i];
  result.push(siteToPassword.get(querySite));
}

console.log(result.join("\n"));
