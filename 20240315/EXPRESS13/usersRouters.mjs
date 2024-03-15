import express from "express";
const router = express.Router()

router.get("", (req, res) => {
    res.send("使用者頁面")
})

router.get("/login", (req, res) => {
    res.send("使用者登入面面")
})
router.get("/:id", (req, res) => {
    res.send(`某個人的頁面`)
})


export default router;