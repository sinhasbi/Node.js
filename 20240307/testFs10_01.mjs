import { readSync, rename } from "fs"

// 利用rename完成搬移 (類似更改路徑)
rename("./詩.txt", "./text/詩.txt", (err) => {
    if (err) {
        console.log("更改失敗");
        return false;
    }
    console.log("更改成功");
})