function solution(polynomial) {
    let arr = polynomial.split(" + ");
    console.log('arr', arr);
    
    let xNum = 0;
    let normalNum = 0;
    
    for(let e of arr) {
        if (e.includes("x")) {
            const coef = e.replace("x", "") || "1"; 
            xNum += Number(coef);  
        } else {
            normalNum += Number(e);
        }
    }
    
    if (xNum !== 0 && normalNum !== 0) {
        return `${xNum === 1 ? "x" : xNum + "x"} + ${normalNum}`;
    } else if (xNum !== 0) {
        return `${xNum === 1 ? "x" : xNum + "x"}`;
    } else {
        return `${normalNum}`;
    }
}