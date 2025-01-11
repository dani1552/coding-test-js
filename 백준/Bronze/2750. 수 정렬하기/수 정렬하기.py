n = int(input())
numbers = []

for _ in range(n):
    num = int(input())
    numbers.append(num)

numbers.sort()

for number in numbers:
    print(number)