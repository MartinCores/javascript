//REGISTER

const users = [`cgonzalez@hubescuela.com`, `test@test.com`];

//Comproba as contrasinais e devolve false en caso de que sexan diferentes
function checkPass(pass1, pass2) {
  if (pass1 !== pass2) {
    return false;
  }
  return true;
}
//comproba que a idade sexa maior de 18 e devolve true se é así
function checkAge(age1) {
  if (age1 >= 18) {
    return true;
  }
  return false;
}
//Busca no array o email introducido e comproba que non se repite. Se non está definido, retorna false.
function doesItExist(email1) {
  const result = users.find((value) => value === email1);
  if (result === undefined) {
    return false;
  }
  return true;
}

//Aplica as tres funcions anteriores para evitar conflictos de datos, unha vez verificado devolve un novo array.
const register = (firstName, lastName, email, password, password2, age) => {
  const pass = checkPass(password, password2);
  if (!pass) {
    //if(pass === false)
    return "Las contraseñas no coinciden";
  }

  const isOld = checkAge(age);
  if (!isOld) {
    return "Pa tu casa a ver Pocoyó.";
  }

  const exists = doesItExist(email);
  if (exists) {
    //if(exists === true)
    return "Email en uso";
  }
  users.unshift(email);
  return users;
};

console.log(
  register(
    `Antón`,
    `Estévez`,
    `test2@test.com`,
    `contrasinal`,
    `contrasinal`,
    `19`
  )
);
