def get_lcm(a, b):
    while b != 0:
        a, b = b, a % b
    gcd = a
    return (A * B) // gcd

T = int(input())
for _ in range(T):
    A, B = map(int, input().split())
    print(get_lcm(A, B))
