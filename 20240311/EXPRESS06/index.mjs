import express, { json } from "express"
import { resolve } from "path"
import jsonData from "./singers.json" assert {type: "json"}
const { singers } = jsonData;
console.log(singers);

const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")
})

// http://localhost:3000/singer/3.html
app.get("/singer/:id.html", (req, res) => {
    const { id } = req.params

    let result = singers.find(singer => parseInt(id) === singer.id)
    if (result) {
        res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${result.singer_name} Page</title>
    </head>
    <body>
      <h1>${result.singer_name}</h1>
      <img src="${result.singer_img}" alt="">
    </body>
    </html>`)
    } else {
        res.send(`<h1>找不到頁面啦</h1>`)
    }
}

)
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