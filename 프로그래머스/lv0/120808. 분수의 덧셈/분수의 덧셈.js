function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer3 = numer1*denom2 + numer2*denom1;
    let denom3 = denom1*denom2;
    let max = 1
    for (let i=1; i <= denom3 ; i++){
        if (numer3%i ===0 && denom3%i === 0){
            max =i;
        }
    }
    answer = [numer3/max , denom3/max];
    return answer;
}