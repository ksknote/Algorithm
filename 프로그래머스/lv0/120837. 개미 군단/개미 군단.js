function solution(hp) {
    var answer = 0;
    let jg = 0;
    let bj = 0;
    for (let i=0; i<= 200;i++) {
        if (5*i <= hp){jg = i;}
    } for (let i=0; i<= 333;i++) {
        if (3*i <= (hp-5*jg)){
            bj = i;
        }
    } let il = hp -5*jg -3*bj;
    answer = jg + bj + il;
    return answer;
}