function solution(hp) {
    const general = Math.floor(hp/5);
    const soldier = Math.floor((hp%5)/3);
    const worker = hp % 5 % 3;

    return general + soldier + worker;
}