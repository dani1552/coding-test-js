alphabet = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}

n = int(input())
word = input()
M = 1234567891
r = 31

hash_value = 0
r_pow = 1  # r^i를 저장하는 변수

for char in word:
    hash_value += (alphabet[char] * r_pow) % M
    r_pow = (r_pow * r) % M  # r^i를 계속 모듈로 연산
    hash_value %= M  # 결과도 모듈로 연산

print(hash_value)