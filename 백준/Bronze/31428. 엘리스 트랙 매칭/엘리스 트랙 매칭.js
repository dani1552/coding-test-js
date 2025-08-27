const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

const N = Number(input[0]);
const friends = input.slice(1, 1 + N);
const myTrack = input[1 + N];

const answer = friends.filter((t) => t === myTrack).length;
console.log(answer);
