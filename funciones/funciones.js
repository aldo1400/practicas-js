// Las funciones son bloques de codigo reutilizables
// function nombreFuncion(parametros1,parametros2,parametros3) {    
// }


// 1. Definicion de funcion

function sumar(a, b) {
    return {
        a: a + 1,
        b: b + 1
    }
}

let saludo = sumar(7, 5);
console.log(saludo);

// 2.Funciones en Objetos

let obj = {
    nombre: 'objeto',
    sumar(a, b) {
        return a + b;
    }
}

let miOtraSuma = obj.sumar(2, 3);
console.log(miOtraSuma);


// Funcion dentro de otra funcion
function restar(a) {
    return function (b) {
        return a - b;
    }
}

let miResta = restar(5)(3);
// la primer pareentesis es para la funcion restar
// el segundo pareentesis es pra la funcion de adentro 
// tmabien funcion si coloco miResta(2);
console.log(miResta);

// Funciones autoinvocadas

let miMulti = (function multiplicar(a, b) {
    return a * b;
})(9, 30);
console.log(typeof miMulti);

// Funciones constructoras

let Pais = function (nombre, moneda) {
    this.nombre = nombre;
    this.moneda = moneda;
};


let peru = new Pais('peru', 'sol');
console.log(peru);

// apply() call()

function add(a,b,c){
    return a+b+c;
}

let numeros=[2,3,4];

// let myAdd=add(numeros);
// console.log(myAdd);

let myAdd=add.apply(undefined,numeros);
console.log(myAdd);
let myOtherAdd=addcall(undefined,2,3,4);
console.log(myOtherAdd);