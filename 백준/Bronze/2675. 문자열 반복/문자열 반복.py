t = int(input())

for _ in range(t):
    r, s = input().split()
    r = int(r) 

    result = ''.join([char * r for char in s])
    
    print(result)