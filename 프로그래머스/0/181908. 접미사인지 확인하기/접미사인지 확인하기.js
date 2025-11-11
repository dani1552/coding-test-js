function solution(my_string, is_suffix) {
    let temp = [];
    
    for (let i = 0; i <= my_string.length; i++) {
        temp.push(my_string.slice(i));
    }
    
    return +temp.includes(is_suffix);
}