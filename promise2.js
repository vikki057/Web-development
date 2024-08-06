function isgreaterthan(number) {
     return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("number is greater than 10");
    } else {
      reject("number is smaller than 10");
    }
  });
}

isgreaterthan(13)
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    
})

isgreaterthan(7)
.then((message)=>{
  console.log(message);
})
.catch((error)=>{
  console.log(error);
  
})

