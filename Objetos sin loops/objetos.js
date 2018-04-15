let estudiantes = [{
        nombre: 'Carlos',
        calificacion: 20
    },
    {
        nombre: 'Juan',
        calificacion: 12
    },
    {
        nombre: 'Maria',
        calificacion: 9
    },
    {
        nombre: 'Pepe',
        calificacion: 7
    },
    {
        nombre: 'Arturo',
        calificacion: 17
    },
]

console.log(estudiantes[1]);


// .map(callback)
// Transforma cada elemento del array segun el callback

// Obtener el nombre de los estudiantes

let nombresEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombresEstudiantes);

// .filter();
// Filtrar los elementos de una array, devuelve un nuevo array

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion > 10);
console.log(estudiantesAprobados);

let nombreEstudiantesA = estudiantesAprobados.map(es => es.nombre);
console.log(nombreEstudiantesA);


// .reduce(cb(prev,current,[i,array]),[initial]));
// previo=>el resultado devuelto por una ejeucion anterior 
// current=>el resultado de la ejecucion actual
// i=>indice del array
// array=>array

let numeros = [2, 4, 6, 8, 10];
let suma = numeros.reduce((a, b) => a + b);
console.log(suma);

let max = numeros.reduce((a, b) => a > b ? a : b);
console.log(max);

let suma = numeros.reduce((a, b, i, arr) => {
    b = b + a;
    return i == arr.length - 1 ? b / arr.length : b
});

console.log(promedio);

let mejorEstudiante = estudiantes.reduce((a, b) => {
    if (a.calificacion > b.calificacion) {
        return {
            nombre: a.nombre,
            calificacion: a.calificacion
        }
    } else {
        return {
            nombre: b.nombre,
            calificacion: b.calificacion
        }
    }
});

console.log(mejorEstudiante);