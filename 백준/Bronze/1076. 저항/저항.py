color_value = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
}

first_color = input().strip()
second_color = input().strip()
third_color = input().strip()

first_digit = color_value[first_color]
second_digit = color_value[second_color]
multiplier = 10 ** color_value[third_color]

resistance = (first_digit * 10 + second_digit) * multiplier

print(resistance)