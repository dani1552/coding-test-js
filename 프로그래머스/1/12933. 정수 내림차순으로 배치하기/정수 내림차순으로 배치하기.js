function solution(n) {
  let digits = n.toString().split('');
  
  digits.sort((a, b) => b - a);
  return parseInt(digits.join(''));
}
