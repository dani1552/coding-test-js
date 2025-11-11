function solution(num_list, n) {
    let temp = [];
    for (let i = 0; i < num_list.length; i += n) {
        temp.push(num_list[i]);
    }
    
    return temp;
}