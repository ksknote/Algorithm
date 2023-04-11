function solution(k, tangerine) {
    var answer = 0;
    var howmany = [];
    var amola = [[]];
    tangerine.sort((a,b) => a-b);
    amola[0].push(tangerine[0])
    for (let i=1; i<tangerine.length; i++){
        let mola = amola[amola.length-1];
        if (mola[0]!== tangerine[i]) amola.push([tangerine[i]]);
        else {mola.push(tangerine[i])}    
    }
    
    amola.sort((a,b)=> b.length - a.length);
    let sum = 0;
    for(let i=0; i<amola.length;i++){
        sum+= amola[i].length;
        if(sum>=k){
            answer+= i+1;
            break;
        }
    }
    
    //var arr = [...new Set(tangerine)];
    // var newarr = new Array(arr.length).fill(new Array());
    // let idx = 0;
    // for (let i=0; i<tangerine.length; i++){
    //     newarr[idx].push(tangerine[i]);
    //     if(tangerine[i]!== tangerine[i+1]) idx++;
    // }
    

    console.log(tangerine);
    console.log(amola)
    return answer;
}

//     var arr = [...new Set(tangerine)].map(x=> [x]);
//     for (let i=0;i<arr.length;i++){
//         arr[i].push(tangerine.filter(element => arr[i][0] === element).length)
//     }
    
//     //howmany.sort((a,b) => b-a);
//     arr.sort((a,b)=> b[1]-a[1]);

//     for(let i of arr){
//         for(let j of tangerine) {
//             if(j === i[0]) amola.push(j);
//         }
//     }
    
//     let newamola = [...new Set(amola)];
    
//     return newamola.indexOf(amola[k-1])+1;


//     let sum = 0;
    
//     for (let i=0; i<howmany.length;i++){
//         sum+= howmany[i];
//         if(sum===k) {
//             answer += i+1;
//             break
//         } else if(sum>k) {
//             answer += i+1;
//             break
//         }
//     }