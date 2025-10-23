function solution(s) {
    let temp = [];
    temp.push(s[0]);
    
    for(let i = 1; i <= s.length; i++) {
        if (temp[temp.length - 1] === s[i]) {
            temp.pop();
        } else {
            temp.push(s[i]);        
        }
    }
    
    return temp.length === 0 ? 1 : 0; 
}