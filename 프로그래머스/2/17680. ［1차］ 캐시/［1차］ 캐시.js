function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  if (cacheSize === 0) return cities.length * 5;

  for (let city of cities) {
    city = city.toLowerCase();

    // HIT
    if (cache.includes(city)) {
      time += 1;
      cache = cache.filter(c => c !== city);
      cache.push(city);
    }
    // MISS
    else {
      time += 5;
      if (cache.length >= cacheSize) cache.shift();
      cache.push(city);
    }
  }
  return time;
}