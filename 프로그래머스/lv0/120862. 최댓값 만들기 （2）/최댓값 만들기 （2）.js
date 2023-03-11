function solution(numbers) {
    var answer = 0;
    let arr = [];
    
    for (let i=0; i <numbers.length-1; i++){
        for (let j=i+1; j<numbers.length;j++){
            arr.push(numbers[i]*numbers[j]);
        }
    }

    arr = arr.sort((a,b)=> {return b-a});
    answer = arr[0];
    
    return answer;
}