import sys

MAX = 1000000

is_prime = [True] * (MAX + 1)
is_prime[0] = is_prime[1] = False

for i in range(2, int(MAX**0.5) + 1):
    if is_prime[i]:
        for j in range(i*i, MAX+1, i):
            is_prime[j] = False

odd_primes = [i for i in range(3, MAX + 1, 2) if is_prime[i]]

input = sys.stdin.read
nums = list(map(int, input().split()))

for n in nums:
    if n == 0:
        break

    found = False
    for a in odd_primes:
        if a > n // 2:
            break
        b = n - a
        if is_prime[b]:
            print(f"{n} = {a} + {b}")
            found = True
            break

    if not found:
        print("Goldbach's conjecture is wrong.")