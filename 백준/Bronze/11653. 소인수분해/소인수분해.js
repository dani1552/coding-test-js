const fs = require("fs");
let n = Number(fs.readFileSync(0, "utf8").trim());

let out = [];
let d = 2;

while (d * d <= n) {
  while (n % d === 0) {
    out.push(String(d));
    n = Math.floor(n / d);
  }
  d++;
}

if (n > 1) out.push(String(n));

process.stdout.write(out.join("\n"));
