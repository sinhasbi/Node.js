import express, { json } from "express"
import { resolve } from "path"
import jsonData from "./singers.json" assert {type: "json"}
const { singers } = jsonData;
// console.log(singers);

const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/api/singer/:id", (req, res) => {
    const { id } = req.params

    let result = singers.find(singer => parseInt(id) === singer.id)
    if (result) {
        res.status(200).json(result)
    } else {
        res.status(404).json({ error: "找不到" })
    }
})

// 直接導入其他網站
app.get("/netflix", (req, res) => {
    res.redirect("https://www.netflix.com/tw/")
})
// 下載某檔案
app.get("/download", (req, res) => {
    res.download(resolve(import.meta.dirname,"singers.json"))
})
// 
app.get("/content", (req, res) => {
    res.sendFile(resolve("test.html"))
})


app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})