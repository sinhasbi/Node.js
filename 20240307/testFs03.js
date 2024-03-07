const fs = require('fs');

const file1 = "./測試寫入.txt"
const content2 = "\r\n測試第2次"

fs.appendFileSync(file1,content2);