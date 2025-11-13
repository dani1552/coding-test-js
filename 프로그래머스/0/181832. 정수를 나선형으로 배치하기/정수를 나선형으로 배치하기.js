function solution(n) {
    let result = Array.from({ length: n }, () => Array(n).fill(0));

    let count = 1;

    // 방향: 오른 → 아래 → 왼 → 위
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    // 시작 위치
    let x = 0, y = 0, dir = 0;

    while (count <= n * n) {
        result[x][y] = count;
        count++;

        // 다음 위치 계산
        let nx = x + dx[dir];
        let ny = y + dy[dir];

        // 방향 전환 조건: 배열 밖이거나 이미 값이 있음
        if (nx < 0 || ny < 0 || nx >= n || ny >= n || result[nx][ny] !== 0) {
            dir = (dir + 1) % 4; // 방향 전환
            nx = x + dx[dir];
            ny = y + dy[dir];
        }

        // 이동
        x = nx;
        y = ny;
    }

    return result;
}