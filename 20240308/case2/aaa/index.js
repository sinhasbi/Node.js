// 使用模組方
const boy = require("./boy.js")
// 上方可以省略.js (預設就是讀.js)
// 不能省略 ./
const boy2 = require("./boy.json")
boy.sayMyName();
boy.sayMyCountry();
console.log(boy.aaa);
console.log(boy2.name);