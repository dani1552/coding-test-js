import sys
input = sys.stdin.readline  # 한 줄을 읽어오는 함수

n = int(input().strip())  # 막대기의 개수 입력
heights = [int(input().strip()) for _ in range(n)]  # 각 막대기의 높이 입력

max_height = 0
count = 0

for i in range(n - 1, -1, -1):  # 오른쪽 끝에서 왼쪽으로 탐색
    if heights[i] > max_height:  # 더 높은 막대기가 나타날 때만 카운트 증가
        max_height = heights[i]
        count += 1

print(count)  # 최종 보이는 막대기 개수 출력