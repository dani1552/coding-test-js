function solution(my_string) {
    let sum = 0;
    let numStr = "";
    
    for(let i = 0; i<my_string.length; i++) {
        const ch = my_string[i];
        
        if(ch >= '0' && ch <= '9') {
            numStr += ch;
        } else {
            // 숫자가 아닐 경우
            if (numStr !== "") {
                sum += Number(numStr);
                numStr = "";
            }
        }
    }
    
    // 마지막 문자가 숫자일 경우
    if (numStr !== "") {
        sum += Number(numStr);
    }
    
    return sum;
}