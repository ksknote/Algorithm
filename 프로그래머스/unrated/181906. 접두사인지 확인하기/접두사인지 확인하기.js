function solution(my_string, is_prefix) {
    var answer = 0;
    const arr = my_string.split(is_prefix);
    return arr[0]===""?1:0;
}