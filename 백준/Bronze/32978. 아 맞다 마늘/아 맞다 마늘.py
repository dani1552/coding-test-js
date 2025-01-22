n = int(input())
ingredient = list(map(str, input().split()))
use_ingredient = list(map(str, input().split()))

for i in range(n):
    if ingredient[i] in use_ingredient:
        continue
    else:
        print(ingredient[i])