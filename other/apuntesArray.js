const arr1 = [1, 2, 3, "ola", "adeus"];
arr1[3] = 100;
console.log(arr1);

let arr2 = [1, 2];
arr2.push(25, "que onda"); //engade 2 novos valores ó final
console.log(arr2);

let arr3 = [1, 2];
arr3.unshift(1500); //agrega un valor ó inicio
console.log(arr3);

let arr4 = [1, 2];
arr4.pop(); //borra o último elemento
console.log(arr4);

let arr5 = [1, 2, 3];
arr5.shift(); //borra o primeiro elemento
console.log(arr5);

let arr6 = [1, 2, 3, 4, 5];
arr6.splice(0, 2); //elimina do array os elementos 0 e 1
console.log(arr6);

const arr7 = [1, 2, 3];
console.log(arr7.length); // 3

const arr8 = [1, 2, 3];
const arr8Copy = arr8.slice(); //hace una copia de nuestro array
console.log(arr8Copy); // [ 1, 2, 3 ]

const arr7 = ["array", "nº", "7"];
const arr8 = ["array", "nº", "8"];
const concatArray = arr7.concat(arr8); //concatena dous arrays, éste pasa de 3 a 6
console.log(concatArray);

const arr8 = [1, 2, 3, 4, 5];
console.log(arr8.indexOf(5)); //devolve a posición do valor 5 no array (4)
console.log(arr8.indexOf("hola")); //devolve -1 ao non atopar a cadea "hola" no array

const arr5 = [1, 2, 3];
console.log(arr5.length); // 3

let array = [1, 2, 50];
console.log(arrayWithin[0]);

//OUTRAS CARACTERÍSTEICAS - FOR EACH

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach((value, index) => {
  console.log(value);
});

arr.forEach((value) => console.log(value)); //Cando as arrow functions teñen un só elemento podense escribir así.

arr.forEach(function (value, index) {
  console.log(value);
});

//ARRAY MAP: Devolve un valor por cada iteración. El primer parámetro que recibe MAP es una arrow function, nos permite operar con todos los valores de la funcion

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const result = arr.map((value, index, array) => value * 5);
console.log(result);
console.log(arr); //o array orixinal non cambia

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const test = function (value) {
  return value * 5;
};

const items = [1, 4, 7];
const prices = items.map((item, index) => {
  if (item > 5) {
    return item * 5;
  }
  return item;
});
console.log(prices);
console.log(items);

//ARRAY FILTER

const items = [120, 40, 750, 25, 10, 205];
const expensiveItems = items.filter((item, index) => {
  if (item > 100) {
    return item;
  }
});
console.log(expensiveItems);

//ARRAY FIND útil para obter elementos por id
const items = [1, 40, 750, 25, 10, 205];

const findById = items.find((value) => {
  return value.id === 1;
});
console.log(findById);
