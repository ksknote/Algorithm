function solution(n, m, section) {
    var answer = 0;
    //현재까지 페인트 칠해진 영역
    let painted  = 0;
    
    for (let i=0; i<section.length; i++) {
        if (section[i] <= painted) {
            continue;
        }
        painted = section[i] + m - 1;
        answer++
    }
      return answer;
}