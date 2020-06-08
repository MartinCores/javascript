//Register

const users = [`cgonzalez@hubescuela.com`, `test@test.com`];

//

if (users.indexOf(email) !== -1) {
  return (result = "errormail");
}
if (users.indexOf(email) === -1) {
  users.unshift(email);
}

if (age < 18) {
  return (result = "erroridade");
}
if (age >= 18) {
  console.log("maior de idade");
}

const falseRegister = (password, password2);
if (password !== password2) {
  return (result = "errorpassword");
}
if (password === password2) {
  console.log("password correcta");
}

//regsiter debe comprobar que a idade é > 18, contraseña = contraseña2 e o email non existe xa en users.
//indexOf comproba que o email non exista, se non existe, agrégase ao Array orixinal a través de unshift:
const users = [`cgonzalez@hubescuela.com`, `test@test.com`];

function checkPass(pass1, pass2) {
  if (pass1 !== pass2) {
    return false;
  }
  return true;
}
function checkAge(age1) {
  if (age1 >= 18) {
    return true;
  }
  return false;
}
function doesItExist(email1) {
  const result = users.find((value) => value === email1);
  if (result === undefined) {
    return false;
  }
  return true;
}
const register = (firstName, lastName, email, password, password2, age) => {
  const pass = checkPass(password, password2);

  if (pass === false) {
    return "Las contraseñas no coinciden";
  }

  const age1 = checkAge(age);

  if (age1 === false) {
    return "Pa tu casa. A ver Pocoyó.";
  }

  const email1 = doesItExist(email);
  if (email === false) {
    return "Email en uso";
  }
  users.unshift(email);
  return users;
};

console.log(
  register(
    `Antón`,
    `Estévez`,
    `test@test.com`,
    `contrasinal`,
    `contrasinal`,
    `32`
  )
);
