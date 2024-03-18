import connection from "./db.mjs"
let id = 4;
let data;
connection.execute(
    'SELECT * FROM `sort` WHERE `id` = ?',
    [id],
    (error, results, fields) => {
        if (error) {
            console.log(error);
            return false
        }
        // console.logr(results);
        data = results;
        // console.log(fields);
        
    }
);
