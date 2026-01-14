const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);
let output = [];

for (let t = 0; t < T; t++) {
    const N = Number(input[idx++]);
    const note1 = input[idx++].split(" ").map(Number);
    const M = Number(input[idx++]);
    const note2 = input[idx++].split(" ").map(Number);

    const set = new Set(note1);

    for (let num of note2) {
        output.push(set.has(num) ? "1" : "0");
    }
}

console.log(output.join("\n"));
