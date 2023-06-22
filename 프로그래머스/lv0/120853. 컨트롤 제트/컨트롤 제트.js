function solution(s) {
    var answer = 0;
    const arr = s.split(" ");
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === 'Z' || arr[i+1] === 'Z') continue;
        answer += parseInt(arr[i]);
    }
    return answer;
}