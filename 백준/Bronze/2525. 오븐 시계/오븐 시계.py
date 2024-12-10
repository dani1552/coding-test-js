hour, minute = map(int, input().split())
cook = int(input())

minute += cook

if minute >= 60:
    hour += minute // 60 
    minute %= 60          

if hour >= 24:
    hour %= 24           

print(hour, minute)