import http from "http";
import { readFileSync } from "fs";
import {dirname, resolve, join} from "path";


const server = http.createServer((request, response) => {
  let {pathname} = new URL(request.url, "http://localhost");
  if(pathname === "/"){
    pathname = "/page1.html"
  }
  
  let filePath = resolve(import.meta.dirname, "pages", pathname.slice(1));
  let content;

  content = readFileSync(filePath);
  response.end(content);

  // if(pathname === "/favicon.ico"){
  //   response.setHeader("content-type", "text/html;charset=utf-8");
  //   response.end("<h1>讀不到檔案</h1>");
  // }else{
  //   response.setHeader("content-type", "text/html;charset=utf-8");
  //   response.end("<h1>讀不到檔案</h1>");
  // }
});

server.listen(9000, () => {
  console.log("伺服器已啟動於 http://localhost:9000");
});