function solution(order) {
  const stack = [];
  let cur = 1;       
  let idx = 0;       
  const n = order.length;

  while (cur <= n) {
    if (cur === order[idx]) {
      idx++;
    } else {
      stack.push(cur);
    }
    cur++;

    while (stack.length && stack[stack.length - 1] === order[idx]) {
      stack.pop();
      idx++;
    }
  }

  return idx;  
}