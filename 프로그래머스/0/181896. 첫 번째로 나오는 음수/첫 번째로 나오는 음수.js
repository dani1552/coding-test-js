function solution(num_list) {
    // for (let n of num_list) {
    //     if (n < 0) return num_list.indexOf(n);
    // }
    // return -1;
    
    return num_list.findIndex(n => n < 0);
}