from collections import deque
import sys
input = sys.stdin.readline

def process(p, arr):
    reverse = False

    for command in p:
        if command == 'R':
            reverse = not reverse
        elif command == 'D':
            if not arr:
                return 'error'
            if reverse:
                arr.pop()
            else:
                arr.popleft()

    if reverse:
        arr.reverse()
    return '[' + ','.join(map(str, arr)) + ']'


T = int(input())
for _ in range(T):
    p = input().strip()
    n = int(input())
    arr_str = input().strip()

    if n == 0:
        arr = deque()
    else:
        arr = deque(map(int, arr_str[1:-1].split(',')))

    result = process(p, arr)
    print(result)