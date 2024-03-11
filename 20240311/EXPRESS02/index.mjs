import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("網站主頁")
})
app.get("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("登入頁面")
})

app.post("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("進入登入流程頁面")
})

app.all("/test", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("進入TEST")
})
// * 要放在最後面
app.all("*", (req, res) => {
    // res.setHeader("content-type", "text/html;charset=utf-8");
    // send s(etHeader)+ end
    res.send("歡迎~")
})


app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})