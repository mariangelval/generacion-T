// Almacená tu edad en una Variable.
let edadActual = 18;

// Guardá tu edad máxima en otra Variable. 
let edadMaxima = 90; 

// Declará una Variable con el nombre de tu snack favorito.
let snackFavorito = "Doritos"; 

// Estimamos cuántos snacks por día
let snacksPorDia = 2; 

// Calculamos cuántos días quedan hasta llegar a la edad máxima
let diasRestantes = (edadMaxima - edadActual) * 365; 

// Calculamos cuántos snacks se necesitarán de por vida
let snacksRestantes = diasRestantes * snacksPorDia;

// Mostramos el resultado en un alert
alert("Necesitarás " + snacksRestantes + " " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

// Agregamos un precio por unidad y calculamos el costo total
let precioUnitario = 4065; 
let costoTotal = snacksRestantes * precioUnitario;

// Mostramos el costo total en un alert
alert("Gastarás un total de $" + costoTotal + " en " + snackFavorito + " por el resto de tu vida.");
