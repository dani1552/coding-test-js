function solution(numbers, direction) {
  const result = new Array(numbers.length);
  
  if (direction === "right") {
    result[0] = numbers[numbers.length - 1];
    for (let i = 0; i < numbers.length - 1; i++) {
      result[i + 1] = numbers[i];
    }
  } else {
    result[result.length - 1] = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result[i - 1] = numbers[i];
    }
  }
  
  return result;
}
