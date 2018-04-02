let arr = [1, '2', 3, 4, 5, 'true', 6];

// .find(cb);  =>devuelve  el primer valor que cumpla con una condicion
let arr = [1, 2, 3, 4, 5];
let num = arr.find(el => el > 3);
let numIndex = arr.findIndex(el => el > 3);
console.log(num);
console.log(numIndex);

// Iteradores
// Son objetos que contienen un metodo next()
// Ese metodo devuelve un objeto con dos propiedades
// value,done

//.keys()  .values()  .entries()

let iterador=arr.keys();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());