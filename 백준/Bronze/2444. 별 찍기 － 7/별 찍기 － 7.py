count = int(input())

for i in range(1, 2 * count):
    if i <= count:  
        stars = 2 * i - 1
    else: 
        stars = 2 * (2 * count - i) - 1

    spaces = count - (stars // 2) - 1
    print(" " * spaces + "*" * stars)