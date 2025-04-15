def solution(my_string, n):
    string = []
    
    for i in my_string:
        string.append(n * i)
        
    return ''.join(string)
        