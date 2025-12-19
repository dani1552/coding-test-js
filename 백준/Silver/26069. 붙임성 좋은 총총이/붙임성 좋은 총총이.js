const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

let dance = new Set(["ChongChong"]);

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ");
  if (dance.has(x)) {
    dance.add(y);
  } else if (dance.has(y)) {
    dance.add(x);
  }
}

console.log(dance.size);
