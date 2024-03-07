const fs = require('fs');


for (let N = 1; N <= 20; N++) {
    const file1 = `./work${N}.html`
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>這是第${N}個HTML檔</h1>
</body>
</html>`

    fs.writeFile(file1, content, function (err) {
        if (err) {
            console.log("1 寫入失敗");
            return false;
        }

        console.log("2 寫入成功");

    })
}