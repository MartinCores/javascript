//Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número
//te devuelva la siguiente clasificación: 0-4: Insuficiente, 5-6: Suficiente, 7-8: Notable, 9-10: Sobresaliente.
function devolveNota(mark) {
  switch (mark) {
    case mark < 5:
      console.log(`0-4: Insuficiente`);
      break;

    case mark >= 5:
      console.log(`5-6: Suficiente`);
      break;
  }
}
console.log(devolveNota(7));
