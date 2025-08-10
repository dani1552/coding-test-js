function solution(age) {
  return String(age)
    .split('')                        
    .map(d => String.fromCharCode(97 + Number(d))) 
    .join('');                      
}
