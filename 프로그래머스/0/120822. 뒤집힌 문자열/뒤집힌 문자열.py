def solution(my_string):
    queue = []
    for char in my_string:
        queue.append(char)
    
    queue.reverse()
    return ''.join(queue)