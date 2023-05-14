function solution(arr1, arr2) {
    var answer = 0;
    const length1 = arr1.length;
    const length2 = arr2.length;
    const sum1 = [...arr1].reduce((acc, cur) => acc+cur);
    const sum2 = [...arr2].reduce((acc, cur) => acc+cur);
    
    if (length1 !== length2) {
        if(Math.max(length1, length2) === length1) {
            answer +=1;
        } else {
            answer -= 1;
        } 
    } else {
        if (sum1 !== sum2) {
            if (Math.max(sum1, sum2) === sum1) {
            answer +=1;
            } else {
            answer -= 1;
            } 
        } 
    }
    return answer;
}