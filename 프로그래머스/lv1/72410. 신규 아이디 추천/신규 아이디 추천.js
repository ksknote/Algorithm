function solution(new_id) {
    var answer = '';
    //1단계 소문자로 치환
    const id1 = new_id.toLowerCase()
    //2단계 
    const id2 = id1.replaceAll(/[^\-\_\.a-z0-9]/g, " ").replaceAll(" ","")
    //3단계
    var id3 = ""
    for (let i=0; i<id2.length; i++) {
        if (id2[i] === "." && id2[i] === id2[i+1]) continue;
        id3 += id2[i];
    }
    //4단계
    {
    if(id3[0] === ".") id3 = id3.substring(1);
    if(id3[id3.length-1] === ".") id3 = id3.substring(0,id3.length-1);
    }
    
    //5단계
    if (id3 === "") id3 += "a";
    
    //6단계
    if (id3.length >= 16) id3 = id3.substring(0,15);
    if(id3[id3.length-1] === ".") id3 = id3.substring(0,id3.length-1);

    //7단계 
    if(id3.length <= 2) {
        let howmany = 3 - id3.length;
        let repeated = id3[id3.length-1].repeat(howmany);
        id3 += repeated;
    }
    
    return id3;
}