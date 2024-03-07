import { readFileSync } from "fs";



try {
    const data = readFileSync("./測試連續寫入1.txt");
    console.log(data.toString());
} catch (err) {
    console.log("讀取失敗");
}

