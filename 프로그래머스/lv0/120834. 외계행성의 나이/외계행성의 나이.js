function solution(age) {
    var answer = '';
    let str = String(age);
    let agee = Array.from(str);
    for ( i of str ){
        let num = parseInt(i);
        if (num === 0){
            answer += "a";
        } else if (num === 1){
            answer += "b";
        } else if (num === 2){
            answer += "c";
        } else if (num === 3){
            answer += "d";
        } else if (num === 4){
            answer += "e";
        } else if (num === 5){
            answer += "f";
        } else if (num === 6){
            answer += "g";
        } else if (num === 7){
            answer += "h";
        } else if (num === 8){
            answer += "i";
        } else if (num === 9){
            answer += "j";
        }
    }
    return answer;
}