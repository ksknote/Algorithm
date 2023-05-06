function solution(num_list) {
    var answer = 0;
    let jjak = "";
    let hol = "";
    
    for (let n of num_list){
        if(n%2 ===0){
            jjak += n.toString();
        } else {
            hol += n.toString()
        }
    }
    return Number(jjak)+Number(hol);
}