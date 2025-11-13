function solution(n, slicer, num_list) {
    const a = slicer[0];
    const b = slicer[1];
    const c = slicer[2];
    
    if (n === 1) {
        return num_list.slice(0, b + 1);
    } else if (n === 2) {
        return num_list.slice(a);
    } else if (n === 3) {
        return num_list.slice(a, b + 1);
    } else if (n === 4) {
        let temp = [];
        for (let i = a; i <= b; i += c) {
            temp.push(num_list[i]);
        }
        
        return temp;
    }
}