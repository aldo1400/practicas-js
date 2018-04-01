let arr = [1, '2', 3, 4, 5,'true', 6];
// 0 1 2 3 4

// true es equivalente a 1
// console.log(arr.length);
// console.log(arr[0]);

let sum = 0;

for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if(typeof element =='number'){
        sum += element;
    }
    
}
console.log(sum);
Array.prototype.saludo='Hola'; //Se añade la propiedad saludo al prototipo del array.
console.log(arr.saludo);