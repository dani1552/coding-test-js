for i in range(3):
    it = list(map(int, input().split()))
    if it.count(1) == 3:
        print('A')  # 도
    elif it.count(1) == 2:
        print('B')  # 개
    elif it.count(1) == 1:
        print('C')  # 걸
    elif it.count(1) == 0:
        print('D')  # 윷
    else:
        print('E')  # 모