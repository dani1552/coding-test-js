function solution(num, k) {
    const str = String(num);
    const find = str.indexOf(String(k));
    return find === -1 ? -1 : find + 1;
}