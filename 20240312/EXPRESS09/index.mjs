// 靜態資源
// 使用JQUERY
import express from "express"
import { fileURLToPath } from "url"
import {resolve,dirname} from "path"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
app.use(express.static(resolve(__dirname,'public')))


app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})