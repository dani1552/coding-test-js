function solution(bin1, bin2) {
    const dec = parseInt(bin1, 2) + parseInt(bin2, 2);
    return dec.toString(2);
}