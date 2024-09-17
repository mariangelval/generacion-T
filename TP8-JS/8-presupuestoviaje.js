// Almacená en una Variable la cantidad de días que vas a estar de viaje. 
let diasDeViaje = 10; 

// Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.
let presupuestoMaximo = 500000; 

// Declará la Variable comida.
let comidasPorDia = 3;

// Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.
let totalComidas = comidasPorDia * diasDeViaje; 

// Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
let promedioComida = presupuestoMaximo / totalComidas;

// Mostrá el resultado en un alert: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".
alert("Puedes gastar $" + promedioComida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
