function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = []; // 인덱스 저장 스택

  for (let i = numbers.length - 1; i >= 0; i--) {
    // 스택의 top이 현재 수보다 작으면 제거
    while (stack.length && stack[stack.length - 1] <= numbers[i]) {
      stack.pop();
    }

    // 스택에 남은 top이 뒷 큰수
    if (stack.length) result[i] = stack[stack.length - 1];

    // 현재 숫자를 스택에 추가
    stack.push(numbers[i]);
  }

  return result;
}