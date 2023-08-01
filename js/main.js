var logout = document.getElementById("logoutButton");
logout.addEventListener("click", logoutSession);



var add = document.getElementById("btnAgregar");
add.addEventListener("click", agregar);

var total= localStorage.length;
var n = -1;

window.addEventListener("load", function () {
  var tabla = document.getElementById("sessionStorage");
  tabla.rows[1].cells[0].textContent = sessionStorage.getItem("correo");




});

function logoutSession(event) {
  event.preventDefault();
  window.location.href = "login.html";
}

function session(event) {

  var tabla = document.getElementById("sessionStorage");
  tabla.rows[1].cells[0].textContent = sessionStorage.getItem("correo");

}

function agregar(event) {
  event.preventDefault();

  var tabla = document.getElementById("localStorage");
  var name = "item" + (n + 1);
  n++;

  localStorage.setItem(
    name,
    document.getElementById("nuevoLocalStorage").value
  );
  // Acceder a las filas y celdas y realizar los cambios necesarios
  tabla.rows[1].cells[0].textContent =
    document.getElementById("nuevoLocalStorage").value;
}
