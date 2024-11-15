def solution(numbers, target):
    def dfs(index, current_sum):
        # 모든 숫자를 다 처리한 경우
        if index == len(numbers):
            return 1 if current_sum == target else 0
        
        # 현재 숫자에 대해 +와 -를 각각 붙여서 재귀 호출
        return dfs(index + 1, current_sum + numbers[index]) + dfs(index + 1, current_sum - numbers[index])

    return dfs(0, 0)