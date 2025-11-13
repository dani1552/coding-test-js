function solution(arr) {
    let index = [];
    
    arr.forEach((v, i) => {
        if (v === 2) index.push(i);
    });
        
    if (index.length === 0) {
        return [-1];
    } else if (index.length === 1) {
        return [2];
    } else {
        return arr.slice(index[0], index[index.length - 1] + 1);
    }
}