document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí puedes agregar la lógica de validación de login o de envío de datos al servidor

        // Si la validación es exitosa, redirige a index.html
        window.location.href = 'index.html';
    });
});