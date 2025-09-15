function solution(d, budget) {
    let sorted = d.sort((a,b) => a-b);
    return sorted.reduce((count, currentCost) => {
        budget -= currentCost;
        
        if(budget >= 0) {
            count++;
        }
        return count;
    }, 0);
}