def solution(todo_list, finished):
    done_list = []
    
    for lists, done in zip(todo_list, finished):
        if done == False:
            done_list.append(lists)
        
    return done_list