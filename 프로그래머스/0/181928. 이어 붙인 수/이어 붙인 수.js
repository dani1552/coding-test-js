function solution(num_list) {
    let even = '';
    let odd = '';
    
    for (let i of num_list) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }
    console.log('even: ', even);
    console.log('odd: ', odd);
    
    return Number(even) + Number(odd);
}