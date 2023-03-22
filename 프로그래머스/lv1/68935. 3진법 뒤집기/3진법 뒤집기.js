function solution(n) {
    var answer = 0;
    
    let three = n.toString(3);
    let rvs = three.split("").reverse().join("");
    answer = parseInt(rvs, 3);
    return answer;
}