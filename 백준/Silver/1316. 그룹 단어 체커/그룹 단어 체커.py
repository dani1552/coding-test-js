n = int(input())
group_word_count = 0

for _ in range(n):
    word = input()
    seen = set()
    prev_char = None
    is_group_word = True

    for char in word:
        if prev_char != char:
            if char in seen:
                is_group_word = False
                break
            seen.add(char)
        prev_char = char
    
    if is_group_word:
        group_word_count += 1

print(group_word_count)