function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);

    function dfs(i) {
        visited[i] = true;

        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;

            dfs(i);
        }
    }

    return answer;
}