//LIST
//Generar una función que liste los usuarios existentes en el array users.Para ello utiliza una callback que
//sí el usuario está en la última posición del array, muestre el texto “ Pendiente de activar ”.
const users = [`cgonzalez@hubescuela.com`, `test@test.com`, "user3@terra.com"];

const checkUser = (email) => {
  const firstResult = users.find((value) => value === email);
  if (firstResult === undefined) {
    return "Usuario no encontrado";
  }
  return firstResult;
};

const lastUserMsg = (value) => {
  if (checkUser(item) === "Usuario no encontrado") {
    return "No existe el usuario";
  }
  const result = item;
  if (result === users[users.length - 1]) {
    return "Pendiente de activar";
  }
  return users;
  console.log(`Pendiente de activar`);
};
function list(callback, array) {
  const end = array[array.length - 1];
  const endIndex = array.indexOf(end);

  array.map((value, index) => {
    if (index !== endIndex) {
      return value;
    }
    return callback(value);
  });
}

console.log(list(lastUserMsg, users));
