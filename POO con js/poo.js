// clases -> plantilla a partir de la cual se crean objetos
// instancia -> cada objeto creado a partir de una clase
// CONSTRUCTOR -> funcion que se ejecuta automaticamente al instanciar una clase
// propieda->valores
// metodos->funciones

// Funcion constructora en ES5
// var Persona = function (nombre, apellido, pais) {
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.pais = pais
//         this.bienvenida=function(){
//             return console.log('HOLa'+this.nombre);
//         }
// }

// var jon = new Persona('jon', 'mircha', 'mexico');
// jon.bienvenida();


// var alexys0 = new Persona('alexys', 'lozada', 'colombia');

// console.log(jon);
// console.log(alexys);

// // Prototipo String
// let string = new String('hola mundo');
// console.log(string);

// let string2 = 'Hola mundo otra vez';
// console.log(string2);

// const jon = {
//     nombre: 'Jon',
//     apellido: 'Mircha',
//     cursos: ['Node.js', 'React.js'],
//     pais: 'mexico'
// };

// const alexys = {
//     nombre: 'Alexys',
//     apellido: 'Lozada',
//     cursos: ['SQL', 'Java','Go'],
//     pais: 'Colombia'
// };

// CLASES EN ES6

class Persona {
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`
    }
    saludar() {
        return `Hola soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }

    static describirPersona(persona){
        return `Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`;
    }
};

class Profesor extends Persona {
    constructor(nombre, apellido, pais, curso) {
        super(nombre, apellido, pais);
        this.cursos = curso;

    }
    invitarAlCurso() {
        return `Hola soy ${this.nombreCompleto} , profesor en Escuela Digital y te invito al curso ${this.cursos}.
        !Nos vemos en clases`;

    }
}


const alexys = new Persona('Alexys', 'Lozada', 'Colombia');
const Juan = new Persona('Juan', 'Paredes', 'España');
const daniel = new Profesor('Daniel', 'Romero', 'Colombia', 'PHP desde Cero');


console.log(alexys);
console.log(daniel.saludar());
console.log(daniel.invitarAlCurso());

console.log(Persona.describirPersona(Juan));

Persona.prototype.propiedadEstatica='valor de la propiedad';//Propiedad estatica
console.log(daniel.propiedadEstatica);