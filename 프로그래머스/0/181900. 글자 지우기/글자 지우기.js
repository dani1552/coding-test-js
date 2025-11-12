function solution(my_string, indices) {
    indices.sort((a, b) => a - b);
    
    const arr = my_string.split('');
    indices.forEach(i => arr[i] = '');
    return arr.join('');
}

