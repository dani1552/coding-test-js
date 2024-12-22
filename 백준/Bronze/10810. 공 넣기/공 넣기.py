ball_num, count = map(int, input().split())
nums = [0] * ball_num   # 0으로 채워진 리스트

for _ in range(count):
    i, j, k = map(int, input().split())
    for index in range(i-1, j):
        nums[index] = k

print(" ".join(map(str, nums)))