import sys
input = sys.stdin.readline

N, M, B = map(int, input().split())
ground = [list(map(int, input().split())) for _ in range(N)]

min_h = 256
max_h = 0

for row in ground:
    for h in row:
        min_h = min(min_h, h)
        max_h = max(max_h, h)

min_time = float('inf')
result_height = 0

for target_height in range(max_h, min_h - 1, -1):
    remove = 0
    add = 0

    for i in range(N):
        for j in range(M):
            current = ground[i][j]
            if current > target_height:
                remove += current - target_height
            else:
                add += target_height - current

    if remove + B >= add:
        time = remove * 2 + add
        if time < min_time:
            min_time = time
            result_height = target_height

print(min_time, result_height)