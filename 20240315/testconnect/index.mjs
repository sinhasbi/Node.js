import mysql from "mysql2"

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'hasbi',
    password: 'group354321',
    database: 'nodejs'
});

connection.query(
    'SELECT * FROM `sort`',
    (error, results,fields) => {
        console.log(error);
        console.log(results);
        console.log(fields);
    }
)