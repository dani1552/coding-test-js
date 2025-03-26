function solution(participant, completion) {
    const map = {}
    
    // 마라톤 경기에 참여한 선수의 이름 등장 횟수 저장
    for (let name of participant) {
        if (map[name]) {
            map[name]++;
        } else {
            map[name] = 1;
        }
    }
    
    // 완주한 사람 이름을 해시맵에서 차감
    for (let name of completion) {
        map[name]--;
    }
    
    // 값이 1인 사람(완주하지 못한 사람)을 찾아서 반환
    for (let name in map) {
        if (map[name] > 0) {
            return name;
        }
    }
}