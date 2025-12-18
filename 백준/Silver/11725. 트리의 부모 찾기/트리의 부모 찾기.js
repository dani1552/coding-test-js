const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const parent = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

const queue = [];
queue.push(1);
visited[1] = true;

while (queue.length) {
  const cur = queue.shift();

  for (const next of graph[cur]) {
    if (!visited[next]) {
      visited[next] = true;
      parent[next] = cur;
      queue.push(next);
    }
  }
}

let answer = "";
for (let i = 2; i <= N; i++) {
  answer += parent[i] + "\n";
}

console.log(answer);
