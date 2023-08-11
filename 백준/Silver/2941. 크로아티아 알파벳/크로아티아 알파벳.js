const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str = "";
let croArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

rl.on("line", (line) => {
  str += line;
  rl.close();
});
rl.on("close", () => {
  let croCount = 0;
  let slicedStr = str;
  while (true) {
    let index = -1;
    for (let croStr of croArr) {
      index = slicedStr.indexOf(croStr);
      if (index !== -1) {
        slicedStr =
          slicedStr.slice(0, index) +
          " " +
          slicedStr.slice(index + croStr.length);
        croCount++;
        break;
      }
    }
    if (index === -1) break;
  }
  croCount += slicedStr.replaceAll(" ", "").length;
  console.log(croCount);
  process.exit();
});