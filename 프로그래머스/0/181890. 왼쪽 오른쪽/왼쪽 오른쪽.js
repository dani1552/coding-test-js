function solution(str_list) {
    const lIndex = str_list.indexOf("l");
    const rIndex = str_list.indexOf("r");

    // 둘 다 없다면 빈 배열
    if (lIndex === -1 && rIndex === -1) return [];

    // l이 먼저
    if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
        return str_list.slice(0, lIndex);
    }

    // r이 먼저
    if (rIndex !== -1 && (lIndex === -1 || rIndex < lIndex)) {
        return str_list.slice(rIndex + 1);
    }
}