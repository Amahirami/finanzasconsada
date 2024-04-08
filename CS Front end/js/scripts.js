
/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    // Detenemos el envío del formulario por defecto
    event.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();

    // Validar los campos
    if (nombre === "" || telefono === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return; // Detener el proceso si hay campos vacíos
    }

    // Validar número de teléfono (debe tener exactamente 10 dígitos)
    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
        return; // Detener el proceso si el teléfono no tiene 10 dígitos
    }

    // Validar formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return; // Detener el proceso si el correo no es válido
    }

    // Obtener el estado de aceptación de términos y condiciones
    var aceptaTerminos = document.getElementById("terminosCondiciones").checked;

    // Validar si se aceptaron los términos y condiciones
    if (!aceptaTerminos) {
        alert("Debes aceptar los términos y condiciones para continuar.");
        return; // Detener el proceso si los términos no fueron aceptados
    }

    // Si todos los campos son válidos, puedes enviar el formulario
    // Puedes agregar aquí la lógica para enviar los datos al servidor si lo deseas
    alert("Registro realizado con éxito. ¡Te contactaremos en breve!");

    // Puedes reiniciar el formulario si lo deseas
    // document.getElementById("miFormulario").reset();
});