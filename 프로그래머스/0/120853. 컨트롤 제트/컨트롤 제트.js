function solution(s) {
    const arr = s.split(' ');
    
    const stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        if (item === "Z") {
            stack.pop();
        } 
        else {
            stack.push(Number(item));
        }
    }
    
    const answer = stack.reduce((acc, cur) => acc + cur, 0);
    
    return answer;
}