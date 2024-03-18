let t1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("函數 1 的執行結果");
            resolve();
        }, 2000)
    })

}

let t2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("函數 2 的執行結果");
            resolve();
        }, 4000)
    })

}

let t3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("函數 3 的執行結果");
            resolve();
        }, 1000)
    })

}

// 立即執行函數+箭頭函示
(async () => {
    await t1()
    await t2()
    await t3()
})()

// (async () => { })()

// async function doThing(){
//     await t1()
//     await t2()
//     await t3()
// }
// 記得最後要執行async的function
// doThing();
