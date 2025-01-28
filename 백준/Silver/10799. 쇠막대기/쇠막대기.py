word = input()
stack = []
result = 0

for i in range(len(word)):
    if word[i] == '(':
        stack.append('(')
    else:  # word[i] == ')'
        if word[i - 1] == '(':  # 레이저인 경우
            stack.pop()
            result += len(stack)  # 스택의 크기만큼 잘림
        else:  # 막대기의 끝인 경우
            stack.pop()
            result += 1  # 막대기 끝 하나 추가

print(result)