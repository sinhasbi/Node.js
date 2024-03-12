// 靜態資源
import express from "express"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

console.log(__dirname);
// 靜態MIDDLEWARE
app.use(express.static(resolve(__dirname,'public')))


app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})