import connection from "./db.mjs"
let id = 4;
let data;

(async () => {
    // data = await getData('SELECT * FROM `sort` WHERE `id` = ?',[id])
    data = await getData('SELECT * FROM `sort` WHERE `id` = ?',
        [id]).then(results => {
            // console.log(`results`);
            // console.log(results);
            return results[0]
        }).catch(error => {
            console.log("error");
            return undefined;
        })
    console.log(data);
    if (data) {
        // 有資料要做的事情
    }else{
        // 取不到資料或發生錯誤要做的事情
    }
})()



function getData(SQL, ary) {
    return new Promise((resolve, reject) => {
        connection.execute(
            SQL,
            ary,
            (error, results, fields) => {
                if (error) {
                    reject(error);
                    return false
                }
                resolve(results)

            }
        );
    })
}
