import http from "http";

import { readFileSync } from "fs";
import { dirname, resolve, join } from "path";

// 比較正確的路徑
// 去明白resolve,join差別
// console.log(resolve('..',"text.html"));

// const filePath=resolve(__dirname,"text.html");
const filePath = resolve(import.meta.dirname, "text.html");
// 49的程式碼__dirname 去取得import.meta.dirname(新屬性)
// console.log(join('..',"text.html"));

const htmlContent = readFileSync(filePath);
// console.log(htmlContent.toString());

// 讀取外部檔案，回應給瀏覽器
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");

  response.end(htmlContent);
});

server.listen(9000, () => {
  console.log("伺服器已啟動: http://localhost:9000/");
});
