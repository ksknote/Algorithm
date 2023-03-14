function solution(i, j, k) {
    var answer = 0;
    let arr =[];
    for (let a=i; a<=j;a++){
        arr.push(a);
    }
    let str = arr.join("");
    for (let s of str) {
        if (s=== k.toString()){
            answer +=1;
        }
    }
    
    return answer;
}