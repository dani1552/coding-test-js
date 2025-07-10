def solution(num_list):
    answer = 1
    
    for n in num_list:
        if len(num_list) > 10: 
            answer += n
        else:
            answer *= n
        
    if len(num_list) > 10:
        return answer - 1
    else:
        return answer