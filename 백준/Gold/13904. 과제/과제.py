import sys

input = sys.stdin.readline

N = int(input())
assignments = [tuple(map(int, input().split())) for _ in range(N)]

def sort_by_score(a):
    return a[1]

assignments.sort(key=sort_by_score, reverse=True)
max_day = max(d for d, _ in assignments)
days = [False] * (max_day + 1) 
total_score = 0

for d, w in assignments:
    for day in range(d, 0, -1):
        if not days[day]:
            days[day] = True
            total_score += w
            break

print(total_score)