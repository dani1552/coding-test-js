function solution(order) {
    let total = 0;
    
    for (let o of order) {
        if (o.includes("americano") || o.includes("anything")) {
            total += 4500;
        } else {
            total += 5000;
        }
    }
    
    return total;
}