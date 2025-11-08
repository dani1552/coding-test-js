function solution(n, arr1, arr2) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const combined = arr1[i] | arr2[i];
        const binary = combined.toString(2).padStart(n, "0");

        let row = "";
        for (let ch of binary) {
            if (ch === "1") row += "#";
            else row += " ";
        }

        result.push(row);
    }

    return result;
}