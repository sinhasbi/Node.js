// mines
import http from "http"
import { readFileSync } from "fs";
import { dirname, resolve, join, extname } from "path"

const mines = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    ico:"image/x-icon",
    mp4: 'video/mp4',
    // 沒有mp4就變成下載了
    mp3: 'audio/mpeg',
    json: 'application/json'

};

// 物件取值方法
// mines.html;
// mines["html"]  

const server = http.createServer((request, response) => {
    let content;
    let { pathname } = new URL(request.url, "http://localhost");
    console.log(pathname);

    if (pathname === '/') {
        pathname = "/index.html"
    }
    let root = "pages";
    if (process.argv[2] === "p") {
        root = "public";
    }
    let filePath = resolve(import.meta.dirname, root, pathname.slice(1));


    // 取得副檔名
    const ext = extname(filePath).slice(1).toLowerCase();
    const type = mines[ext];
    // console.log(type);

    if (type) {
        if (ext === "html") {
            response.setHeader('content-type', type+";charset=utf-8");
        } else{
            response.setHeader('content-type', type);
        }
        
    } else {
        response.setHeader('content-type', " application/octet-stream ");
    }


    try {
        content = readFileSync(filePath);
        response.end(content);
    } catch (err) {

        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.statusCode = 500
        response.end(`<h1>找不到檔案</h1>`);
    }



})
server.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})