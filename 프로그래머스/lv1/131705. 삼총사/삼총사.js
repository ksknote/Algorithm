function solution(number) {
    var answer = 0;
    for (let i =0; i< number.length-2; i++){
        for (let j = i+1; j<number.length-1; j++){
            let find = -(number[i]+number[j]);
            //let idx = number.findIndex(x => x===find);
            //if(idx > j)
                //answer++;
            
            var idx = number.indexOf(find);
            while (idx != -1) {
              if(idx > j) {answer++};
              idx = number.indexOf(find, idx + 1);
            }
            
        }
    }
    return answer;
}