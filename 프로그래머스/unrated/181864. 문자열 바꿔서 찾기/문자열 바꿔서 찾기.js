function solution(myString, pat) {
    var answer = 0;
    let newPat="";
    for (let p of pat.split("")){
        if(p === "A"){
            newPat+= "B";
        } else newPat+= "A";
    }
    return myString.includes(newPat) ?1:0;
}