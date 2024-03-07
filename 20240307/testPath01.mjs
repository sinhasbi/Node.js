import { resolve, sep, parse, basename, dirname,extname,join} from "path"
import { fileURLToPath } from "url";

// resolve 組合路徑用的
// console.log(resolve("aaa.txt"));
// C:\Users\iii_student\Desktop\Node.js\20240307\aaa.txt

// console.log(sep);
//   \


// console.log(import.meta.url);
// file:///C:/Users/iii_student/Desktop/Node.js/20240307/testPath01.mjs

// 路徑的物件 各種檔案解析
// console.log(parse(import.meta.url));
// {
//     root: '',
//     dir: 'file:///C:/Users/iii_student/Desktop/Node.js/20240307',
//     base: 'testPath01.mjs',
//     ext: '.mjs',
//     name: 'testPath01'
//   }


// console.log(fileURLToPath(import.meta.url));
// C:\Users\iii_student\Desktop\Node.js\20240307\testPath01.mjs

// console.log(import.meta.dirname);
// console.log(import.meta.filename);



// 取的完整檔名
// console.log(basename(import.meta.filename));
// testPath01.mjs
// 也可以這樣方式取得basename
// console.log(parse(import.meta.filename));

// 取得路徑名稱
// console.log(dirname(import.meta.filename));
// 也可用這個方式取得dirname
// console.log(dirname(import.meta.filename).dir);

// 取得副檔名
// console.log(extname(import.meta.filename));
// 也可用這個方式取得副檔名
// console.log(parse(import.meta.filename).ext);


// 獲取完整路徑
// 想讀取測試寫入2的完整路徑與內容
// console.log(resolve("測試寫入2.txt"));
// C:\Users\iii_student\Desktop\Node.js\20240307\測試寫入2.txt
// 也可以用這個方式取得路徑
// 加上  ./  一樣
// console.log(resolve(import.meta.dirname,"測試寫入2.txt"));
console.log(join(import.meta.dirname,"測試寫入2.txt"));


// resolve join為最大宗
