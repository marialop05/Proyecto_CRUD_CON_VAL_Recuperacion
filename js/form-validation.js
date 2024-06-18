document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            const name = form.querySelector("input[name='name'], input[name='firstName']");
            const surname = form.querySelector("input[name='surname'], input[name='lastName']");
            const team = form.querySelector("input[name='team']");
            const email = form.querySelector("input[type='email'], input[name='address']");
            const position = form.querySelector("select[name='ciclo']");
            const gender = form.querySelectorAll("input[name='sex']");
            const phone = form.querySelector("input[name='phone']");
            const infoCheckbox = form.querySelector("input[type='checkbox']");
            let valid = true;

            if (!name.value.trim()) {
                alert("El campo de nombre no puede estar vacío.");
                valid = false;
            }
            
            if (surname.value.length < 3) {
                alert("El apellido debe tener al menos 3 caracteres.");
                valid = false;
            }

            const phonePattern = /^[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{3}$/;
            if (!phonePattern.test(phone.value)) {
                alert("El teléfono debe tener el formato XXX-XX-XXX.");
                valid = false;
            }

            if (!/^\d+$/.test(phone.value) || phone.value < 100 || phone.value > 999) {
                alert("El teléfono debe ser un número entre 100 y 999.");
                valid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                alert("Introduce una dirección de correo electrónico válida.");
                valid = false;
            }

            if (position.value === "") {
                alert("Debe seleccionar una posición.");
                valid = false;
            }

            if (![...gender].some(radio => radio.checked)) {
                alert("Debe seleccionar un género.");
                valid = false;
            }

            if (infoCheckbox && !infoCheckbox.checked) {
                alert("Debe aceptar recibir información.");
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    });
});


