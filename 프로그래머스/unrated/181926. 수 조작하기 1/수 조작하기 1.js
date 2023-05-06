function solution(n, control) {
    var answer = 0;
    const lala = control
        .replaceAll('w', '1,')
        .replaceAll('s', '-1,')
        .replaceAll('d', '10,')
        .replaceAll('a', '-10,')
        .split(",")
    const lala2 = lala.pop()
    const lala3 = [...lala].map(x=> Number(x));
    for (let num of lala3){
        answer += num
    }

    return answer+n;
}