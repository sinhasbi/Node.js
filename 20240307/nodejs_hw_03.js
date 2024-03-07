const fs = require("fs");

// for (let N = 1; N <= 20; N++) {
    fs.readdir(`./work`, (err, files) => {
        if (err) {
            console.log("讀取資料夾失敗");
            return false;
        }
        console.log("讀取資料成功");
        console.log(files);
    })

