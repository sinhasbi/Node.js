import express, { json } from "express"
import jsonData from "./singers.json" assert {type: "json"}
const { singers } = jsonData;
// console.log(singers);

const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")
})

// http://localhost:3000/singer/3.html
app.get("/singer/:id.html", (req, res) => {
    const { id } = req.params

    let result = singers.find(singer => parseInt(id) === singer.id)
    if (result) {
        res.status(200).send(`<!DOCTYPE html>
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
        // http方法
        // res.status(404);
        // res.set("HASBI","SERVER")
        // res.send(`<h1>找不到頁面啦</h1>`)

        res.status(404).set("HASBI", "SERVER").send(`<h1>找不到頁面啦</h1>`)
    }
}

)



app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})