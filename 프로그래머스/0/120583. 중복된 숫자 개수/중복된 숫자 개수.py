def solution(array, n):
    count = 0
    
    for arr in array:
        if arr == n:
            count += 1
            
    return count