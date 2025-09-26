function solution(clothes) {
    const clothesCount = new Map();
    
    for(const [name, type] of clothes) {
        clothesCount.set(type, (clothesCount.get(type) || 0) + 1);
    }
    let totalCombinations = 1;
    
    console.log(clothesCount.values());
    for(const count of clothesCount.values()) {
        totalCombinations *= (count + 1);
    }
    
    return totalCombinations - 1;
}