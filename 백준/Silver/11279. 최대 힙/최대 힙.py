import sys
import heapq

n = int(sys.stdin.readline().strip())  
heap = []

for _ in range(n):
    x = int(sys.stdin.readline().strip())

    if x == 0:
        if heap:
            print(-heapq.heappop(heap))  # 최댓값 출력 후 제거
        else:
            print(0)  # 힙이 비었을 경우 0 출력
    else:
        heapq.heappush(heap, -x)  # 최대 힙을 위해 음수 값 삽입