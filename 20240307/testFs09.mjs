import { createReadStream, createWriteStream } from "fs"

const rs = createReadStream("./video/movie.mp4")
const ws = createWriteStream("./video/movie4.mp4")

// 就是pipe()
// rs.on("data", (chunk) => {
//     console.log(chunk.length);
//     ws.write(chunk);
// });

rs.on("end", () => {
    console.log("讀取結束");
});

rs.pipe(ws)