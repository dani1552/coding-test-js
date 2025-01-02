croatia_alphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

word = input()

for alphabet in croatia_alphabets:
    word = word.replace(alphabet, "*")  # 크로아티아 알파벳을 "*"로 대체

print(len(word))