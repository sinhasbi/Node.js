// 串流寫入
import { createWriteStream } from "fs";

// 開啟串流
const ws = createWriteStream("./測試連續寫入.txt");

ws.on("finish",()=>{
    console.log("全部寫入完成");
})

ws.write("葡萄美酒夜光杯，\r\n")
ws.write("欲飲琵琶馬上催。\r\n");
ws.write("醉臥沙場君莫笑，\r\n");
ws.write("古來征戰幾人回。\r\n");

// 關閉串流
ws.end();