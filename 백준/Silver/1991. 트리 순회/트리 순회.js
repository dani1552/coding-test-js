const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const array = Array(26).fill(null);
const tree = {};

// 전위순회: 루트 - 왼쪽 - 오른쪽
const preorder = [];
// 중위순회: 왼쪽 - 루트 - 오른쪽
const inorder = [];
// 후위순회: 왼쪽 - 오른쪽 - 루트
const postorder = [];

for (let i = 1; i <= N; i++) {
  const [x, y, z] = input[i].split(" ");
  tree[x] = [y, z];
}

function pre(node) {
  if (node === ".") return;
  preorder.push(node);
  pre(tree[node][0]);
  pre(tree[node][1]);
}

function inOrder(node) {
  if (node === ".") return;
  inOrder(tree[node][0]);
  inorder.push(node);
  inOrder(tree[node][1]);
}

function post(node) {
  if (node === ".") return;
  post(tree[node][0]);
  post(tree[node][1]);
  postorder.push(node);
}

pre("A");
inOrder("A");
post("A");

console.log(preorder.join(""));
console.log(inorder.join(""));
console.log(postorder.join(""));