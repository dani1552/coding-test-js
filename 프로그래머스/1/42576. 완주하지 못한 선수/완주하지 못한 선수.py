def solution(participant, completion):
    participant.sort()
    completion.sort()
    
    # 참가자와 완주자 정렬 후 차이가 나는 첫 번째 이름을 반환
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i]  
    
    # 마지막 참가자가 완주하지 못한 경우
    return participant[-1]