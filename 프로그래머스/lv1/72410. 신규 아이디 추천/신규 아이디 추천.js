function solution(new_id) {
    var answer = '';
    
    //1-2단계
    const id1_2 = new_id
                .toLowerCase()
                .replaceAll(/[^\.\-\_a-z0-9]/g,"")
    //3단계
    let id3 = ""
    for (let i=0; i< id1_2.length; i++) {
        if (id1_2[i] ==="." && id1_2[i] === id1_2[i+1]) continue;
        id3 += id1_2[i]
    }
    //4단계
    if (id3[0] === ".") id3 = id3.substring(1);
    if (id3[id3.length-1] === ".") id3 = id3.substring(0,id3.length-1);
    
    //5단계
    if (id3 === "") id3 += "a";
    
    //6단계
    if(id3.length >= 16) id3 = id3.substring(0,15);
    if (id3[id3.length-1] === ".") id3 = id3.substring(0,id3.length-1);
    
    //7단계
    let repeatStr = ""
    if(id3.length <= 2) repeatStr = id3[id3.length-1].repeat(3-id3.length);
    answer += id3 + repeatStr
    return answer;
}