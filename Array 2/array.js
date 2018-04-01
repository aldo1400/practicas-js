let arr = [1, '2', 3, 4, 5, 'true', 6];

// indexOf ->Devuelve el indice del valor que estas buscando
console.log(arr.indexOf(15));

// Agregar elementos con 
// .push(el1,el2,el3)  -> Añade al final 
// .unshift(el1,el2,el3)->Añade al inicio,devuelve el nuevo tamaño del

console.log(arr.length);
let newlength = arr.unshift('javascript', 'desde', 'cero');
console.log(newlength);
console.log(arr);


// Eliminar un solo elemento
// .pop() al final,devuelve la variable eliminada
// .shift() al inicio,devuelve la variable eliminada

let deletedE1 = arr.pop();
console.log(arr);
console.log(deletedE1);

let deletedE2 = arr.shift();
console.log(arr);
console.log(deletedE2);


// .join('separador') convierte un array en un string
// separador por defecto es una coma

console.log(arr.join(''))


// splice(a,b,items) , devuelve el array modificado
// añade o quita elementos
// a -> indice del Array
// b->elementos a eliminar
// items ->son los nuevos elementos


arr.splice(2, 2, 'escuela', 'digital', 'ED');
console.log(arr);


// slice(a,b) ,devuelve un nuevo array recortado
//  a -> indice donde empieza el recorte
//  b->indice donde acaba el recorte

let arr2 = arr.slice(); //  Esta es la mejor forma de crear una copia de un array
console.log(arr2);