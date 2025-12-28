const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

let [r, g, b] = input[1].split(" ").map(Number);

for (let i = 2; i <= N; i++) {
  const [cr, cg, cb] = input[i].split(" ").map(Number);
  const nr = cr + Math.min(g, b);
  const ng = cg + Math.min(r, b);
  const nb = cb + Math.min(r, g);
  r = nr;
  g = ng;
  b = nb;
}

console.log(Math.min(r, g, b));