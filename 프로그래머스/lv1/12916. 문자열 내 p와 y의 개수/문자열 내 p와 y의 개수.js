function solution(s){
    var answer = true;
    
    let s2 = s.toLowerCase();
    let p = 0;
    let y = 0;
    for(let i = 0;i<=s2.length;i++){
        if(s2[i] ==="p") p++;
        if(s2[i] === "y") y++;
    }
    
    if (p === y) answer = true;
    else {answer = false}
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}