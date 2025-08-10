function solution(age) {
  return String(age)
    .split('')                          // ['2','3']
    .map(d => String.fromCharCode(97 + Number(d))) // 97은 'a'의 코드
    .join('');                          // 'cd'
}
