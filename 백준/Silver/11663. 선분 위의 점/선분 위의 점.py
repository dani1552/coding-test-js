import sys

input = sys.stdin.readline

N, M = map(int, input().split())
points = list(map(int, input().split()))
ranges = [tuple(map(int, input().split())) for _ in range(M)]

points.sort()

def lower_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left

def upper_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] <= target:
            left = mid + 1
        else:
            right = mid
    return left

result = []
for L, R in ranges:
    left_index = lower_bound(points, L)  # L 이상인 첫 위치
    right_index = upper_bound(points, R)  # R 이하인 마지막 위치 + 1
    result.append(right_index - left_index)  # 점 개수

print("\n".join(map(str, result)))