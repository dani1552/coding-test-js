function solution(my_string, queries) {
    let result = [...my_string];
    
    for (let [s, e] of queries) {
        const reversed = result.slice(s, e + 1).reverse();
        
        for (let i = s; i <= e; i++) {
            result[i] = reversed[i - s];
        }
    }
    
    return result.join("");
}