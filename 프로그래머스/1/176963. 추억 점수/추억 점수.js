function solution(name, yearning, photo) {
    const scores = {};
    for (let i = 0; i < name.length; i++) {
        scores[name[i]] = yearning[i];
    }
    
    console.log(scores); // { may: 5, kein: 10, kain: 1, radi: 3 }
    
    const result = [];
    for(let i = 0; i < photo.length; i++) {
        let total = 0;
        
        for(let j = 0; j < photo[i].length; j++) {
            const person = photo[i][j];
            if (scores[person]) {
                total += scores[person];
            }
        }
        result.push(total);
    }
    
    return result;
}