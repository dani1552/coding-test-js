from collections import defaultdict

# 입력 받기
N, M = map(int, input().split())

# 학생들의 수업 참여 횟수를 저장할 딕셔너리
student_count = defaultdict(int)

for _ in range(N):
    K = int(input())  # 수강생 수
    students = input().split()  # 학번 리스트
    for student in students:
        student_count[student] += 1

# M개 이상의 수업을 들은 학생 수 계산
result = sum(1 for count in student_count.values() if count >= M)

# 결과 출력
print(result)