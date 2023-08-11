let input = require("fs");
let notSelfNumArr = [];
for (let i = 1; i <= 10000; i++) {
  let EachNumArr = i.toString().split("");
  let notSelfNum = i;
  for (let n of EachNumArr) {
    notSelfNum += parseInt(n);
  }
  if (notSelfNum <= 10000) notSelfNumArr.push(notSelfNum);
  if (!notSelfNumArr.includes(i)) {
    console.log(i);
  }
}