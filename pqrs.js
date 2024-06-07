// Obtener elementos del DOM
const modal = document.getElementById("pqrsModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const pqrsForm = document.getElementById("pqrsForm");
const otherButton = document.getElementById("otherButton");

// Abrir modal al hacer clic en el botón "Abrir Modal PQRS"
openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

// Cerrar modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Enviar formulario al hacer clic en el botón "Enviar"
pqrsForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    // Aquí puedes agregar el código para enviar el formulario (por ejemplo, mediante AJAX)
    // Una vez enviado el formulario, puedes cerrar el modal si lo deseas
    modal.style.display = "none";
});

// Ejemplo de función para el otro botón
otherButton.onclick = function() {
    // Agregar aquí el código que deseas que se ejecute al hacer clic en el otro botón
    console.log("Se hizo clic en el otro botón");
}
