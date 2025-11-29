const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let order = 1;

function dfs(node) {
  visited[node] = order++;
  for (const next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
}

dfs(R);

console.log(visited.slice(1).join("\n"));