function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        let idx = query[i];

        if (i % 2 === 0) {
            arr = arr.slice(0, idx + 1);
        } else {
            arr = arr.slice(idx);
        }
    }

    return arr;
}