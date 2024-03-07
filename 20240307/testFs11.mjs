import { renameSync, unlink, readFileSync, writeFileSync,rm} from "fs"

// 利用rename完成搬移 (類似更改路徑)
// rename("./詩.txt", "./text/詩.txt", (err) => {
//     if (err) {
//         console.log("更改失敗");
//         return false;
//     }
//     console.log("更改成功");
// })

// renameSync("./text/詩.txt","./text/詩2.txt")


// 同時執行兩個動作
// 抓取執行參數 process.argv
if (process.argv[2]==="copy") {
    const data = readFileSync("./text/詩2.txt")
    writeFileSync("./text/詩.txt", data)
} else {
    // unlink 刪除檔案
    // unlink("./text/詩.txt", (err) => {
    //     if (err) {
    //         console.log("刪除失敗");
    //         return false;
    //     }
    //     console.log("刪除成功");
    // })

    //rm 可以刪除資料夾與檔案 
    rm("./text/詩.txt", (err) => {
        if (err) {
            console.log("刪除失敗");
            return false;
        }
        console.log("刪除成功");
    })
}







