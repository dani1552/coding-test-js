# 입력 받기
N, M = map(int, input().split())  # 수업 수(N), 기준 수강 횟수(M)

# 학생들의 수업 참여 횟수를 저장할 딕셔너리
student_count = {}

# 각 수업 정보를 입력받고 처리
for _ in range(N):
    K = int(input())  # 해당 수업의 수강생 수
    students = input().split()  # 수강생 학번 리스트
    for student in students:
        if student in student_count:
            student_count[student] += 1  # 기존 값 증가
        else:
            student_count[student] = 1  # 처음 등장 시 초기화

# M회 이상의 수업을 들은 학생 수 계산
result = 0
for count in student_count.values():
    if count >= M:
        result += 1

# 결과 출력
print(result)