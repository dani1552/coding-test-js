def solution(array, height):
    count = 0
    for arr in array:
        if arr > height:
            count += 1;
    return count;