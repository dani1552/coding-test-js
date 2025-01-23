# 입력받기
n, m = map(int, input().split())

# 노래 데이터를 저장할 딕셔너리
songs = {}

# 노래 데이터 입력
for _ in range(n):
    data = input().split()
    title = data[1]
    first_three_notes = tuple(data[2:5])  # 첫 세 음만 추출 (C, C, G 등)
    
    # 딕셔너리에 첫 세 음을 키로 저장
    if first_three_notes not in songs:
        songs[first_three_notes] = [title]
    else:
        songs[first_three_notes].append(title)

# 정환이 맞히려는 음에 대한 입력
queries = [tuple(input().split()) for _ in range(m)]

# 결과 처리
results = []
for query in queries:
    if query in songs:
        if len(songs[query]) == 1:
            results.append(songs[query][0])  # 유일한 노래 제목 출력
        else:
            results.append("?")  # 여러 개라면 ?
    else:
        results.append("!")  # 없으면 !

# 출력
print("\n".join(results))