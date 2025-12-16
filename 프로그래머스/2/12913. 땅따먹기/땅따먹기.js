function solution(land) {
  let prev = [...land[0]];

  for (let i = 1; i < land.length; i++) {
    const curr = Array(4).fill(0);

    for (let j = 0; j < 4; j++) {
      curr[j] =
        land[i][j] +
        Math.max(
          ...prev.filter((_, idx) => idx !== j)
        );
    }

    prev = curr; 
  }

  return Math.max(...prev);
}