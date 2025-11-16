function solution(n, lost, reserve) {
    lost.sort();
    reserve.sort();
    
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));
    
    // 체육복 빌려주기 
    let answer = n - realLost.length; 
    
    realLost.forEach((l) => {
        // 앞 번호
        if (realReserve.includes(l - 1)) {
            realReserve.splice(realReserve.indexOf(l - 1), 1);
            answer++;
        }
        // 뒷 번호
        else if (realReserve.includes(l + 1)) {
            realReserve.splice(realReserve.indexOf(l + 1), 1);
            answer++;
        }
    });
    
    return answer;
}