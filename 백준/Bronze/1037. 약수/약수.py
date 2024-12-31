n = int(input())  # 약수의 개수
divisors = list(map(int, input().split()))  # 약수 리스트

# 최소값과 최대값 찾기
min_divisor = min(divisors)
max_divisor = max(divisors)

# 원래 숫자 계산
N = min_divisor * max_divisor

print(N)