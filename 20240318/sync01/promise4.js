let a;
console.log("開始");

// Promise兩個參數，resolve為成功的cb，reject為失敗的cb
// then()接住resolve的結果
// catch()接住reject的寫法
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 10
        console.log("事件進行中");
        resolve();
    }, 1000)
}).then(() => {
    console.log("結束,a+a=" + (a + a));
})



