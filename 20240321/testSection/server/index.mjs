import express from "express";
import cors from "cors";
import multer from "multer";
import session from "express-session";

const upload = multer();

// 測試session
const users = {
    "ben": {
        pwd: "a12345",
        name: "Ben Chen"
    },
    "mary": {
        pwd: "a12345",
        name: "Mary Lin"
    }
}

const whiteList = ["http://localhost:5500", "http://127.0.0.1:5500", "http://localhost:8080", , "http://127.0.0.1:8080"];
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
app.use(express.urlencoded({ extended: true }));
// secret金鑰
app.use(session({
    secret: "benbenben",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1200000
    }
}))

app.get("/", (req, res) => {
    res.send("首頁")
})

// 測試session
app.post("/", upload.none(), (req, res) => {
    console.log(req.get("cookie"));
    const { account, password } = req.body;
    console.log({account,password});
    if (users[account] && users[account].pwd === password) {
        const user = users[account]
        user.account=account;
        req.session.user = user
        console.log(req.session.user);
        res.json({ user });
    } else {
        res.json({ error: "登入失敗" });
    }
})

app.get("/checkLogin", (req, res) => {
    // console.log(req);
    console.log(req.session.user);
    const { user } = req.session;
    res.json({ user }); 
})

app.get("/logout", (req, res) => {
    delete req.session.user
    const { user } = req.session;
    res.json({ user }); 
})

app.listen(3000, () => {
    console.log("server is running");
})