function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);

    function dfs(fatigue, count) {
        // 현재까지 탐험한 던전 수 업데이트
        answer = Math.max(answer, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [minFatigue, useFatigue] = dungeons[i];

            // 방문하지 않았고, 최소 피로도 이상이면 탐험 가능
            if (!visited[i] && fatigue >= minFatigue) {
                visited[i] = true;
                dfs(fatigue - useFatigue, count + 1);
                visited[i] = false; // 백트래킹
            }
        }
    }

    dfs(k, 0);
    return answer;
}