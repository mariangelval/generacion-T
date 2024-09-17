// Seleccionar el body
const body = document.querySelector('body');

// Crear una variable para saber si el mouse está presionado
let estaPresionado = false;

// Evento para detectar cuando se presiona el mouse
body.addEventListener('mousePresionado', function() {
    estaPresionado = true;
});

// Evento para detectar cuando se suelta el mouse
body.addEventListener('mouse', function() {
    estaPresionado = false;
});

// Evento para mover la imagen si el mouse está presionado
body.addEventListener('mousemove', function(event) {
    // Solo mover la imagen si el mouse está presionado
    if (estaPresionado) {
        const img = document.querySelector('.mouse');
        img.style.top = event.clientY + 'px';
        img.style.left = event.clientX + 'px';
    }
});
