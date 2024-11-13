def solution(sizes):
    max_width = 0
    max_height = 0

    for size in sizes:
        # 가로와 세로 중 더 큰 값을 가로로, 더 작은 값을 세로로 회전
        w, h = max(size), min(size)
        
        # 최대 가로와 최대 세로 길이를 업데이트
        max_width = max(max_width, w)
        max_height = max(max_height, h)

    # 지갑 크기 계산
    return max_width * max_height