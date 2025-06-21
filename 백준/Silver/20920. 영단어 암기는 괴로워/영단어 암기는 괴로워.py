import sys
input = sys.stdin.readline

n, m = map(int, input().split())
word_count = {}

for _ in range(n):
    word = input().strip()
    if len(word) >= m:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1

def sort_key(item):
    word, count = item
    return (-count, -len(word), word)

sorted_words = sorted(word_count.items(), key=sort_key)

for word, _ in sorted_words:
    print(word)