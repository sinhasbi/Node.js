import { stat ,existsSync} from "fs";

let path = "./video/movie.mp4"

if (process.argv[2] === "a") {
    path = "./video";
} else if (process.argv[2] === "b") {
    path = "./video1";
}

// 檢查是否存在
// 判斷code是否為'ENOENT'
stat(path, (err, data) => {
    if (err) {
        console.log("讀取失敗");
        console.log(err);
        return false;
    }
    console.log("讀取成功");
    console.log(data);
    // console.log(new Date(data.birthtimeMs));

})