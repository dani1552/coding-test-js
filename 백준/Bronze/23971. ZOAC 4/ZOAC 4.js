const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const [H, W, N, M] = input;

const rows = Math.ceil(H / (N + 1));
const cols = Math.ceil(W / (M + 1));

console.log(rows * cols);
