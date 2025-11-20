function saludar() {
    document.getElementById('resultado')
        .textContent = '¡Hola desde CI/CD y Docker! 🎉';
}

function sumar(a, b) {
    return a + b;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar };
}
