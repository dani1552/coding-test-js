const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];
const K = input[idx++];

const countries = []; // 국가별 메달 정보 저장

for (let i = 0; i < N; i++) {
  const id = input[idx++];
  const gold = input[idx++];
  const silver = input[idx++];
  const bronze = input[idx++];

  countries.push({
    id,
    gold,
    silver,
    bronze,
  });
}

// K국 정보 찾기
let kg = 0,
  ks = 0,
  kb = 0;

for (let i = 0; i < N; i++) {
  if (countries[i].id === K) {
    kg = countries[i].gold;
    ks = countries[i].silver;
    kb = countries[i].bronze;
    break;
  }
}

// K보다 잘한 나라 수 세기
let better = 0;

for (let i = 0; i < N; i++) {
  const { gold, silver, bronze } = countries[i];

  if (
    gold > kg ||
    (gold === kg && silver > ks) ||
    (gold === kg && silver === ks && bronze > kb)
  ) {
    better++;
  }
}

console.log(better + 1);
