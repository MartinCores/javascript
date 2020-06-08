function sayHello() {
  let name = "juan";
  console.log(name);
}
sayHello();
// Por defecto utilizar const, cando
// haxa que asignarlle un valor pasas a let

function fibonacci() {
  let n1 = 1;
  let n2 = 1;
  console.log(n1 + n2);
}

//STRINGS
//A propiedade length retorna a lonxitude dun string: "hello".length --> devolve 5
//A propiedade includes serve para buscar contido nunha cadea "hello".includes("hello") --> devolve true
//En VS Code manter presionado ctrl sobre unha propiedade para ler a descricion.
//toUpperCase() retorna un nuevo string con todos sus caracteres en mayúsculas.
//toLowerCase() pois iso.

//Podemos acceder a un carácter en concreto dun string utilizando a notación de corchetes [].
//Teremos que incluír o índice do elemento ao que queremos acceder empezando por 0.

//SUBSTRINGS
//Un substring ´´e unha parte dun string, por exemplo "llo" é un substring de "hello"
//Concat strings: el signo + tiene diferentes comportamientos en función del tipo de variables que estemos usando, debido a su propiedad
//type coercion.
//Template strings: servern para salvar o impedimento de que as strings non permitan a interpolación de variables.
//para crear unha template string utilizamos a comilla invertida ` ` (acento grave). Tamén nos permitirán decarar variables en
//múltiples liñas.
//trim() elimina espacios en blanco ao inicio e fin dunha cadea.

//EXERCICIO 1. Completa a función. getNameLength de modo que retorne a lonxitude do parámetro name que reciba.
