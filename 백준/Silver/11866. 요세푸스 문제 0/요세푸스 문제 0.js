const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", (line) => {
  data = line.split(" ").map((el) => parseInt(el));
  rl.close();
});
rl.on("close", () => {
  let [total, k] = data;
  let arr = [];
  let answer = [];
  for (let i = 1; i <= total; i++) {
    arr.push(i);
  }
  let targetIdx = k - 1;
  while (arr.length > 0) {
    while (targetIdx > arr.length - 1) {
      targetIdx = targetIdx - arr.length;
    }
    answer.push(arr[targetIdx]);
    arr = [...arr.slice(0, targetIdx), ...arr.slice(targetIdx + 1)];
    targetIdx = targetIdx + k - 1;
  }
  console.log("<" + answer.join(", ") + ">");
  process.exit();
});