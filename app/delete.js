//DELETE
const users = [`cgonzalez@hubescuela.com`, `test@test.com`];
const deletedUsers = [];

function doesItExist(param1) {
  const user = users.find((value) => value === param1);
  if (user === undefined) {
    return "Usuario no encontrado";
  }
  deletedUsers.push(param1);
  const positionIndex = users.indexOf(user);
  users.splice(positionIndex, 1);
  console.log(users);
  console.log(deletedUsers);
}
return doesItExist(`cgonzalez@hubescuela.com`);
