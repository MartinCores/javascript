//LOG IN
const users = [`cgonzalez@hubescuela.com`, `test@test.com`];

//logIn comproba que o email introducido coincide coa lista de emails da constante users:

const logIn = (email, password) => {
  const result = users.find((value) => value === email);

  if (result === undefined) {
    return "Usuario no encontrado";
  }

  return result;
};

console.log(logIn(`cgonzalez@hubeuela.com`, `password`));
