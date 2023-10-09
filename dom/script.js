function changeBg() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.querySelector("h1").style.backgroundColor = "#" + randomColor;
}
btn.addEventListener("click", changeBg); 
changeBg();

function remove() {
  document.querySelector("#move").style.display = "none"
}