function solution(my_string, is_suffix) {
    var answer = 0;
    const newStr = my_string.slice(my_string.length-is_suffix.length);
    return newStr === is_suffix?1:0;
}