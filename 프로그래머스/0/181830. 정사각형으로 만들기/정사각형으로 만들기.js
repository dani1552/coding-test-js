function solution(arr) {
    const rows = arr.length;        
    const cols = arr[0].length;     

    if (rows > cols) {
        return arr.map(row => [...row, ...Array(rows - cols).fill(0)]);
    }

    if (cols > rows) {
        const zeroRow = Array(cols).fill(0);
        const extraRows = Array(cols - rows).fill(zeroRow);
        return [...arr, ...extraRows];
    }

    return arr;
}