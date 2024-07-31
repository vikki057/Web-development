let qrimage = document.getElementById("qrimage")
let image = document.getElementById("image")
let qrgenerator = document.getElementById("qrgenerator")

function generate(){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr.value;
}