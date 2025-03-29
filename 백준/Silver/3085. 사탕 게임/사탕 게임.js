function solution(input) {
  const N = parseInt(input[0]);
  const board = input.slice(1).map((row) => row.split(""));
  let maxCandy = 0;

  function checkMaxCandy() {
    let max = 0;

    // 행 체크
    for (let i = 0; i < N; i++) {
      let count = 1;
      for (let j = 1; j < N; j++) {
        if (board[i][j] === board[i][j - 1]) {
          count++;
        } else {
          count = 1;
        }
        max = Math.max(max, count);
      }
    }

    // 열 체크
    for (let j = 0; j < N; j++) {
      let count = 1;
      for (let i = 1; i < N; i++) {
        if (board[i][j] === board[i - 1][j]) {
          count++;
        } else {
          count = 1;
        }
        max = Math.max(max, count);
      }
    }

    return max;
  }

  function swap(x1, y1, x2, y2) {
    const temp = board[x1][y1];
    board[x1][y1] = board[x2][y2];
    board[x2][y2] = temp;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        swap(i, j, i, j + 1);
        maxCandy = Math.max(maxCandy, checkMaxCandy());
        swap(i, j, i, j + 1);
      }

      if (i + 1 < N) {
        swap(i, j, i + 1, j);
        maxCandy = Math.max(maxCandy, checkMaxCandy());
        swap(i, j, i + 1, j);
      }
    }
  }

  console.log(maxCandy);
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
solution(input);