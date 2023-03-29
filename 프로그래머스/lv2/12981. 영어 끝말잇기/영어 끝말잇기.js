function solution(n, words) {
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 
    console.log('Hello Javascript')

    for (let i=1; i<words.length;i++) {
        let arr = [...words].slice(0,i);
      if (words[i][0] !== words[i-1].slice(-1)) {
          if ((i+1)%n === 0) answer.push(n);
          else answer.push((i+1)%n);
          answer.push(Math.ceil((i+1)/n));
          break;
      }  else if (arr.find(x=> x === words[i]) !== undefined) {
          if ((i+1)%n ===0) answer.push(n);
          else answer.push((i+1)%n);
          answer.push(Math.ceil((i+1)/n));
          break;
      }
    }
    
    if (answer.length === 0) answer = [0,0];
    return answer;
}