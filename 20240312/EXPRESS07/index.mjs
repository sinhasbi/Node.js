import express from "express"
import moment from "moment"
import fs from "fs"
import { resolve } from "path"

const __dirname = import.meta.dirname

const app = express();

// MIDDLEWARE next()
const writeToLog = (req, res, next) => {
    const { ip, path } = req
    const accessDate = moment().format("YYYY-MM-DDTHH:mm:ss")
    const accesslog = `${accessDate} ${ip} ${path}\r\n`
    fs.appendFile(resolve(__dirname, "access.log"), accesslog, (err) => {
        if (err) {
            console.log("寫入失敗");
        }
    });
    next();
}

const checkLogin = (req, res, next) => {
    if (req.query.code === "464") {
        next()
    } else {
        res.send("請先登入")
    }
}
app.use(writeToLog)


app.get("/", (req, res) => {
    res.send("網站首頁")
})
app.get("/login", (req, res) => {
    res.send("登入首頁")
})

app.get("/about", (req, res) => {
    res.send("關於我")
})

app.get("/admin",checkLogin, (req, res) => {
    if (req.query.code === "464") {
        res.send("後臺首頁")
    } else {
        res.send("請先登入")
    }

})

app.get("/setting", (req, res) => {
    if (req.query.code === "464") {
        res.send("設定頁面")
    } else {
        res.send("請先登入")
    }

})

const errorToLog = (req, res, next) => {
    const { ip, path } = req
    const errorDate = moment().format("YYYY-MM-DDTHH:mm:ss")
    const errorlog = `${errorDate} ${ip} ${path}\r\n`
    fs.appendFile(resolve(__dirname, "error.log"), errorlog, (err) => {
        if (err) {
            console.log("寫入失敗");
        }
    });
    next();
}
app.get("*", errorToLog, (req, res) => {
    res.send("<h1>找不到頁面</h1>")
})



app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})