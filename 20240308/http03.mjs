import http from "http"

const server = http.createServer((request, response) => {
    // 請求主體 body
    // GET 不會有請求的主體
    // 目前而言，POST送出FORM才有請求的主體 (POSTMAN送出)
    // 這個檔案只是做觀察，將來還有其他方法
    let body = ""
    
    request.on("data", (chunk) => {
        body += chunk
    })
    request.on("data", (chunk, err) => {

    })

    request.on("end", () => {
        console.log(body);
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.end("HI");
    })



})

server.listen(9000, () => {
    console.log("伺服器已啟動: http://localhost:9000/");
})