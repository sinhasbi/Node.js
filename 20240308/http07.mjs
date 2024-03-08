import http from "http"

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.statusCode=200;
    response.statusMessage="NO PAGE!!!!" //不建議更動預設值
    response.setHeader("Server","BEN SERVER")
    response.write("test1 <br>")
    response.write("test2 <br>")
    response.write("test3 <br>")
    response.end("<h1>你好主機</h1>");
})

server.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})