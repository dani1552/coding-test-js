function solution(numbers, target) {
    const length = numbers.length;
    let answer = 0;
    
    function dfs(index, currentSum) {
        if(index === length) {
            if(currentSum === target) {
                answer++;
            }
            return;
        }
        
        const nextIndex = index + 1;
        const number = numbers[index];
 
        dfs(nextIndex, currentSum + number);
        dfs(nextIndex, currentSum - number);
    }
    
    dfs(0,0);
    
    return answer;
}