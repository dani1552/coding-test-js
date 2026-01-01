const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2];

let count = 0;  
let answer = 0;

for (let i = 0; i <= M - 3; i++) {
  if (S[i] === 'I' && S[i + 1] === 'O' && S[i + 2] === 'I') {
    count++;
    if (count >= N) answer++;
    i++; 
  } else {
    count = 0;
  }
}

console.log(answer);
