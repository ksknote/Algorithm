function solution(my_string, num1, num2) {
    var answer = '';
    const str1 = my_string[num1];
    const str2 = my_string[num2];
    my_string = my_string.substring(0,num1) + str2 + my_string.substring(num1+1);
    my_string = my_string.substring(0,num2) + str1 + my_string.substring(num2+1);

    
    return my_string;
}