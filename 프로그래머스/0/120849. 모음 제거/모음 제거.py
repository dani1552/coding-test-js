def solution(my_string):
    new_string = []
    
    for n in my_string:
        if n == 'a' or n == 'e' or n == 'i' or n == 'o' or n == 'u':
            continue
        else:
            new_string.append(n)
            
    return ''.join(new_string)