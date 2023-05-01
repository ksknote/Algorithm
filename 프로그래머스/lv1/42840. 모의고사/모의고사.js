function solution(answers) {
    var answer = [];
    // const one = [1,2,3,4,5];
    // const two = [2,1,2,3,2,4,2,5];
    // const three = [3,3,1,1,2,2,4,4,5,5];
    const num = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    
    const sum = [0,0,0]
    for(let ii in num){
        for(let i in answers){
        var num1 = (i)%num[ii].length
        if(answers[i] === num[ii][num1]){
            sum[ii]++
            }  
        }
    }
    
    const resum = [...sum].sort((a,b) => b-a);
    console.log(resum)
    for(let i in sum){
        if(sum[i] ===resum[0]){
            answer.push(Number(i)+1);
        }
    }
    return answer;
}