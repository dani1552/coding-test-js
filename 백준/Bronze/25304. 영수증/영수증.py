total_price = int(input())
total_count = int(input())

sum_price = 0

for i in range(1, total_count + 1):
    price, count = map(int, input().split())
    sum_price = sum_price + (price * count)

if sum_price == total_price:
    print("Yes")
else:
    print("No")