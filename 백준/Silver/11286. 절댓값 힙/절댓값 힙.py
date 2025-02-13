import heapq
import sys

n = int(sys.stdin.readline().strip())

basket = []

for _ in range(n):
    value = int(sys.stdin.readline().strip())

    if value == 0:
        if not basket:  # 리스트가 비어있는 경우
            print(0)
        else:
            print(heapq.heappop(basket)[1])  # 실제 값 출력
    else:
        heapq.heappush(basket, (abs(value), value))  # (절댓값, 원래값) 형태로 저장