// 創造模組方
const aaa="你好"

function sayMyName() {
    console.log("Benny");
}

function sayMyCountry() {
    console.log("Taiwan");
}

// 輸出方法一
// module.exports = {
//     sayMyName,
//     sayMyCountry
// };

// 輸出方法二 (少用)
// exports.sayMyName=sayMyName;
// exports.sayMyCountry=sayMyCountry;

module.exports = {
    sayMyName,
    sayMyCountry,
    aaa
};

// exports是一個物件