function solution(num_str) {
    var answer = 0;
    const numArr = num_str.split("");
    answer+= numArr.map(x=>Number(x)).reduce((acc,cur)=> acc+cur);
    return answer;
}