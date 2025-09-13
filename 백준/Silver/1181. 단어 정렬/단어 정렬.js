const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const words = input.slice(1, n + 1);

const uniqueWords = [...new Set(words)];

uniqueWords.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  return a.length - b.length;
});

console.log(uniqueWords.join("\n"));
