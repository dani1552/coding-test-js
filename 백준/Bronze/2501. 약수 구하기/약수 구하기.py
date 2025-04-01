
n, k = map(int, input().split())
temp = []

for i in range(1, n + 1):
    if n % i == 0:
        temp.append(i)    

if len(temp) < k:
    print(0)
else:
    print(temp[k - 1])
