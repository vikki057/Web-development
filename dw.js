let hours = document.getElementById("hours")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

setInterval(function(){
    let time = new Date();
    hours.innerHTML = (time.getHours()<10 ? "0":"")+ time.getHours() ;
    minute.innerHTML = (time.getMinutes()<10 ? "0":"")+ time.getMinutes() ;
    second.innerHTML = (time.getSeconds()<10 ? "0":"") + time.getSeconds() ;
},1000)