import { createReadStream } from "fs"

const rs = createReadStream("./video/movie.mp4")

// 切分成很多塊
rs.on("data", (chunk) => {
    // 65536 > 64kb
    console.log(chunk.length);
});

rs.on("end", () => {
    console.log("讀取結束");
});