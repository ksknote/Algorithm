function solution(names) {
    var answer = [];
    for (let idx in names) {
        if(idx % 5 ===0) {
            answer.push(names[idx])
        }
    }
    return answer;
}