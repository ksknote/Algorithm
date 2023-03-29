function solution(s)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')
    //let ss= s.replace(/\w\1{2}/g, '.');
    
    const baguni = [];
    
    for (let str of s){
        if (str === baguni[baguni.length-1]){
            baguni.pop();
            continue;
        }
        baguni.push(str)
    }
    if  (baguni.length === 0 ) answer = 1;
    return answer;
}