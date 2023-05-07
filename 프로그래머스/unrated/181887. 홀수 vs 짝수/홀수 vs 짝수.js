function solution(num_list) {
    var answer = 0;
    let jjakSum = 0;
    let holSum = 0;
    for (let i in num_list){
        if(i%2 ===0){
            jjakSum += num_list[i];
        } else holSum += num_list[i];
    }
    return jjakSum > holSum ?jjakSum:holSum;
}