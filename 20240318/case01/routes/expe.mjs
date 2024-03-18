import express from "express";
import moment from "moment"
import connection from "../db2.mjs"
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  const date = moment().format("YYYY-MM-DD");
  // res.send('導向今天的日期');
  res.redirect(`/expe/d/${date}`)
});

// 把資料庫東西傳進來
router.get('/d/:date', async (req, res, next) => {
  // res.send("讀取指定日期的所有消費");
  const date = req.params.date;
  let sql = 'SELECT * FROM `sort`'
  // 不會顯示系統錯誤碼.catch(error => [undefined])
  let [sorts] = await connection.execute(sql).catch(error => [undefined])

  // 顯示指定日期的消費
  sql = 'SELECT * FROM `expense` WHERE `date`= ?'
  let dataAry=[date]
  let[data]=await connection.execute(sql,dataAry).catch(error => [[]]);
  // console.log(data);
  res.render("index", { date, sorts ,data})
});

// 表單送出
router.post('/', async (req, res, next) => {
  // res.send('新增指定日期的一筆消費');
  // let title = "飯糰";
  // let sort = 1;
  // let money = 30;
  // let date = "2024-03-18";
  const { title, sort, money, date } = req.body

  let sql = "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);"
  let dataAry = [title, sort, money, date]
  let [results, fields] = await connection.execute(sql, dataAry);
  // console.log(results);
  if (results && results.insertId) {
    res.redirect(`/expe/d/${date}`)
  } else {
    res.status(500).send("寫入失敗")
  }

});

router.put('/', (req, res, next) => {
  res.send('修改指定日期的一筆消費');
});

router.delete('/', (req, res, next) => {
  res.send('刪除指定日期的一筆消費');
});


export default router
