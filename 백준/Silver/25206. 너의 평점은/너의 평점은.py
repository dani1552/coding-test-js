grade_to_gpa = {
    "A+": 4.5, "A0": 4.0,
    "B+": 3.5, "B0": 3.0,
    "C+": 2.5, "C0": 2.0,
    "D+": 1.5, "D0": 1.0,
    "F": 0.0
}

total_score = 0  # 가중합 (학점 × GPA)
total_credits = 0  # 총 학점

for _ in range(20):
    a, b, c = input().split()  
    b = float(b) 

    if c != "P":  # P인 과목은 제외 (예외 처리)
        total_score += b * grade_to_gpa[c]
        total_credits += b

if total_credits == 0:  # 학점이 없는 경우 (예외 처리)
    print("0.000000")
else:
    print("{:.6f}".format(total_score / total_credits))