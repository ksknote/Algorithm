function solution(my_string) {
    var answer = 0;
    let nostr = my_string.replace(/[^0-9]/g," ");
    let arr = nostr.split(" ")
    for (let i of arr){
        if (i === "")
            continue;
        answer += parseInt(i);
    }
    return answer;
}