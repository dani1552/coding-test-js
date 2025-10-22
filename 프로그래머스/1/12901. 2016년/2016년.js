function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    let totalDays = b;
    for(let i=0; i<a-1; i++) {
        totalDays += days[i];
    }
    
    return week[(totalDays - 1) % 7];
}