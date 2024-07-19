// function hello() {
//     document.getElementById("click").style.color="white"
//   document.getElementById("click").style.backgroundColor = "black";
// }

let passwordbox = document.getElementById("password")
let length = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "1234567890"
let special = "!@#$%^&*()_+-={}[]:'./,<>?"

let allchar = uppercase + lowercase + numbers + special;

function createpassword(){
    let password = "";

    password += uppercase[Math.floor(Math.random()* uppercase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += special[Math.floor(Math.random()* special.length)];

    while(length>password.length){
        password += allchar[Math.floor(Math.random()*allchar.length)];
    }
    passwordbox.value = password;
}
