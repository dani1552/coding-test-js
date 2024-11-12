def solution(s):
    count = 0
    
    for char in s:
        if char == '(':
            count += 1
        else:
            count -= 1
        
        # 닫는 괄호로 시작하는 경우
        if count < 0:
            return False
        
    return count == 0
            