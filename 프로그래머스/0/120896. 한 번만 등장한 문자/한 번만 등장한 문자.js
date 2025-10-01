function solution(s) {
  const count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  const uniqueChars = Object.keys(count).filter(char => count[char] === 1);
  
    return uniqueChars.sort().join('');
}