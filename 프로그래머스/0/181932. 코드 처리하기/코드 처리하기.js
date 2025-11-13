function solution(code) {
    let ret = "";
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        const ch = code[i];

        if (ch === "1") {
            mode = 1 - mode;   
            continue;
        }

        if (mode === 0 && i % 2 === 0) {
            ret += ch;
        } else if (mode === 1 && i % 2 === 1) {
            ret += ch;
        }
    }

    return ret === "" ? "EMPTY" : ret;
}