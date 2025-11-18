function solution(s) {
  const rotate = [];
  for (let i = 0; i < s.length; i++) {
    rotate.push(s.slice(i) + s.slice(0, i));
  }

  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let answer = 0;

  for (const r of rotate) {
    const stack = [];
    let ok = true;

    for (let j = 0; j < r.length; j++) {
      const ch = r[j];

      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(ch);
      } else {
        if (stack.length === 0) {
          ok = false;
          break;
        }
        const top = stack.pop();
        if (top !== pairs[ch]) {
          ok = false;
          break;
        }
      }
    }

    if (ok && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}