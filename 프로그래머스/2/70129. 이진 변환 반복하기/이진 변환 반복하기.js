function solution(s) { 
    let count = 0;
    let removeZero = 0;
    
    while(s !== "1") {
        let zeroCount = s.split("").map(Number).reduce((acc, el) => acc + (el === 0 ? 1 : 0), 0);
        removeZero += zeroCount;
        
        let oneCount = s.length - zeroCount;
        
        s = oneCount.toString(2);
        count++;
    }
    return [count, removeZero];
    
}
