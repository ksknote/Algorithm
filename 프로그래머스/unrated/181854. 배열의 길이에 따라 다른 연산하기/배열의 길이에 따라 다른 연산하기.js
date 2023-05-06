function solution(arr, n) {
    var answer = [];
    if(arr.length%2===0){
        for (let i in arr){
            if(i%2===0){
                answer.push(arr[i])
            } else answer.push(arr[i]+n)
        }
    } else {
        for (let i in arr){
            if(i%2!==0){
                answer.push(arr[i])
            } else answer.push(arr[i]+n)
    }}
    return answer;
}