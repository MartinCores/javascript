//Completa la función getThreeChars de modo que retorne 3 caracteres empezando en el segundo carácter del parámetro name que
//recibe la funcion
const name = "elochenso";

function getThreeChars(name) {
  return name.substring(1, 4);
}
console.log(getThreeChars(name));
