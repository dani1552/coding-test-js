function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for(let b of babbling) {
        let prev = "";
        let temp = b;
        
        for(let w of word) {
            temp = temp.replaceAll(w.repeat(2), "X");
        }
        
        for (let w of word) {
            temp = temp.replaceAll(w, " ");
        }
        
        if (temp.trim() === "") count++;
    }
    
    return count;
}