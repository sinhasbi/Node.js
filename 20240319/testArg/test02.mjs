// 環境參數
// 金鑰 (MAIL,)API
// process.env.MY_NAME="HASBI";
// console.log(process.env);

import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config();

console.log(process.env.USER1);

const connection = await mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER1,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const [rows] = await connection.execute('SELECT * FROM `sort`');

console.log(rows);