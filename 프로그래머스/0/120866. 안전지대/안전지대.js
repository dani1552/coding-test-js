function solution(board) {
    const n = board.length;
    const danger = Array.from({ length: n }, () => Array(n).fill(0));
    
    const dx = [-1,-1,-1,0,0,1,1,1];
    const dy = [-1,0,1,-1,1,-1,0,1];
    
    for(let x = 0; x < n; x++) {
        for(let y = 0; y < n; y++) {
            if(board[x][y] === 1) {
                for (let i = 0; i < 8; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    
                    if(nx >= 0 && ny >= 0 && nx < n && ny < n) {
                        danger[nx][ny] = 1;
                    }
                }
                danger[x][y] = 1;
            }
        }
    }
    
    let safeCount = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (danger[x][y] === 0) safeCount++;
        }
    }
    
    return safeCount;
}