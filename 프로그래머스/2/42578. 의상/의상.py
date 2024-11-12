def solution(clothes):
    clothes_dict = {}

    # 의상 종류별로 개수 세기
    for name, kind in clothes:
        if kind in clothes_dict:
            clothes_dict[kind] += 1
        else:
            clothes_dict[kind] = 1

    # 경우의 수 계산
    answer = 1
    for count in clothes_dict.values():
        answer *= (count + 1) # count + 1 → 입지 않는 경우 포함

    # 아무것도 입지 않는 경우 제외
    return answer - 1