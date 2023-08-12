const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalLine = 0;
let lineCount = 0;
let data = [];

rl.on("line", (line) => {
  if (lineCount === 0) {
    totalLine = parseInt(line);
  } else {
    data.push(line.split(" ").map((el) => parseInt(el)));
  }
  if (lineCount === totalLine) rl.close();
  lineCount++;
});
rl.on("close", () => {
  let answer = [];
  for (let person of data) {
    let Bigger = data.reduce((acc, cur) => {
      return person[0] < cur[0] && person[1] < cur[1] ? acc + 1 : acc;
    }, 0);
    answer.push(Bigger + 1);
  }
  console.log(answer.join(" "));
  process.exit();
});