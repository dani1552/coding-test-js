function solution(operations) {
    let temp = [];
    
    for (let o of operations) {
        if (o.split(" ")[0] === 'I') {
            temp.push(Number(o.split(" ")[1]));
        } else {
            
            if (o.split(" ")[1] === '1') {
               temp = temp.sort((a, b) => b - a);
                temp.shift();
            } else {
               temp = temp.sort((a, b) => a - b);
                temp.shift();
            }
        }
    }
    
    console.log(temp);
    return temp.length === 0 ? [0,0] : [Math.max(...temp), Math.min(...temp)];
}