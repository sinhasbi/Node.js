import http from "http";
import { readFileSync } from "fs";
import {dirname, resolve, join} from "path";


const server = http.createServer((request, response) => {
  const {pathname} = new URL(request.url, "http://localhost");
  let filePath, content;

  response.setHeader("content-type", "text/html;charset=utf-8");

  if(pathname === "/"){
    filePath = resolve(import.meta.dirname, "test2.html");
    content = readFileSync(filePath);
    response.end(content);
  }else if(pathname === "/test2.css"){
    filePath = resolve(import.meta.dirname, "test2.css");
    content = readFileSync(filePath);
    response.end(content);
  }else if(pathname === "/test2.js"){
    filePath = resolve(import.meta.dirname, "test2.js");
    content = readFileSync(filePath);
    response.end(content);
  }else{

  }
});

server.listen(9000, () => {
  console.log("伺服器已啟動於 http://localhost:9000");
});