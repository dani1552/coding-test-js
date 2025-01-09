n, k = map(int, input().split())
list = [i for i in range(1, n+1)]
new_list = []

index = 0
while list:
    index = (index + k - 1) % len(list)  # k번째 사람의 인덱스를 계산
    new_list.append(list.pop(index))     # k번째 사람을 제거하고 새로운 리스트에 추가

print("<" + ", ".join(map(str, new_list)) + ">")