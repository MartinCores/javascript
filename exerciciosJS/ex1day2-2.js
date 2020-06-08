//Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número
//te devuelva la siguiente clasificación: 0-4: Insuficiente, 5-6: Suficiente, 7-8: Notable, 9-10: Sobresaliente.
function obtenerNota(nota) {
  if (nota >= 0 && nota <= 4) {
    return `0-4: Insuficiente`;
  } else if (nota < 7) {
    return `5-6: Suficiente`;
  } else if (nota < 9) {
    return `7-8: Notable`;
    5;
  } else if (nota >= 9) {
    return `9-10: Sobresaliente`;
  }
}
console.log(obtenerNota(2));
console.log(obtenerNota(6));
console.log(obtenerNota(7));
console.log(obtenerNota(9));
