/*
 * 문제 해설
 * - 그래프를 DFS와 BFS로 탐색한 결과를 출력하는 프로그램입니다.
 * - 방문할 수 있는 정점이 여러 개인 경우, 정점 번호가 작은 것부터 먼저 방문해야 합니다.
 * - 입력되는 간선은 양방향입니다.
 * - 정점의 번호는 1번부터 N번까지 입니다.
 */

// 입력 처리
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [info, ...edges] = input;
const [N, M, V] = info.split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);

edges.forEach((edge) => {
  const [from, to] = edge.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

// 정점 번호가 작은 것부터 방문하기 위해 정렬
graph.forEach((arr) => {
  arr.sort((a, b) => a - b);
});

let dfsResult = [];
let bfsResult = [];

// DFS 구현 (재귀)
function dfs(startNode) {
  if (visited[startNode]) {
    return;
  }
  visited[startNode] = true;
  dfsResult.push(startNode);

  graph[startNode].forEach((node) => {
    if (!visited[node]) {
      dfs(node);
    }
  });
}

// BFS 구현 (큐)
function bfs(startNode) {
  const queue = [startNode];
  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    bfsResult.push(currentNode);

    graph[currentNode].forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
      }
    });
  }
}

// DFS 실행
dfs(V);
// 방문 배열 초기화
visited.fill(false);
// BFS 실행
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
