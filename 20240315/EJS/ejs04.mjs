import express from "express"
import { resolve } from "path"
const __dirname = import.meta.dirname


const app = express()
let user;


app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

app.use("/bs",express.static(resolve(__dirname,"node_modules/bootstrap/dist")))
app.use("/jq",express.static(resolve(__dirname,"node_modules/jquery/dist")))

app.get("/", (req, res) => {
    res.send("首頁");
})

app.get("/test1", (req, res) => {
    const name = "HASBI"
    const str = "HELLO WORLD"
    res.render("test1",{name,str});
})

app.get("/test2", (req, res) => {
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
    res.render("test2",{blackpink});
})

app.get("/test3", (req, res) => {
    
    
    res.render("test3",{user});
})

app.get("/login",(req,res)=>{
    user = {
        name: "JUDY RYAN",
        img: "https://randomuser.me/api/portraits/women/9.jpg"
    }
    res.redirect("/test3");
})

app.get("/logout",(req,res)=>{
    user = undefined
    res.redirect("/test3");
})

app.listen(3000, () => {
    console.log("伺服器開啟 http://localhost:3000");
})