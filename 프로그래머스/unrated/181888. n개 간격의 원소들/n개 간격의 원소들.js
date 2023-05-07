function solution(num_list, n) {
    var answer = [];
    for(let i=0;i<=(num_list.length-1)/n;i++){
        answer.push(num_list[n*i])   
    }
    return answer;
}