const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];

rl.on("line", (line) => {
  data = line.split("").map((el) => parseInt(el));
  rl.close();
});
rl.on("close", () => {
  let answer = data.sort((a, b) => b - a).join("");
  console.log(answer);
  process.exit();
});