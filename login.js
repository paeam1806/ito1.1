// login.js

// Lista de usuarios y contraseñas (puedes agregar más usuarios aquí)
const users = [
    { username: "admin", password: "admin" },
    { username: "usuario1", password: "password1" },
    { username: "usuario2", password: "password2" }
];

// Obtenemos el formulario y los elementos del DOM
const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de la forma tradicional

    // Obtener el nombre de usuario y la contraseña introducidos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario y la contraseña coinciden
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Si las credenciales son correctas, redirigir a la página principal
        window.location.href = "pagina_protegida.html"; // Redirige a una página protegida
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        errorMessage.style.display = "block";
    }
});
