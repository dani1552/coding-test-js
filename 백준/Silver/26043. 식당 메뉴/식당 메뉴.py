import sys
from collections import deque

input = sys.stdin.read
data = input().splitlines()

n = int(data[0])

# FIFO 방식의 대기열 (큐)
queue = deque()

# 결과 리스트
ate_like = []  # A 목록: 좋아하는 메뉴를 먹은 학생
ate_dislike = []  # B 목록: 좋아하지 않는 메뉴를 먹은 학생
no_food = []  # C 목록: 끝까지 식사 못 한 학생

# 입력 처리
for i in range(1, n + 1):
    command = data[i].split()

    if command[0] == '1':  # 학생이 줄을 서는 경우
        student = int(command[1])
        favorite = int(command[2])  # 좋아하는 메뉴 번호
        queue.append((student, favorite))  # 큐에 (학생 번호, 좋아하는 메뉴) 저장

    elif command[0] == '2':  # 메뉴 제공
        meal = int(command[1])  # 제공된 메뉴 번호
        if queue:
            student, favorite = queue.popleft()  # 맨 앞의 학생이 식사 시작
            if meal == favorite:
                ate_like.append(student)  # 좋아하는 메뉴 먹음 → A 목록
            else:
                ate_dislike.append(student)  # 좋아하지 않는 메뉴 먹음 → B 목록

# 줄을 섰지만 끝까지 식사를 못 한 학생 찾기
while queue:
    no_food.append(queue.popleft()[0])  # 남아 있는 학생 번호 추가

# 결과를 오름차순으로 정렬
ate_like.sort()
ate_dislike.sort()
no_food.sort()

# 정답 출력 (리스트가 비어있으면 "None" 출력)
print(" ".join(map(str, ate_like)) if ate_like else "None")
print(" ".join(map(str, ate_dislike)) if ate_dislike else "None")
print(" ".join(map(str, no_food)) if no_food else "None")