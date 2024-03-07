import{writeFileSync} from "fs"

const file1 = "./測試寫入2_esm.txt"
const content1 = "\r\n測試"

// 第三個參數 {flag:"a"} 就是append
writeFileSync(file1, content1,{flag:"a"});

const content2 = "測試第二行"
// wruteFileSync 會把檔案覆蓋過去
// 利用appendFile去寫
// writeFileSync(file1,content2)