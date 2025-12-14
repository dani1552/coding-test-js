const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const [N, M] = input[idx++].split(" ").map(Number);

const numToName = Array(N + 1);

const nameToNum = new Map();

for (let i = 1; i <= N; i++) {
  const name = input[idx++].trim();
  numToName[i] = name;
  nameToNum.set(name, i);
}

const out = [];
for (let i = 0; i < M; i++) {
  const q = input[idx++].trim();

  if (!Number.isNaN(Number(q))) {
    out.push(numToName[Number(q)]);
  } else {
    out.push(String(nameToNum.get(q)));
  }
}

console.log(out.join("\n"));