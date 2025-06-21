# dfs
import sys
sys.setrecursionlimit(10**5)  

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]

result = [[0] * n for _ in range(n)]

def dfs(start, node, visited):
    for next_node in range(n):
        if not visited[next_node] and graph[node][next_node]:
            visited[next_node] = True
            result[start][next_node] = 1
            dfs(start, next_node, visited)

for i in range(n):
    visited = [False] * n
    dfs(i, i, visited)

for row in result:
    print(*row)