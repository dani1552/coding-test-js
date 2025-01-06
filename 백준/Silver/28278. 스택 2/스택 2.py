import sys  # sys 모듈: 표준 입력과 출력에 관련된 기능 사용
input_data = sys.stdin.read().splitlines()  # 모든 입력을 한 번에 읽어서 줄 단위로 나눔

n = int(input_data[0])    # 첫 번째 줄: 명령어 개수 N을 정수로 변환
commands = input_data[1:] # 두 번째 줄부터 끝까지: 명령어 리스트

stack = []

for command in commands:
    inputs = command.split()    # 명령어를 공백으로 나눠서 리스트로 변환
    a = int(inputs[0])

    if a == 1:
        b = int(inputs[1])  
        stack.append(b)
    elif a == 2:
        if stack:
            print(stack[-1])
            stack.pop()
        else:
            print(-1)
    elif a == 3:
        print(len(stack))
    elif a == 4:
        if stack:
            print(0)
        else:
            print(1)
    elif a == 5:
        if stack:
            print(stack[-1])
        else:
            print(-1)