function solution(arr) {
    var answer = 0;
    let validate = true;
    for (let i in arr){
        for(let j in i){
            if(arr[i][j] !== arr[j][i]){
                validate = false;
                break;
            }
        }
    }
    if (validate) answer += 1;
    return answer;
}