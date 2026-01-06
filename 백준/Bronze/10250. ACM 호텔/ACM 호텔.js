const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];

for (let i = 1; i <= n; i++) {
  const [h, w, t] = input[i].split(" ").map(Number);

  const floor = t % h === 0 ? h : t % h;
  const room = Math.ceil(t / h);

  if (room < 10) console.log(floor + "0" + room);
  else console.log(floor + "" + room);
}

// 101
// 201
// 301
// 401
// 501
// 601
// 102
// 202
// 302
// 402

// abc -> bc는 c / h로 나눴을때 몫 (반올림), a는 c % h의 나머지
