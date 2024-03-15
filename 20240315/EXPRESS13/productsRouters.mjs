import express from "express";
const router = express.Router()

router.get("", (req, res) => {
    res.send("產品頁面")
})

router.get("/:id", (req, res) => {
    res.send("某個產品頁面")
})
export default router;