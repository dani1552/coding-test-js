def solution(number, k):
    stack = []
    for num in number:
        # 스택이 비어있지 않고, 제거할 수 있고, 스택의 마지막 값보다 현재 값이 크면 제거
        while stack and k > 0 and stack[-1] < num:
            stack.pop()
            k -= 1
        stack.append(num)
    
    # 아직 제거할 숫자가 남아있다면 뒤에서 제거 (9876 → 7, 6 제거)
    if k > 0:
        stack = stack[:-k]
    
    return ''.join(stack)
