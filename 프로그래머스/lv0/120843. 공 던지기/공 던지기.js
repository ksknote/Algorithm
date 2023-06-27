function solution(numbers, k) {
    const index = k*2-2;
    if (numbers.length-1 < index) {
        const quotient = parseInt(index/numbers.length);
        return numbers[index-quotient*numbers.length]
    } 
    
    return numbers[index];
}