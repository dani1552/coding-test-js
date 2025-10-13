function solution(array) {
    let arr = array.join("");
    return arr.split("").filter(e => e === "7").length;
}