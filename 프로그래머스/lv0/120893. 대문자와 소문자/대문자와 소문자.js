function solution(my_string) {
    var answer = '';
    for (let i=0; i < my_string.length; i++){
        let upper = my_string.toUpperCase();
        let lower = my_string.toLowerCase();
     if (my_string.charAt(i) === upper.charAt(i)){
         answer += lower.charAt(i);
     } if (my_string.charAt(i) === lower.charAt(i)){
         answer += upper.charAt(i);
     } 
    }
    return answer;
}