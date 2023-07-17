function solution(A,B){
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    let maxArr = A.sort((a,b)=> b-a);
    let minArr = B.sort((a,b)=> a-b);
    
    for(let i=0; i<A.length;i++){
        answer += maxArr[i]*minArr[i]
    }
    return answer;
}