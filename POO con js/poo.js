// clases -> plantilla a partir de la cual se crean objetos
// instancia -> cada objeto creado a partir de una clase
// CONSTRUCTOR -> funcion que se ejecuta automaticamente al instanciar una clase
// propieda->valores
// metodos->funciones

// Funcion constructora en ES5
var Profesor=function(nombre,apellido,pais){
    this.nombre=nombre,
    this.apellido=apellido,
    this.pais=pais
}


var jon= new Persona('jon','mircha','mexico');
var alexys0= new Persona ('alexys','lozada','colombia');

console.log(jon);
console.log(alexys);

// Prototipo String
let string=new String('hola mundo');
console.log(string);

let string2='Hola mundo otra vez';
console.log(string2);

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

class Persona{
    constructor(nombre,apellido,pais){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
        this.nombreCompleto=`${nombre} ${apellido}`
    }
    saludar(){
        return `Hola soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }
}
;

const alexys=new Persona('Alexys','Lozada','Colombia');
const alexys=new Persona('Juan','Paredes','España');


console.log(alexys);
console.log(alexys.saludar());