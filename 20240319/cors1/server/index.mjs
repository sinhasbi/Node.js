import express from "express";
import cors from "cors";
import multer from "multer";

const upload = multer();

// 加undefined也行
const whiteList = ["http://localhost:5500", "http://127.0.0.1:5500"];
const corsOptions = {
    credentials: true,
    origin(origin, callback) {
        if (!origin || whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("不允許傳遞資料"))
        }
    }
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("首頁")
})

// 加上multer才能解析表單內容
app.post("/", upload.none(), (req, res) => {
    console.log(req.body);
    res.json({ message: "welcome" });
})

app.listen(3000, () => {
    console.log("server is running");
})