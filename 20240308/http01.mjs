import http from "http";
// http物件
const serve = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end("你好，這是主機");

})

serve.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})