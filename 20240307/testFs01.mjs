// 需要模組的特定功能
import { writeFile } from "fs";

const file1 = "./測試寫入_esm.txt"
const content = "測試"

writeFile(file1, content, (err) => {
    if (err) {
        console.log("寫入失敗");
        return;
    }
    console.log("寫入成功");
})