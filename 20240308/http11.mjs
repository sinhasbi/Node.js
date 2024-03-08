// 算是完整的網站了
import http from "http"
import { readFileSync } from "fs";
import { dirname, resolve, join } from "path"



const server = http.createServer((request, response) => {
    let { pathname } = new URL(request.url, "http://localhost");

    if (pathname === '/') {
        pathname = "/index.html"
    }

    let root="pages";

    if(process.argv[2]==="p"){
        root="public";
    }
    // let filePath = resolve(import.meta.dirname, "pages", pathname.slice(1));
    let filePath = resolve(import.meta.dirname, root, pathname.slice(1));
    let content;

    // console.log(request.url);
    // console.log(pathname);

    try {
        content = readFileSync(filePath);
        response.end(content);
    } catch (err) {
        // 特定回應之類的需要一個獨立的頁面
        // 還是需要setHeader
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.statusCode = 500
        response.end(`<h1>找不到檔案</h1>`);
    }

    // 分流 http06
    // if (pathname === "/page1.html") {
    // 只有主要的要特別編譯，css js檔不用做
    // 原本html就有了
    // response.setHeader('content-type', 'text/html;charset=utf-8');

    //     } else if (pathname === "/page1.css") {
    //         content = readFileSync(filePath);
    //         response.end(content);
    //     } else if (pathname === "/page1.js") {
    //         content = readFileSync(filePath);
    //         response.end(content);
    //     }
    //     else if (pathname === "/images/bg.jpg") {
    //         content = readFileSync(filePath);
    //         response.end(content);
    //     } else if (pathname === "/favicon.ico") {
    //         response.end(`<h1>找不到檔案</h1>`);
    //     } else {
    //         response.end(`<h1>找不到檔案</h1>`);
    //     }

})
server.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})