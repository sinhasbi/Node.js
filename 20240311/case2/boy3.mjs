// 重新命名導出
const aa=()=>{
    console.log("Benny");
}

const bb=()=>{
    console.log("Taiwan");
}

export{
    aa as sayMyName,
    bb as sayMyCountry
}