function solution(myString) {
    var answer = [];
    const splittedArr = myString.split('x');
    for(let item of splittedArr) {
        answer.push(item.length)
    }
    return answer;
}