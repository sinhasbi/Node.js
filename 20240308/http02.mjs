import http from "http";
// http物件
const serve = http.createServer((request, response) => {
    // 這三個就是headers的第一行

    // GET/POST/DELETE
    // console.log(request.method);
    // 路徑與網址參數
    // console.log(request.url);
    // 版本
    // console.log(request.httpVersion);

    console.log(request.headers);

    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end("HI");
});

serve.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
});