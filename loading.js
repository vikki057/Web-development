let a = 0;
let i = setInterval(hello, 1000);
function hello() {
  a = a + 50;
  if (a == 350) {
    clearInterval(i);
  } else {
    let target = document.getElementById("second");
    target.style.width = a + "px";
  }
}
