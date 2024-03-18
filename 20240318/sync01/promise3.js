let a;
console.log("開始");

// setTimeOut的第三個參數，可以執行另外一個function
setTimeout((after) => {
    a = 10
    console.log("事件進行中");
    after();
}, 1000, end)

function end() {
    console.log("結束,a+a=" + (a + a));
}
