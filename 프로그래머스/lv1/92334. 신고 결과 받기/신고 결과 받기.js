function solution(id_list, report, k) {
    //answer 기본값 0으로 설정(id_list 길이만큼)
    var answer = [...id_list].map(x=> x=0);
    //report중복값 제거하여 배열안에 배열로 만들기
    const report2 = [...new Set(report)].map(x => x.split(" "));
    
    const newarr = [...report2].map(x=> x[1]);
    const setnewarr = [...new Set(newarr)]
    for(let i of setnewarr) {
        if(newarr.filter(x=> x===i).length>=k){
            for(let j of report2){
            if(j[1] === i){
                answer[id_list.indexOf(j[0])]+=1;
            }
        }
        }
    }
    //신고당한 횟수 담을 객체 생성
    // const singo = {};
    // for(let i=0;i<report2.length;i++) {
    //     const gotsingo = report2[i][1];
    //     if(Object.keys(singo).includes(gotsingo)) {
    //         singo[gotsingo]++
    //     } else {singo[gotsingo] = 1}
    // }
    
    // var result = {};
    // id_list.forEach((key, i) => result[key] = 0);
    
    
    //     for(let key in singo){
    //     if (singo[key]>=k){
    //         for(let i of report2){
    //             if(i[1] === key){
    //                 result[i[0]] +=1;
    //             }
    //         }
    //     }
    // }
    
    // const keyofsingo = Object.keys(singo).filter(key => singo[key] >=k);
    // for(let i of keyofsingo){
    //     for(let j of report2){
    //         if(j[1] === i){
    //             answer[id_list.indexOf(j[0])]+=1;
    //         }
    //     }
    // }
    
//     for(let key in singo){
//     if (singo[key]>=k){
//         let filter = report2.filter((el,idx) => el[1] === key);
//         for(let i of filter){
//             answer[id_list.indexOf(i[0])]+=1;
//         }
//     }
// }
    

    // for(let key in singo){
    //     if (singo[key]>=k){
    //         for(let i of report2){
    //             if(i[1] === key){
    //                 answer[id_list.indexOf(i[0])]+=1;
    //             }
    //         }
    //     }
    // }
    
    //     const entries = Object.entries(singo);
    // for(let i=0; i<entries.length;i++){
    //     if(entries[i][1]>=k) {
    //         for(let j of report2){
    //             if(j[1] === entries[i][0]){
    //                 answer[id_list.indexOf(j[0])]+=1;
    //             }
    //         }
    //     }
    // }
    return answer;
}