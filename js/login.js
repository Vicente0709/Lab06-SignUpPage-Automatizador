// Initialize Firebase
var firebaseConfig = {
  // Aquí debes agregar la configuración de tu proyecto Firebase
  apiKey: "AIzaSyAWm9PFMR7_PehbYkJEZBigukPD8bsXsO8",
  authDomain: "firecloud-epn.firebaseapp.com",
  databaseURL: "https://firecloud-epn-default-rtdb.firebaseio.com",
  projectId: "firecloud-epn",
  storageBucket: "firecloud-epn.appspot.com",
  messagingSenderId: "605294220510",
  appId: "1:605294220510:web:b669f3d9426bbb77a69e4f",
};
firebase.initializeApp(firebaseConfig);

// Obtener referencias a los elementos del formulario
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Agregar un listener al formulario para capturar el evento de envío
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  var email = emailInput.value;
  var password = passwordInput.value;

  // Iniciar sesión con Firebase
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // El inicio de sesión fue exitoso
      var user = userCredential.user;
      alert("Credenciales correctas");
      //todo redirigir a la pagina principal
      window.location.href = "../views/index.html";
    })
    .catch(function (error) {
      // Ocurrió un error durante el inicio de sesión
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error en el inicio de sesión:", errorCode, errorMessage);
      // Mostrar el mensaje de error al usuario
      alert(
        "Error en el inicio de sesión. Por favor, verifica tus credenciales."
      );
    });
});
