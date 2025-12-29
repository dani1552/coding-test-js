const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
let arr = Array(n + 1).fill(0n);

arr[1] = 1n;
arr[2] = 1n;

for (let i = 3; i <= n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[n].toString());

// 1 -> 1
// 2 -> 10
// 3 -> 100 101
// 4 -> 1000 1001 1010
// dp로 풀어야겠다 (n-1 + n-2)

// JS의 Number는 64비트 소수점이라서 걸림: 숫자 뒤에 n 붙이고 문자열로 출력해서 bigInt 적용
