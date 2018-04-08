// Tipo de funciones

// Funciones por definicion y por expresion

function funcionPorDefinicion() {
    // cuerpo de la funcion
}
funcionPorDefinicion();

let funcionPorExpresion = function () {
    // cuerpo de la funcion
};

funcionPorExpresion();

let c = console.log;
c('hola mundo, desde tipo_funciones.js');

// Funciones nombradas y funciones anonimas

// Callbacks= una funcion que es ejcutada por otra luego de un proceso

// el.addEventListener('click',function () {
// hacer algo
// });


// Funciones de flecha (arrow functions) ES6 
// Son funciones anominas
// (param1,param2,param3)=>valordeRetorno

let suma1 = (a, b) => a + b;
let miSuma = suma1(1, 2);
c(miSuma);

// let potencia = (a) => {
//     if (typeof a == 'number') {
//         return a * a;
//     }
// }
// Refactorizando el codigo anterior

// Usando funciones anonimas

// let potencia=function (a){
//     if(typeof a =='number'){
//         return a*a;
//     }
//     return undefined;
// }

let potencia = (a) => (typeof a == 'number') ? a * a : undefined;

let miPotencia = potencia(7);
c(miPotencia);

// para devolver objetos , debes colocarlo entre parentesis ({objeto})
let myObj = (a, b) => ({
    a,
    b
})
let myCustomObj = myObj('hola', 'mundo');
c(myCustomObj);


// Parametros y Argumentos

function sumarTodos(a, b, c) {
    return [...arguments].reduce((a, b) => a + b);
}

console.log(sumarTodos(2, 3, 4, 5, 6, 7, 10, 20));

// Si hay mas parametros que argumentos, los argumentos faltantes son undefined
// Si hay mas argumentos que parametros , no devuelve error

// [] Spread operator -Operador de propragacion ,convierte los propiedades de un objeto a elementos unicos o a un array 


// Parametros por defecto

function sumar(a, b = 7) {
    return a + b;
}

console.log(sumar(1));


// Parametros rest

function sumarTodosFinal(...elements) {
    return elements.reduce((a, b) => a + b);
}

console.log(sumarTodosFinal(1, 2, 3, 45, 60));

// Scope es el ambito o contexto donde se ejecuta una funcion y exitsen sus variables

function sumarAdd(z) {
    return function (y) {
        return y + z;
    }
}

let miSumaReal = sumarAdd(5)(10);
console.log(miSumaReal);



// CLOSURES
function saludar() {
    let saludo = 'Hola';
    return function saludarInterno(amigo) {
        console.log(`${saludo} ${amigo}`); //Template strings
    }
}

let miSaludo = saludar(); // El valor de miSaludo sera el retorno de la funcion saludar()
// let miSaludo=saludar; El valor de miSaludo sera la funcion saludar.
miSaludo('Alexys');
miSaludo('Jorge');

let persona = 'Aldo';
miSaludo('Miguel');


function sumarPlus(){
    let num=1;
    return function (){
        num++;
        console.log(num);
    }
}

let miSumaPlus=sumarPlus();
// Al obtener miSumaPlus la funcion de retorno ,el valor de num continuara aumentando, ya que ha referenciado esta funcion
miSumaPlus();//2
miSumaPlus();//3
miSumaPlus();//4
// Esta funcion no suma porque en la funcion sumarPlus se reinicia el valor de num en 1
sumarPlus()();//2
sumarPlus()();//2
sumarPlus()();//2



let myObjeto={
    nombre:'desde this',
    saludar(){
        return console.log(`Hola ${this.nombre}`);
    }
}

myObjeto.saludar();

function checkThis() {
    console.log(this);
}

checkThis();

function boy(edadActual){
    this.edad=edadActual;
    setInterval(()=>{this.edad++},1000);
}

let juanito=new boy('25');


