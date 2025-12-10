function solution(dirs) {
    const visited = new Set();
    let x = 0, y = 0;
    
    const move = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    };
    
    let count = 0;
    
    for (let dir of dirs) {
        const [dx, dy] = move[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        const path = `${x},${y}:${nx},${ny}`;
        const reversePath = `${nx},${ny}:${x},${y}`;
        
        if (!visited.has(path) && !visited.has(reversePath)) {
            visited.add(path);
            visited.add(reversePath);
            count++;
        }
        
        x = nx;
        y = ny;
    }
    
    return count;
}