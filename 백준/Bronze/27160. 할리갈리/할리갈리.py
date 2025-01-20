n = int(input())
data = {}

# 과일 정보 입력
for _ in range(n):
    fruit, count = input().split()
    count = int(count)
    if fruit in data:
        data[fruit] += count
    else:
        data[fruit] = count

# 할리갈리 조건 확인
for count in data.values():
    if count == 5:
        print("YES")
        break
else:
    print("NO")