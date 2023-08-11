let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let answer = 0;
for (let i = 1; i < input.length; i++) {
  let singlestr1 = input[i][0];
  for (let j = 1; j < input[i].length; j++) {
    if (input[i][j] !== input[i][j - 1]) {
      singlestr1 += input[i][j];
    }
  }

  let strArr = input[i].split("");
  let singlestr2 = [...new Set(strArr)].join("");
  if (singlestr1 === singlestr2) answer += 1;
}

console.log(answer);