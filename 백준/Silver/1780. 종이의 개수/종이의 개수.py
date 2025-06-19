import sys
input = sys.stdin.readline

n = int(input())
paper = [list(map(int, input().split())) for _ in range(n)]

count = { -1: 0, 0: 0, 1: 0 }

def is_same_number(x, y, size):
    first = paper[x][y]
    for i in range(x, x + size):
        for j in range(y, y + size):
            if paper[i][j] != first:
                return False
    return True

def count_paper(x, y, size):
    if is_same_number(x, y, size):
        count[paper[x][y]] += 1
        return

    new_size = size // 3
    for dx in range(3):
        for dy in range(3):
            count_paper(x + dx * new_size, y + dy * new_size, new_size)

count_paper(0, 0, n)

print(count[-1])
print(count[0])
print(count[1])