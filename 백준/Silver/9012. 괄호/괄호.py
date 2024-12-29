def vps(str):
    stack = []
    for char in str:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if stack:
                stack.pop() 
            else:
                return "NO"
    return "YES" if not stack else "NO"
                

T = int(input()) 
result = []

for _ in range(T):
    s = input()
    result.append(vps(s))

print("\n".join(result))