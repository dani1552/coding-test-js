function solution(food) {
  let leftSide = "";

  // food 배열의 인덱스 1부터 순회하며 음식의 종류와 개수를 파악
  for (let i = 1; i < food.length; i++) {
    // 한 선수가 먹을 수 있는 음식의 개수
    const count = Math.floor(food[i] / 2);

    // 음식의 종류(인덱스 i)를 개수(count)만큼 문자열에 추가
    leftSide += String(i).repeat(count);
  }

  // 완성된 왼쪽 부분 + 물(0) + 뒤집은 왼쪽 부분을 합쳐 최종 결과 반환
  const rightSide = leftSide.split("").reverse().join("");
  return leftSide + "0" + rightSide;
}