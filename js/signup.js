// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAWm9PFMR7_PehbYkJEZBigukPD8bsXsO8",
  authDomain: "firecloud-epn.firebaseapp.com",
  databaseURL: "https://firecloud-epn-default-rtdb.firebaseio.com",
  projectId: "firecloud-epn",
  storageBucket: "firecloud-epn.appspot.com",
  messagingSenderId: "605294220510",
  appId: "1:605294220510:web:b669f3d9426bbb77a69e4f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
var usuariosCollection = db.collection("usuarios");
console.log(usuariosCollection);

function registerUser(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Signed in
      var user = userCredential.user;
      console.log("User registered:", user);
      usuariosCollection
        .add({
          email: email,
          password: password, // Guardar la contraseña es una mala práctica por motivos de seguridad.
          // En lugar de guardar la contraseña, es recomendable manejarla con Firebase Authentication.
        })
        .then(function (docRef) {
          console.log("Usuario guardado en Firestore con ID:", docRef.id);
        })
        .catch(function (error) {
          console.error("Error guardando usuario en Firestore:", error);
        });
      // ...
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}
