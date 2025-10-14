function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    
    let success = 0;
    let wrong = 0;
    let fail = 0;
    
    for(let e of db) {
        if(e[0] === id && e[1] === pw) {
            success += 1;
        } else if(e[0] === id && !(e[1] === pw)) {
            wrong += 1;
        } else {
            fail += 1;
        }
    } 
    
    return success ? "login" : wrong ? "wrong pw" : "fail";
}
