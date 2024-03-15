import express from "express"
import { renameSync } from "fs"
import { resolve, extname } from "path"
import multer from "multer"
import { rename } from "fs/promises"

import { uuid } from "uuidv4"

const __dirname = import.meta.dirname

const app = express()

app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")))

app.use(express.static(resolve(__dirname, "public", "upload")))

// 新的東西
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, resolve(__dirname, "public", "upload"))
    },
    filename: function (req, file, cb) {
        // timestamp 做為新黨名
        // let timestamp = Date.now();
        // let newName = `${timestamp}${extname(file.originalname)}`
        // req.body.myFile = newName

        // UUID做為新黨名
        let newName = `${uuid()}${extname(file.originalname)}`
        

        if (!req.body[file.fieldname]) {
            req.body[file.fieldname] = []
        }
        req.body[file.fieldname].push(newName)
        cb(null, newName)
    }
})

const upload = multer({ storage })

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
    res.json({ body: req.body, file: req.file })
})

// 多檔案上傳
app.post("/upload2", upload.array("myFile", 3), (req, res) => {
    // let myFiles = [];
    // // res.json({ body: req.body, file: req.files })
    // req.files.forEach(file => {
    //     let newName = `${file.filename}${extname(file.originalname)}`
    //     // console.log(newName);
    //     myFiles.push(newName)
    //     rename(file.path, resolve(__dirname, "public", "upload", newName));

    // })
    // req.body.myFile = newName
    res.json({ body: req.body, file: req.files })
})


app.post("/upload2_2", upload.array("myFile[]", 3), (req, res) => {
    let myFiles = [];

    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        myFiles.push(newName)
        rename(file.path, resolve(__dirname, "public", "uploads", newName))
    })
    req.body.myFiles = myFiles

    res.json({ body: req.body })
})

app.listen(3000, () => {
    console.log("伺服器開啟 http://localhost:3000");
})