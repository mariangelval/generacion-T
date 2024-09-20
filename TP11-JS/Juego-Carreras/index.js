// Seleccionar los elementos
const autoRojo = document.getElementById('autoRojo');
const autoAzul = document.getElementById('autoAzul');

// Acumuladores
let acumuladorRojo = 0;
let acumuladorAzul = 0;

// Ancho de la pista
const anchoPista = document.querySelector('.pista').clientWidth;

// Evento keyup
window.addEventListener('keyup', function(event) {
    if (event.key === 'a') { // Tecla para el auto rojo
        acumuladorRojo += 10; // Incremento en el movimiento
        autoRojo.style.marginLeft = acumuladorRojo + 'px';
        
        // Verificar si el auto rojo ganó
        if (acumuladorRojo + 100 >= anchoPista) {
            alert('¡El auto rojo ganó la carrera!');
            resetCarrera(); // Reinicia la carrera
        }
    }

    if (event.key === 'l') { // Tecla para el auto azul
        acumuladorAzul += 10; // Incremento en el movimiento
        autoAzul.style.marginLeft = acumuladorAzul + 'px';
        
        // Verificar si el auto azul ganó
        if (acumuladorAzul + 100 >= anchoPista) {
            alert('¡El auto azul ganó la carrera!');
            resetCarrera(); // Reinicia la carrera
        }
    }
});

// Función para reiniciar la carrera
function resetCarrera() {
    acumuladorRojo = 0;
    acumuladorAzul = 0;
    autoRojo.style.marginLeft = '0px';
    autoAzul.style.marginLeft = '0px';
}
