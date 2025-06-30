a = int(input())
b = int(input())
c = int(input())

multiple = list(str(a * b * c))
nums = [0 for i in range(10)]

for i in multiple:
    nums[int(i)] += 1

for count in nums:
    print(count)