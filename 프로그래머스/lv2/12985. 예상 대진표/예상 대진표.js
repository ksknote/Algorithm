function solution(n,a,b) {
    var answer = 0;
    
    
    // let lala = Math.abs(b-a);
    // var x = 1; 
    // while(true) {
    //     if (lala < Math.pow(2,x)) break;
    //     x++
    // }
    // answer = x+1;
    // for (let i = 0; i< n/x; i++) {
    //     if (a > Math.pow(2,x)*i && a<=Math.pow(2,x)*(i+1) && b>Math.pow(2,x)*i && b<=Math.pow(2,x)*(i+1)) {
    //         answer = x;
    //         break;
    //     }
    // }
    var x = 1;
    while (true) {
        if(Math.ceil(a/Math.pow(2,x)) === Math.ceil(b/Math.pow(2,x))) {
           answer = x;
           break
           }
        x++;
    }

    return answer;
}

//    1      8         14           16  
//  1   3   6   8         14     16    18
// 1 2 3 4 5 6 7 8 11 12 13 14 15 16 17 18
    // let x = 1;
    // let lala = Math.pow(2,x);
    // while (lala <= n) {
    //     for (let i=0; i< n/lala; i++) {
    //         if (a > lala*i && a<=lala*(i+1) && b>lala*i && b<=lala*(i+1)) {
    //             return x;
    //         }
    //     } x++;
    // } 