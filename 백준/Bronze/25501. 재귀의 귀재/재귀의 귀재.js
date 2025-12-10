const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
let T = Number(input[0]);

// s: 검사할 문자열, l: left, r: right, counter: 재귀 호출 횟수
function recursion(s, l, r, counter) {
  counter.count++; 

  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1, counter);
}

function isPalindrome(s) {
  const counter = { count: 0 }; 
  const result = recursion(s, 0, s.length - 1, counter);
  return [result, counter.count];
}

let output = [];
for (let i = 1; i <= T; i++) {
  const s = input[i].trim();
  const [result, cnt] = isPalindrome(s);
  output.push(`${result} ${cnt}`);
}

console.log(output.join("\n"));
