import { readFileSync,writeFileSync} from "fs"

// 複製 > 先讀取 再寫入

const data=readFileSync("./video/movie.mp4");
writeFileSync("./video/movie2.mp4",data)