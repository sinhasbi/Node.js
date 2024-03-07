// 檔案系統
const fs = require('fs');

const file1 = "./測試寫入2.txt"
const content = "測試"

fs.writeFileSync(file1, content)

// try () catch { } 同步寫法去抓錯誤