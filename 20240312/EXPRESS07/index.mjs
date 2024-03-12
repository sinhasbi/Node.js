import express from "express"
import moment from "moment"
import fs from "fs"
import path from "path"

const __dirname = import.meta.dirname

const app = express();

app.get("/", (req, res) => {
    const{ip,path}=req
    console.log(ip);
    console.log(path);
    fs.appendFile(path.resolve(__dirname,"access.log"),accesslog)

    console.log(moment().format("YYYY-MM-DDTHH:mm:ss"));
    res.send("網站首頁")
})



app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})