import { mkdir, readdir, rmdir ,rm} from "fs"


if (process.argv[2] === "mkdir") {
    mkdir("./html", (err) => {


        // mkdir("./a/b/c", { recursive: true }, (err) => {
        if (err) {
            console.log("建立資料夾失敗");
            console.log(err);
            return false;
        }
        console.log("建立資料夾成功");
    })
} else if (process.argv[2] === "readdir") {
    readdir("./video", (err, files) => {
        if (err) {
            console.log("讀取資料夾失敗");
            return false;
        }
        console.log("讀取資料成功");
        // 陣列型式
        console.log(files);
    })
} else if (process.argv[2] === "rmdir") {

    // rmdir("./html", (err) => {
    rm("./a",{ recursive:true}, (err) => {
        if (err) {
            console.log("刪除資料夾失敗");
            console.log(err);
            return false;
        }
        console.log("刪除資料成功");

    })
}