const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];
let result = [];
let arr = [];

// 두 값을 비교하는 함수
function isHigherPriority(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  if (absA === absB) return a < b; // 절댓값 같으면 실제 값 작은 게 우선
  return absA < absB; // 절댓값 작은 게 우선
}

function push(x) {
  arr.push(x);
  let idx = arr.length - 1;

  while (idx > 0) {
    let parent = Math.floor((idx - 1) / 2);
    if (isHigherPriority(arr[idx], arr[parent])) {
      [arr[idx], arr[parent]] = [arr[parent], arr[idx]];
      idx = parent;
    } else break;
  }
}

function pop() {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr.pop();

  const root = arr[0];
  arr[0] = arr.pop();
  let idx = 0;

  while (true) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let smallest = idx;

    if (left < arr.length && isHigherPriority(arr[left], arr[smallest])) {
      smallest = left;
    }
    if (right < arr.length && isHigherPriority(arr[right], arr[smallest])) {
      smallest = right;
    }
    if (smallest === idx) break;

    [arr[idx], arr[smallest]] = [arr[smallest], arr[idx]];
    idx = smallest;
  }

  return root;
}

for (let i = 1; i <= n; i++) {
  if (input[i] === "0") {
    result.push(pop());
  } else {
    push(+input[i]);
  }
}

console.log(result.join("\n"));
