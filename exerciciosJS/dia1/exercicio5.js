//Completa la función getLastCharacter de modo que retorne el último carácter del parámetro name que recibe
const name = "cousa";

function getLastCharacter(name) {
  return name[name.length - 1];
}

console.log(getLastCharacter(name));
