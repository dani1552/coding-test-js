function solution(chicken) {
  let service = 0; // 받은 서비스 치킨 수
  let coupon = chicken; // 현재 쿠폰 수

  while (coupon >= 10) {
    const newChicken = Math.floor(coupon / 10); // 새로 받을 치킨
    service += newChicken; // 서비스 치킨 추가
    coupon = newChicken + (coupon % 10); // 남은 쿠폰 + 새 치킨 쿠폰
  }

  return service;
}