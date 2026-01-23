const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split("\n");

let result = [];

for (let line of input) {
  // ⚠️ EOF 마지막에 생기는 진짜 "없는 줄"만 제거
  if (line === undefined) continue;

  // Windows 개행 제거
  line = line.replace(/\r/g, "");

  let small = 0;
  let large = 0;
  let number = 0;
  let space = 0;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if ('a' <= ch && ch <= 'z') small++;
    else if ('A' <= ch && ch <= 'Z') large++;
    else if ('0' <= ch && ch <= '9') number++;
    else if (ch === ' ') space++;
  }

  result.push(`${small} ${large} ${number} ${space}`);
}

if (result[result.length - 1] === "0 0 0 0") {
  result.pop();
}

console.log(result.join("\n"));
