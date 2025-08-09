function solution(my_string) {
    let result = '';
    
    for(let word of my_string) {
        if (word === word.toUpperCase()) {
            result += word.toLowerCase();
        } else {
            result += word.toUpperCase();
        }
    }
    
    return result;
}