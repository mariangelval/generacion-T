/*
contarDeA_n
En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a.
*/
function contarDeA_n(contar_de_a, contar_hasta) {
    for (let i = contar_de_a; i <= contar_hasta; i += contar_de_a) {
        console.log(i);
    }
}

contarDeA_n(2, 14);

