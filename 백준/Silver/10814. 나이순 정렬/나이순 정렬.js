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
    let [age, name] = line.split(" ");
    data.push([parseInt(age), name]);
  }
  if (lineCount === totalLine) rl.close();
  lineCount++;
});
rl.on("close", () => {
  let sortedData = data.sort((a, b) => a[0] - b[0]);
  sortedData.forEach((data) => console.log(data.join(" ")));
  process.exit();
});