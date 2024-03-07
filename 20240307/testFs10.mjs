import { readSync, rename } from "fs"

rename("./測試連續寫入.txt", "./詩.txt", (err) => {
    if (err) {
        console.log("更改失敗");
        return false;
    }
    console.log("更改成功");
})