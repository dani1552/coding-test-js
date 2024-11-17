def solution(n):
    answer = []
    
    for arr in range(n):
        if arr % 2 == 0:
            answer.append('수')
        else:
            answer.append('박')
    
    return ''.join(answer);
            