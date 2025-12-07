const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const N = Number(input);

function makeStars(n) {
  if (n === 1) return ["*"]; 

  const prev = makeStars(n / 3);
  const size = prev.length;
  const result = [];

  // 위: prev 각 줄을 3번 반복
  for (let i = 0; i < size; i++) {
    result.push(prev[i].repeat(3));
  }

  // 가운데: prev + 공백(size만큼) + prev
  const spaces = " ".repeat(size);
  for (let i = 0; i < size; i++) {
    result.push(prev[i] + spaces + prev[i]);
  }

  // 아래: prev 각 줄을 3번 반복
  for (let i = 0; i < size; i++) {
    result.push(prev[i].repeat(3));
  }

  return result;
}

const answer = makeStars(N).join("\n");
console.log(answer);