// 檔案系統
const fs = require('fs');

const file1 = "./測試寫入.txt"
const content = "測試"

fs.writeFile(file1, content, function (err) {
    if(err){
        console.log("1 寫入失敗");
        return false;
    }
    console.log("2 寫入成功");
    // if (err) {
    //     console.log("1 寫入失敗");
    // } else {
    //     console.log("2 寫入成功");
    // }
})

console.log("3 測試用字串");