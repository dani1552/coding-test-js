word = input()
alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = []

for char in alphabet:
    result.append(word.find(char))  # find 함수는 인덱스 반환, 찾는 값이 없으면 -1 반환

print(' '.join(map(str, result)))