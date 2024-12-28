a, b = input().split()

# [::-1] 뒤에서부터 출력하기
a_reversed = int(a[::-1])
b_reversed = int(b[::-1])

print(max(a_reversed, b_reversed))