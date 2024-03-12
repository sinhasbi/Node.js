import express from "express"

const fakeData = {
    "CvZP-PIguWG": `《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》`,
    "CvRz0e3Awmi": `《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》 `
};

const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")
})
app.get("/p/:id?", (req, res) => {
    const { id } = req.params;
    let pageContent = "IG"
    // console.log(id);
    // pageContent = fakeData[id]

    // 三元運算子
    pageContent = (id) ? (fakeData[id]) ? fakeData[id] : "no data" : "IG"

    // if (id === "CvZP-PIguWG") {
    //     pageContent = `《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》`
    // } else if (id === "CvRz0e3Awmi") {
    //     pageContent = `《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》 `
    // }
    res.send(pageContent)
})

// 會員系統
// 沒有的/users/:userID? ，加一個問號
app.get("/users/:userID?", (req, res) => {
    console.log(`使用者ID是 ${req.params.userID}`);

    if (req.params.userID) {
        res.send(`使用者ID是 ${req.params.userID}`)
    } else {
        res.send(`匿名訪客`)
    }

})
// 書籍分類
app.get("/books/:cateID/:bookID", (req, res) => {
    res.send(`書本的的分類是 ${req.params.cateID}，書本的編號是 ${req.params.bookID}`)
})

// 路由規則
app.get("/user/:id([a-z][0-9]+)", (req, res) => {
    res.send(`${req.params.id}`);
});

app.get("/files/*", (req, res) => {
    const filePath = req.params[0];
    res.send(`${filePath}`);
});

app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
})