function solution(participant, completion) {
    const participantCount = new Map();
    
    for(let name of participant) {
        const count = participantCount.get(name) || 0;
        participantCount.set(name, count + 1);
    }
    
    for(let name of completion) {
        participantCount.set(name, participantCount.get(name) - 1);
    }
    
    for(let [name, count] of participantCount) {
        if(count >= 1) {
            return name;
        }
    }
    
    return '';
}