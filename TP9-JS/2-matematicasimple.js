/*
En este ejercicio deberás crear:
Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.
Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.
Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.
Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.
Por último, calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3.
⚠ Importante: Usá solamente las funciones que escribiste antes, sin otros operadores.
*/

function triplicador(num) {
    return num * 3;
}


function multiplicador(num1, num2) {
    return num1 * num2;
}


function division(num1, num2) {
    return num1 / num2;
}


function resto(num1, num2) {
    return num1 % num2;
}


let resultadoTriplicar = triplicador(5); 
let resultadoMultiplicar = multiplicador(resultadoTriplicar, 12); 
let resultadoDivision = division(resultadoMultiplicar, 12); 
let resultadoFinal = resto(resultadoDivision, 3); 

console.log(resultadoFinal); 
