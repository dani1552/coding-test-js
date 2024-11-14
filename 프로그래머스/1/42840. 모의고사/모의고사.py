def solution(answers):
    pattern1 = [1, 2, 3, 4, 5]
    pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    # 각 수포자의 맞춘 문제 개수를 저장할 리스트
    scores = [0, 0, 0]

    # 주어진 답안 `answers`를 순서대로 확인하면서 각 수포자의 정답과 비교
    for i in range(len(answers)):
        answer = answers[i]  # 현재 문제의 정답

        # 수포자의 정답 패턴과 비교
        if answer == pattern1[i % len(pattern1)]: 
            scores[0] += 1 

        if answer == pattern2[i % len(pattern2)]:
            scores[1] += 1

        if answer == pattern3[i % len(pattern3)]:
            scores[2] += 1 

    # 가장 높은 점수를 찾고, 그 점수를 받은 수포자 번호를 리스트로 만듦
    max_score = max(scores)
    result = []
    for i in range(len(scores)):
        if scores[i] == max_score:  # 최고 점수를 받은 수포자만 추가
            result.append(i + 1)  # 수포자 번호는 1번부터 시작하므로 +1 

    return result