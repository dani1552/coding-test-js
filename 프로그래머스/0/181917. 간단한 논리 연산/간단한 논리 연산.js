function solution(x1, x2, x3, x4) {
    return (x1 || x2) && (x3 || x4);
}

// 아래 화살표: 하나만 T여도 T (||)
// 위 화살표: 둘 다 T여야 T (&&)