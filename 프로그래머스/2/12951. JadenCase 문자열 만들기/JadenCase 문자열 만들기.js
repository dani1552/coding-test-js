function solution(s) {
    let split = s.split(" ");
     // 〉	[ '3people', 'unFollowed', 'me' ]
    
    for(let i = 0; i<split.length; i++) {
     split[i] = split[i].substr(0,1).toUpperCase() + split[i].substr(1).toLowerCase();
    }
    
    return split.join(" ");
}