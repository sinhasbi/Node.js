import express from "express"
import { renameSync } from "fs"
import { resolve, extname } from "path"
import multer from "multer"
import { rename } from "fs/promises"
const __dirname = import.meta.dirname

const app = express()
// 全局的配置
app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")))

app.use(express.static(resolve(__dirname, "public", "upload")))

const upload = multer({ dest: resolve(__dirname, "public", "upload") })

app.get("/", (req, res) => {
    res.send("首頁");
})

app.get("/form", (req, res) => {
    res.render("form1")
})

app.get("/form2", (req, res) => {
    res.render("form2")
})

app.get("/form2_2", (req, res) => {
    res.render("form2_2")
})

app.post("/upload1", upload.single("myFile"), (req, res) => {
    // res.send("處理檔案上傳")
    let timestamp = Date.now()
    // new Date().getTime() JS的時間戳記寫法
    let newName = `${timestamp}${extname(req.file.originalname)}`
    renameSync(req.file.path, resolve(__dirname, "public", "upload", newName))
    req.body.myFile = newName
    // res.json({ body: req.body, file: req.file })
    res.json({ body: req.body ,file: req.file})
})

// 多檔案上傳
app.post("/upload2", upload.array("myFile", 3), (req, res) => {
    let myFiles = [];
    // res.json({ body: req.body, file: req.files })
    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        // console.log(newName);
        myFiles.push(newName)
        rename(file.path, resolve(__dirname, "public", "upload", newName));
        
    })
    req.body.myFiles = myFiles
    res.json({ body: req.body,file: req.files})
})


app.post("/upload2_2", upload.array("myFile[]", 3), (req, res) => {
    let myFiles = [];
    // res.json({ body: req.body, file: req.files })
    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        myFiles.push(newName);
        rename(file.path, resolve(__dirname, "public", "upload", newName));
        
    })
    req.body.myFiles = myFiles
    res.json({ body: req.body })
})

app.listen(3000, () => {
    console.log("伺服器開啟 http://localhost:3000");
})