n = int(input())
ingredient = list(map(str, input().split()))
use_ingredient = set(map(str, input().split()))

for item in ingredient:
    if item not in use_ingredient:
        print(item)