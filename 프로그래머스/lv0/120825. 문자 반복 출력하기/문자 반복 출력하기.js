function solution(my_string, n) {
    var answer = '';
    var arr = my_string.split("");
    var arr2 = [];
    for (text of arr){
        arr2.push(text.repeat(n));
    }
    answer = arr2.join("");
    return answer;
}