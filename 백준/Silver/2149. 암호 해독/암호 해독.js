const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

let key = lines[0].trim().split("");
let secret_line = lines[1].trim();

const N = key.length;
let column_length = secret_line.length / N;

const keyed = key.map((ch, idx) => ({ ch, idx }));
let sorted_key = [...keyed].sort((a, b) =>
  a.ch === b.ch ? a.idx - b.idx : a.ch < b.ch ? -1 : 1
);

// console.log("sorted_key: ", sorted_key);

const colsSorted = Array.from({ length: N }, (_, i) =>
  secret_line.slice(i * column_length, (i + 1) * column_length).split("")
);

// console.log("colsSorted: ", colsSorted);

const colsOriginal = Array(N);
for (let i = 0; i < N; i++) {
  const originalColIdx = sorted_key[i].idx;
  colsOriginal[originalColIdx] = colsSorted[i];
  // console.log("originalColIdx: ", originalColIdx);
}

let answer = [];
for (let i = 0; i < column_length; i++) {
  for (let j = 0; j < N; j++) {
    answer += colsOriginal[j][i];
  }
}

console.log(answer);
