student = set(range(1,31))
submit_student = set()

for _ in range(28):
    n = int(input())
    submit_student.add(n)

not_submit_student = sorted(student - submit_student)

print(not_submit_student[0])
print(not_submit_student[1])