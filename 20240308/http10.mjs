import http from "http"
import { readFileSync } from "fs";
import { dirname, resolve, join } from "path"



const server = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, "http://localhost");
    let filePath, content;
    
    // console.log(request.url);
    // console.log(pathname);

    // 分流 
    if (pathname === "/") {
        // 只有主要的要特別編譯，css js檔不用做
        response.setHeader('content-type', 'text/html;charset=utf-8');
        filePath = resolve(import.meta.dirname, "text2.html");
        content = readFileSync(filePath);
        response.end(content);
    } else if (pathname === "/text2.css") {
        filePath = resolve(import.meta.dirname, "text2.css");
        content = readFileSync(filePath);
        response.end(content);
    } else if (pathname === "/text2.js") {
        filePath = resolve(import.meta.dirname, "text2.js");
        content = readFileSync(filePath);
        response.end(content);
    } else {
        response.end(`<h1>找不到檔案</h1>`);
    }

})

server.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})