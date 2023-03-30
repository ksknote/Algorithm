function solution(array, commands) {
    var answer = [];
    for (let c of commands) {
        var arr = [...array].slice(c[0]-1,c[1]).sort((a,b) => a-b)
        console.log(arr)
        answer.push(arr[c[2]-1])
    }
    return answer;
}