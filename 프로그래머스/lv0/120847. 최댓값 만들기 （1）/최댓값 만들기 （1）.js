function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort(function(a,b){return b-a});
    answer = arr[0]*arr[1];
    return answer;
}