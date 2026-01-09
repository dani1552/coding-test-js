const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const people = input.slice(1).map(line => line.split(" ").map(Number));

let result = [];

for (let i = 0; i < N; i++) {
  let rank = 1;

  for (let j = 0; j < N; j++) {
    if (
      people[j][0] > people[i][0] && 
      people[j][1] > people[i][1]   
    ) {
      rank++;
    }
  }

  result.push(rank);
}

console.log(result.join(" "));
