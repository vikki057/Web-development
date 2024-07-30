let pass = document.getElementById("password")
let image = document.getElementById("show")

image.onclick = function(){
    if(pass.type === "password"){
        pass.type = "text"
        image.src = "hide.png"
    }
    else{
        pass.type = "password"
        image.src = "open.jpeg"
    }
}