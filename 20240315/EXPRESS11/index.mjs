import express from "express";
import {resolve} from "path"
import bodyParser from "body-parser"

const __dirname =import.meta.dirname

const app = express();
// parse application/x-www-form-urlencoded
// 解析form元素表單
// extended解析多層物件
// 下面是 top down middleware的寫法
// app.use(bodyParser.urlencoded({ extended: true }))
// 下面是路由middleware寫法
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// 納入express裡面
const urlencodedParser = express.urlencoded({ extended: false })

// parse application/json
// 解析JSON格式的表單
// 下面是 top down middleware的寫法
// app.use(bodyParser.json())
// 下面是路由middleware寫法
// const jsonParser = bodyParser.json()
// 納入express裡面
const jsonParser = express.json()


app.get("/", (req, res) => {
    res.send("網站主頁")
})
app.get("/login", (req, res) => {
    // res.send("顯示表單")
    res.sendFile(resolve(__dirname,"form.html"))
})
app.post("/login",urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("進入送出流程")
})

app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})