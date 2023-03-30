function solution(s) {
    // var answer = 0;
    let answer = s
                .replaceAll(/zero/g, 0)
                .replaceAll(/one/g, 1)
                .replaceAll(/two/g, 2)
                .replaceAll(/three/g, 3)
                .replaceAll(/four/g, 4)
                .replaceAll(/five/g, 5)
                .replaceAll(/six/g, 6)
                .replaceAll(/seven/g, 7)
                .replaceAll(/eight/g, 8)
                .replaceAll(/nine/g, 9)
    
    return parseInt(answer);
}