const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];
const heap = [];
const result = [];

function push(x) {
  heap.push(x);
  let idx = heap.length - 1;

  while (idx > 0) {
    const parent = Math.floor((idx - 1) / 2);
    if (heap[parent] >= heap[idx]) break;

    [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
    idx = parent;
  }
}

function pop() {
  if (heap.length === 0) return 0;
  if (heap.length === 1) return heap.pop();

  const max = heap[0];
  heap[0] = heap.pop();

  let idx = 0;
  while (true) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let largest = idx;

    if (left < heap.length && heap[left] > heap[largest]) {
      largest = left;
    }
    if (right < heap.length && heap[right] > heap[largest]) {
      largest = right;
    }

    if (largest === idx) break;

    [heap[idx], heap[largest]] = [heap[largest], heap[idx]];
    idx = largest;
  }

  return max;
}

for (let i = 1; i <= n; i++) {
  const x = +input[i];
  if (x === 0) result.push(pop());
  else push(x);
}

console.log(result.join("\n"));
