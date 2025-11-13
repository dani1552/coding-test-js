function solution(arr) {
    let temp = [...arr];  
    let x = 0;          

    while (true) {
        let changed = false;
        let newArr = [];  // 업데이트된 배열

        for (let t of temp) {
            let v = t;  

            if (v >= 50 && v % 2 === 0) {
                v = v / 2;
            } else if (v < 50 && v % 2 === 1) {
                v = (v * 2) + 1;
            }

            if (v !== t) changed = true;
            newArr.push(v);
        }

        if (!changed) return x;

        temp = newArr;
        x++;
    }
}