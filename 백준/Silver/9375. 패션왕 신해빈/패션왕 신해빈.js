const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
let idx = 0;

const T = Number(input[idx++]);
let out = [];

for (let tc = 0; tc < T; tc++) {
  const n = Number(input[idx++]);
  const map = new Map(); 

  for (let i = 0; i < n; i++) {
    const [name, type] = input[idx++].split(" ");
    map.set(type, (map.get(type) || 0) + 1);
  }

  let ans = 1;
  for (const cnt of map.values()) {
    ans *= (cnt + 1);
  }
  ans -= 1;

  out.push(String(ans));
}

console.log(out.join("\n"));
