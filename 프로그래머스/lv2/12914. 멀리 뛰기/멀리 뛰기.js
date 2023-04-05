function solution(n) {
    let arr = [0, 1, 2]
    for(let i=3; i<=n; i++){
        arr[i] = (arr[i-2] + arr[i-1])%1234567;
    }
    return arr[n]%1234567;

}


//     function factorial(n) {
//       let result = 1;
//       for (let i = 1; i <= n; i++) {
//         result = result * i;
//        }
//       return result;
//     }
    
//     for(let i=0; i<=n/2; i++) {
//         //var num1 = n-2*i;
//         //var num2 = i;
//         //var total = n-i;
//         console.log(n-i)
//         console.log(i)
//         console.log(n-2*i)
        
//         answer += factorial(n-i)/(factorial(i)*factorial(n-2*i));
//         console.log(answer)
//     }

//     return answer%1234567;
// 10
// 2:0 1:10 1
// 2:1 1:8 9/8 9
// 2:2 1:6 8/6*2 28;
// 2:3 1:4 7/3*4 35;
// 2:4 1:2 6/4*2 15;
// 2:5 1
