const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
function col1() {
  document.getElementById("column1").style.backgroundColor = "Pink";
  document.getElementById("column1").textContent = "Changed to Pink";
}

function col2() {
  document.getElementById("column2").style.backgroundColor = "Red";
  document.getElementById("column2").textContent = "Changed to Red";
}

button1.addEventListener("click", col1);
button2.addEventListener("click", col2);
