//Completa la función para que añada el parámetro recibido app al
//array que también recibimos por parámetro
function useApp(apps, app) {
  apps.push(app);
  return apps;
}
console.log(useApp(["Clock", "Twitter"], "Firefox"));
