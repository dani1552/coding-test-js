count = int(input())

for _ in range(count):
    a, b = map(int, input().split())
    a = a % 10

    if a == 0:
        print(10)
    elif a == 1 or a == 5 or a == 6:    # n번 제곱해도 값이 자신인 경우
        print(a)
    elif a == 4 or a == 9:
        if b % 2 == 1:
            print(a)
        else:
            print((a * a) % 10)
    else:
        b = b % 4   # 4개씩 패턴 반복됨
        if b == 0:  # 패턴의 마지막 값
            print((a**4) % 10)
        else:
            print((a**b)% 10)
