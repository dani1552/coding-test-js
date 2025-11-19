function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    const dict = [];
    
    function dfs(current) {
        if (current.length > 5) return;
        if (current.length > 0) dict.push(current);
        
        for (let v of vowels) {
            dfs(current + v);
        }
    }
    
    dfs("");
    
    return dict.indexOf(word) + 1;
}