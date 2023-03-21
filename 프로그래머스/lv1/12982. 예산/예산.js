function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    let arr = [...d].sort((a,b) => a-b)
    for (let dd of arr){
        if (sum + dd <= budget){
            sum += dd;
            answer++
        } else {break}
    } 
    return answer;
}