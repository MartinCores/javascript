//Completa la función para que añada “nuevo dato recibido” al array que recibe como parámetro

function useCalculator(app1, app2) {
  const apps = ["Instagram", "Youtube"];
  apps.push(app1, app2);
  return apps;
}
console.log(useCalculator("Facebook", "Twitter"));
