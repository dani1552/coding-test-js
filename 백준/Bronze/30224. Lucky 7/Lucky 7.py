n = int(input())

contains_seven = '7' in str(n)
divisible_by_seven = n % 7 == 0

if contains_seven and divisible_by_seven:
    print(3)
elif not contains_seven and divisible_by_seven:
    print(1)
elif contains_seven and not divisible_by_seven:
    print(2)
else:
    print(0)