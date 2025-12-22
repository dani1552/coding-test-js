function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);
  let bridgeWeight = 0;

  while (truck_weights.length > 0 || bridgeWeight > 0) {
    time++;

    // 다리에서 트럭 한 칸 이동
    const out = bridge.shift();
    bridgeWeight -= out;

    // 새 트럭 진입 가능하면 푸시
    if (truck_weights.length > 0) {
      const next = truck_weights[0];

      if (bridgeWeight + next <= weight) {
        bridge.push(next);
        bridgeWeight += next;
        truck_weights.shift();
      } else {
        bridge.push(0);
      }
    } else {
      bridge.push(0);
    }
  }

  return time;
}