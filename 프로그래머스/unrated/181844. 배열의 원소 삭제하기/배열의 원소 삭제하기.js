function solution(arr, delete_list) {
    var answer = arr;
    for(let item of delete_list) {
        answer = answer.filter(num => num !== item)
    }
    return answer;
}