let yo = {
    nombre: 'Aldo',
    edad: '20',
    pais: 'Perú',
    esPadre: true,
    hijos: ['Sofia', 'Alejandro']
}

// Se puede agregar propiedades+value, luego de la definicion del objeto
yo.ciudad = 'Lima';

const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexys', 'Daniel', 'Rafa', 'Jon', 'Francisco'],
    fundacion: 2010,
    mejorPlatforma: true,
    eslogan: 'Aprende desde cero',
    usp: 'Somos el primer sitio en español de Educacion',
    saludar() {
        return 'Bienvenidos a Escuela Digital.Te deseamos un feliz año nuevo'
    }
};

ED.comunidad = true;

console.log(ED);

// Operadores
// delete  ->elimina una propiedad
// in ->devuelve true si existe la propiedad en el objeto,incluye la herencia de propiedades

// delete ED.fundacion;
Object.prototype.numeroMagico = 27;
console.log('profesores' in ED);
// console.log(ED.numeroMagico);

// verifica si la propiedad eslogan esta en el objeto ED,no incluye la herencia de propiedades
console.log(ED.hasOwnProperty('comunidad'));


// ES6 con objetos

// Copiar independientemente un objeto

let ED2 = Object.assign({}, ED);
console.log(ED);

// Asignar variables existentes a propiedades

let a='hola',b='mundo';

let myObj={
    a,
    b
}

console.log(myObj);

// Expresiones en propiedades

let myObj2={
    [a+b]:'Hola mundo'
}

console.log(myObj2);