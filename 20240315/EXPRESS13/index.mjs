import express from "express";
import usersRouter from "./usersRouters.mjs"
import productsRouter from "./productsRouters.mjs"
const app = express();


app.get("/", (req, res) => {
    res.send("網站主頁")
})

app.use("/users", usersRouter);

app.use("/products", productsRouter);

app.get("/post", (req, res) => {
    res.send("使用者登入流程")
})

app.get("/search", (req, res) => {
    res.send("全站搜尋")
})


app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})