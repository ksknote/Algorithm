function solution(nums) {
    var answer = 0;
    const newNums = [...new Set(nums)];
    const getNum = nums.length/2;
    if (newNums.length > getNum) {
        return getNum;
    } else {
        return newNums.length;
    }
}