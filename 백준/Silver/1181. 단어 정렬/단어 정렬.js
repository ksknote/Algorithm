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
    totalLine += parseInt(line);
  } else {
    data.push(line);
  }
  if (lineCount === totalLine) rl.close();
  lineCount++;
});
rl.on("close", () => {
  let uniqueData = [...new Set(data)];
  uniqueData.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });
  uniqueData.forEach((str) => console.log(str));
  process.exit();
});