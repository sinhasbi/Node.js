import { appendFile } from "fs"

const file1 = "./測試寫入2_esm.txt"
const content2 = "\r\n測試第2次"

appendFile(file1, content2, (err) => {
    if (err) {
        console.log("增加失敗");
        return;
    }
    console.log("增加成功");
})