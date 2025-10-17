function solution(quiz) {
  const result = []; // 결과를 담을 배열

  for (let q of quiz) {
    // "3 - 4 = -3" === ["3", "-", "4", "=", "-3"]
    const arr = q.split(" ");
    const X = Number(arr[0]);
    const op = arr[1];
    const Y = Number(arr[2]);
    const Z = Number(arr[4]);

    // 계산 결과 구하기
    let calc = 0;
    if (op === "+") calc = X + Y;
    else calc = X - Y;

    // 비교 후 O/X 추가
    result.push(calc === Z ? "O" : "X");
  }

  return result;
}