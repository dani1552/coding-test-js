const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, score, P] = input[0].split(" ").map(Number);
const scores = N > 0 ? input[1].split(" ").map(Number) : [];

function getRank(N, P, score, scores) {
  if (N === 0) return 1;

  let rank = 1;

  for (let i = 0; i < N; i++) {
    if (score < scores[i]) {
      rank++;
    } else {
      break;
    }
  }

  if (N === P && score <= scores[N - 1]) return -1;
  return rank;
}

console.log(getRank(N, P, score, scores));
