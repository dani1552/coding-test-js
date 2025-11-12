function solution(my_string, s, e) {
    const origin = my_string.slice(s, e + 1);
    const reversed = origin.split("").reverse().join("");
    
    return my_string.slice(0, s) + reversed + my_string.slice(e + 1);
}
