data = [input() for _ in range(5)]

# 최대 길이를 기준으로 세로로 읽기
result = ''
for i in range(max(len(row) for row in data)):
    for row in data:    # 한 줄씩 순회
        if i < len(row):  # 현재 줄의 길이를 초과하지 않는 경우만 추가
            result += row[i]

print(result)
