n = int(input())

for _ in range(n):
    a, b = map(str, input().split())

    for char in b:
        print(char * int(a), end='')
    print()