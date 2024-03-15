import ejs from "ejs"
import { readFileSync } from "fs"
import { resolve } from "path"
const __dirname = import.meta.dirname
const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
// let str="<ul>"

// blackpink.forEach(name=>{
//     str+=`<li>${name}</li>`
// })
// str+="<ul>"

// ejs寫法

const template = readFileSync(resolve(__dirname, "template02.html")).toString();
const result = ejs.render(template,{ blackpink })

console.log(result);