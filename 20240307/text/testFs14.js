const fs = require("fs");


// 有另外一個模組是path
fs.writeFileSync(__dirname+"/test.html","test test 123");



// __dirname 檔案存在資料夾的路徑
console.log(__dirname);
// 檔案的路徑
console.log(__filename);