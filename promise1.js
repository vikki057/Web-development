let a = [3,23,"vivek","hello",32]
let b = new Promise((resolve,reject)=>{
    if(a.includes(23)&& a.includes("vivek")){
        resolve("true")
    }
    else{
        resolve("false")
    }
})

b.then((message)=>{
    console.log(message)
})

.catch((error)=>{
    console.log(error)
})