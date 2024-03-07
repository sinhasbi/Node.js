
const fs = require('fs');
for (let N = 1; N <= 20; N++) {
    fs.rename(`./work${N}.html`, `./work/work${N}.html`, (err) => {
        if (err) {
            console.log("更改失敗");
            return false;
        }
        console.log("更改成功");
    })
}
