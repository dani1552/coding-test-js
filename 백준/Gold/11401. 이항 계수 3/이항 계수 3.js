const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const N = input[0];
const K = input[1];

const MOD = 1000000007n;

function powMod(a, e) {
  a %= MOD;
  let result = 1n;
  while (e > 0n) {
    if (e & 1n) result = (result * a) % MOD;
    a = (a * a) % MOD;
    e >>= 1n;
  }
  return result;
}

const fact = new Array(N + 1);
const invFact = new Array(N + 1);

// fact[i] = i! mod MOD
fact[0] = 1n;
for (let i = 1; i <= N; i++) {
  fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
}

// invFact[N] = (fact[N])^(MOD-2) mod MOD
invFact[N] = powMod(fact[N], MOD - 2n);

// invFact[i-1] = invFact[i] * i mod MOD 로 채우기
for (let i = N; i > 0; i--) {
  invFact[i - 1] = (invFact[i] * BigInt(i)) % MOD;
}

// C(N, K) = fact[N] * invFact[K] * invFact[N-K] mod MOD
let answer = fact[N];
answer = (answer * invFact[K]) % MOD;
answer = (answer * invFact[N - K]) % MOD;

console.log(String(answer));