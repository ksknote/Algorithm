function solution(array, n) {
    let arr = [];
    let answer = array.reduce((a, b) => {
        if (Math.abs(a-n) > Math.abs(b-n)){
            return b;}
        else if (Math.abs(a-n) === Math.abs(b-n)){
        return Math.min(a,b);}
        else {
        return a;}
    })
    return answer;
}