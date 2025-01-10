n, m = map(int, input().split()) 
card = list(map(int, input().split())) 

max_sum = 0  

for i in range(n):
    for j in range(i + 1, n):  # 첫번째 카드 선택
        for k in range(j + 1, n):  # 두번째 카드 선택
            current_sum = card[i] + card[j] + card[k] 
            if current_sum <= m: 
                max_sum = max(max_sum, current_sum)  

print(max_sum)