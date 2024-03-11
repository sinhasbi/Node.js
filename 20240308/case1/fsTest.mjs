import * as fs from "fs"

const data=fs.readFileSync('./test.txt')

console.log(data.toString());