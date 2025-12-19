const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map(Number);

const sum = nums.reduce((acc, cur) => acc + cur, 0);
const average = Math.round(sum / N);

nums.sort((a, b) => a - b);

const median = nums[Math.floor(N / 2)];

const freq = new Map();
for (const n of nums) {
  freq.set(n, (freq.get(n) || 0) + 1);
}

let maxCount = 0;
for (const count of freq.values()) {
  if (count > maxCount) maxCount = count;
}

const modes = [];
for (const [num, count] of freq.entries()) {
  if (count === maxCount) modes.push(num);
}

modes.sort((a, b) => a - b);
const mode = modes.length > 1 ? modes[1] : modes[0];

const range = nums[N - 1] - nums[0];

console.log(average === 0 ? 0 : average);
console.log(median === 0 ? 0 : median);
console.log(mode === 0 ? 0 : mode);
console.log(range === 0 ? 0 : range);
