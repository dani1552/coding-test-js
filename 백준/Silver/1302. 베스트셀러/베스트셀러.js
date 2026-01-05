const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const books = input.slice(1);

let map = new Map();

// map에 책, 개수 넣기
for (let b of books) {
  map.set(b, (map.get(b) || 0) + 1);
}

// 최댓값 찾기
let maxCount = 0;
let answer = "";

for (let [book, count] of map) {
  if (count > maxCount || (count === maxCount && book < answer)) {
    maxCount = count;
    answer = book;
  }
}

console.log(answer);
