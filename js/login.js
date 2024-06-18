document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".glass-form");
    
    form.addEventListener("submit", (event) => {
        const user = form.querySelector("input[type='text']");
        const password = form.querySelector("input[type='password']");
        let valid = true;
        
        if (!user.value || user.value.length < 8 || user.value.length > 12) {
            alert("El usuario debe tener entre 8 y 12 caracteres.");
            valid = false;
        }
        
        if (!password.value || password.value.length < 8 || password.value.length > 15 || 
            !/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/\d/.test(password.value)) {
            alert("La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una mayúscula, una minúscula y un dígito.");
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault();
        }
    });
});
