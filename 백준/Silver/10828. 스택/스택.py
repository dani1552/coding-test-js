import sys

# 스택 리스트 생성
stack = []

# 입력 개수 받기
n = int(sys.stdin.readline().strip())

# 명령어 처리
for _ in range(n):
    command = sys.stdin.readline().strip().split()
    
    if command[0] == "push":
        stack.append(int(command[1]))  # 정수를 스택에 추가
    elif command[0] == "pop":
        print(stack.pop() if stack else -1)  # 스택이 비어있으면 -1 출력
    elif command[0] == "size":
        print(len(stack))  # 스택 크기 출력
    elif command[0] == "empty":
        print(1 if not stack else 0)  # 스택이 비어있으면 1, 아니면 0 출력
    elif command[0] == "top":
        print(stack[-1] if stack else -1)  # 스택의 최상단 출력