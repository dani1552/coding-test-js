def solution(s):
    count_p = 0
    count_y = 0
    
    for char in s:
        if char == 'p' or char == 'P':
            count_p = count_p + 1
        elif char == 'y' or char == 'Y':
            count_y = count_y + 1
            
    if count_p == count_y:
        return True
    else:
        return False