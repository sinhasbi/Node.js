import http from "http"

const server = http.createServer((request, response) => {
    // 官方文件推薦方法
    // 從URL物件解析網址參數
    const url = new URL(request.url, "http://localhost"); 
    if (url.pathname !== "/favicon.ico") {
        // console.log(url);
        // 網址參數的東西
        console.log(`name = ${url.searchParams.get("name")}`);
        console.log(`pwd = ${url.searchParams.get("pwd")}`);
    }
    
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end("你好 主體");
})

server.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})