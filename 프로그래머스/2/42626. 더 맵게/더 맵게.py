import heapq

def solution(scoville, K):
    heapq.heapify(scoville)  # 최소 힙 생성
    mix_count = 0
    
    while len(scoville) > 1:
        # 최소값이 K 이상이면 종료
        if scoville[0] >= K:
            return mix_count

        # 가장 맵지 않은 두 개의 음식 섞기
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        new_food = first + (second * 2)
        heapq.heappush(scoville, new_food)

        mix_count += 1

    # 마지막 원소가 K 이상이면 성공, 아니면 실패(-1 반환)
    return mix_count if scoville[0] >= K else -1