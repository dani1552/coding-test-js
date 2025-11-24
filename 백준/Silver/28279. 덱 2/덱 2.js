const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
let deque = {};
let front = 0;
let back = 0;

let output = [];
let idx = 1;

for (let i = 0; i < N; i++) {
  const cmd = input[idx++].split(" ");

  switch (cmd[0]) {
    case "1": // push front
      deque[--front] = cmd[1];
      break;

    case "2": // push back
      deque[back++] = cmd[1];
      break;

    case "3": // pop front
      if (front === back) {
        output.push("-1");
      } else {
        output.push(deque[front]);
        delete deque[front++];
      }
      break;

    case "4": // pop back
      if (front === back) {
        output.push("-1");
      } else {
        back--;
        output.push(deque[back]);
        delete deque[back];
      }
      break;

    case "5": // size
      output.push(String(back - front));
      break;

    case "6": // empty
      output.push(front === back ? "1" : "0");
      break;

    case "7": // front
      output.push(front === back ? "-1" : deque[front]);
      break;

    case "8": // back
      output.push(front === back ? "-1" : deque[back - 1]);
      break;
  }
}

console.log(output.join("\n"));
