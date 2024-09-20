var colorInput = document.getElementById('colorInput');
var body = document.body;

const coloresPrimarios = {
    "rojo" : "red",
    "amarillo" : "yellow",
    "azul" : "blue",
    "red": "red",
    "blue": "blue",
    "yellow" : "yellow"
};

colorInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const color = colorInput.value.toLowerCase();
        if (coloresPrimarios[color]) {
            body.style.backgroundColor = coloresPrimarios[color];
        }
    }
});

colorInput.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        body.style.backgroundColor = 'white'; // Cambiar a blanco
    }
});