const fs = require("fs");
const path = require("path");

try {
  fs.readdirSync("./zero");
  console.log("'zero' 資料夾已經存在");
} catch (err) {
  console.log("資料夾讀取失敗");
  try {
    fs.mkdirSync("./zero");
    console.log("成功創建 'zero' 資料夾");
  } catch (err) {
    console.log("資料夾創建失敗");
  }
}

for (let N = 1; N <= 20; N++) {
  let filename;
  if (Number(N) < 10) {
    filename = "0" + N;
  } else {
    filename = N;
  }
  const file = `./zero/work${filename}.html`;
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>這是第個${filename}HTML檔</h1>
</body>
</html>`;

  try {
    fs.writeFileSync(file, content);
    console.log("新增資料成功");
  } catch (err) {
    console.log("新增資料失敗");
  }
}

//
