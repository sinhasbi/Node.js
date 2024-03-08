const fs = require("fs");

for (let N = 1; N <= 20; N++) {
  fs.readFile(`./work/work${N}.html`, (err, data) => {
    if (err) {
      console.log("讀取資料夾失敗");
      return false;
    }
    // console.log("讀取資料成功");
    // console.log(N);
    if (Number(N) < 10) {
      let filename = "0" + N;
      fs.rename(`./work/work${N}.html`,`./work/work${filename}.html`,(err) => {
          if (err) {
            console.log("更改失敗");
            return false;
          }
          console.log("更改成功");
        }
      );
    }
  });
}
