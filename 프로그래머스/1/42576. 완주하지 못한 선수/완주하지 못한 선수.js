function solution(participant, completion) {
    let nocomplete = [];
    
    for(let name of participant) {
        if(!completion.includes(name)) {
            nocomplete.push(name);
        }
    }
    
    return nocomplete;
}