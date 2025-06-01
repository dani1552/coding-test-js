n, m = map(int, input().split())
a = list(map(int, input().split()))

count = 0
start, end = 0, 0
current_sum = 0

while(True):
    if current_sum >= m:
        current_sum -= a[start]
        start += 1
    
    elif end == n:
        break

    else:
        current_sum += a[end]
        end += 1

    if current_sum == m:
        count += 1
    
print(count)
