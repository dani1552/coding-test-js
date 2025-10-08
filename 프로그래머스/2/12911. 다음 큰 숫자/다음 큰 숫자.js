function solution(n) {
  const countOnes = (num) => num.toString(2).split('1').length - 1;

  const targetCount = countOnes(n);
  let next = n + 1;

  while (true) {
    if (countOnes(next) === targetCount) return next;
    next++;
  }
}