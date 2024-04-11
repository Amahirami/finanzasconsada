
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();

    // Validar los campos
    if (nombre === "" || telefono === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return; 
    }

   
    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
        return; // Detener el proceso si el teléfono no tiene 10 dígitos
    }

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return; // Detener el proceso si el correo no es válido
    }

   
    var aceptaTerminos = document.getElementById("terminosCondiciones").checked;


    if (!aceptaTerminos) {
        alert("Debes aceptar los términos y condiciones para continuar.");
        return; // Detener el proceso si los términos no fueron aceptados
    }

    // Si todos los campos son válidos,enviar el formulario
  
     alert("Registro realizado con éxito. ¡Te contactaremos en breve!");
    });

});