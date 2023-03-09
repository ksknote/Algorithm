function solution(array, n) {
    var answer = 0;
    for (num of array){
        if (num === n){answer += 1}
    }
    return answer;
}