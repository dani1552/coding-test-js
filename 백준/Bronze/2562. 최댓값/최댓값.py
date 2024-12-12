new_list = []

for i in range(9):
    n_list = int(input())
    new_list.append(n_list)

print(max(new_list))
print(new_list.index(max(new_list)) + 1)