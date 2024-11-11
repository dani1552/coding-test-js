def solution(nums):
    # 중복 제거한 값
    unique_types = len(set(nums))
    
    # 최대로 가져갈 수 있는 값
    max_types = len(nums) / 2
    
    return min(unique_types, max_types)