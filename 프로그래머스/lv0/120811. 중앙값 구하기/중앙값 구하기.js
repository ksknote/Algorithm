function solution(array) {
    var answer = 0;
    let array1 = array.sort(function(a,b){return a-b});
    let index = Math.floor(array.length/2)
    answer = array1[index];
    return answer;
}