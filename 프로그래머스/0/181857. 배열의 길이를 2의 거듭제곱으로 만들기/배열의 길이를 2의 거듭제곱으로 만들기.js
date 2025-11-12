function solution(arr) {
  let len = arr.length;

  let target = 1;
  while (target < len) {
    target *= 2;
  }

  while (arr.length < target) {
    arr.push(0);
  }

  return arr;
}