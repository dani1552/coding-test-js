const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const [N, M, K] = lines[0].trim().split(' ').map(Number);

let ans = 0;

for (let i = 1; i <= N; i++) {
  const row = lines[i].trim(); 
  let run = 0;

  for (let j = 0; j < M; j++) {
    if (row[j] === '0') {
      run++;
    } else {
      if (run >= K) ans += (run - K + 1);
      run = 0;
    }
  }
  if (run >= K) ans += (run - K + 1);
}

console.log(ans);