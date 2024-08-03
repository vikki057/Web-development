setInterval(() => {
    let current = new Date();
    let future = new Date(current.getFullYear(),7,4,23,59,59);
    let diff = (future-current)/1000;
    let countdown =    `${Math.floor(diff/86400)}days |
     ${Math.floor(diff%86400/3600)}hours | 
     ${Math.floor(diff%3600/60)}min | 
     ${Math.floor(diff%60)}sec ` 
     document.getElementById("countdown").innerHTML = countdown;
}, 500);
